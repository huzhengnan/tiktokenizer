import { env } from "~/env.mjs";
import { openSourceModels, tempLlama3HackGetRevision } from "~/models";
import { promises as fs } from "fs";
import { resolve } from "path";
import { z } from "zod";
import { ProxyAgent } from "undici";
import { fetch as fetchWithProxy } from "undici";

async function download() {
  // 设置代理
  const proxyUrl = 'http://localhost:7890';
  const proxyAgent = new ProxyAgent(proxyUrl);

  const failedModels: string[] = [];
  const successfulModels: string[] = [];

  try {
    for (const modelName of Object.values(openSourceModels.Values)) {
      const [orgId, modelId] = z
        .tuple([z.string(), z.string()])
        .parse(modelName.split("/"));

      const rev = tempLlama3HackGetRevision(modelName);
      let modelSuccess = true;

      for (const file of ["tokenizer.json", "tokenizer_config.json"]) {
        const targetDir = resolve("public/hf", orgId, modelId);
        const targetPath = resolve(targetDir, file);

        if (await fs.stat(targetPath).catch(() => null)) {
          console.log("Skipping", targetPath);
          continue;
        }

        console.log(`Downloading ${file} for ${modelName}...`);

        // eg https://huggingface.co/codellama/CodeLlama-7b-hf/resolve/main/tokenizer.json
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 100000); // 100秒超时
        const url = `https://huggingface.co/${orgId}/${modelId}/resolve/${encodeURIComponent(rev)}/${file}`;
        console.log("Fetching", url);
        try {
          // 使用代理下载
          const res = await fetchWithProxy(
            url,
            {
              headers: {
                Authorization: `Bearer ${env.HF_API_KEY}`,
                ContentType: "application/json",
              },
              signal: controller.signal,
              dispatcher: proxyAgent
            }
          );

          clearTimeout(timeoutId);

          if (!res.ok) {
            console.warn(`⚠️  Warning: ${res.status} ${res.statusText} for ${modelName} - ${file}`);
            modelSuccess = false;
            continue;
          }

          await fs.mkdir(targetDir, { recursive: true });
          console.log("Writing to", targetPath);
          await fs.writeFile(targetPath, await res.text());
        } catch (error) {
          clearTimeout(timeoutId);
          console.warn(`⚠️  Warning downloading ${file} for ${modelName}:`, error instanceof Error ? error.message : String(error));
          modelSuccess = false;
        }
      }

      if (modelSuccess) {
        successfulModels.push(modelName);
      } else {
        failedModels.push(modelName);
      }
    }
  } finally {
    // 打印统计信息
    console.log("\n=== Download Summary ===");
    console.log(`✅ Successful: ${successfulModels.length} models`);
    if (successfulModels.length > 0) {
      console.log("  ", successfulModels.join(", "));
    }
    console.log(`⚠️  Failed/Skipped: ${failedModels.length} models`);
    if (failedModels.length > 0) {
      console.log("  ", failedModels.join(", "));
    }
  }
}

download();
