import { env } from "~/env.mjs";
import { openSourceModels, tempLlama3HackGetRevision } from "~/models";
import { promises as fs } from "fs";
import { resolve } from "path";
import { z } from "zod";
import { ProxyAgent } from "undici";
import { fetch as fetchWithProxy } from "undici";

async function download() {
  // 设置代理
  // const proxyUrl = 'http://localhost:7890';
  // const proxyAgent = new ProxyAgent(proxyUrl);

  // 不再替换全局fetch，而是直接使用undici的fetch

  try {
    for (const modelName of Object.values(openSourceModels.Values)) {
      const [orgId, modelId] = z
        .tuple([z.string(), z.string()])
        .parse(modelName.split("/"));

      const rev = tempLlama3HackGetRevision(modelName);

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
          // 直接使用undici的fetch，而不是全局fetch
          const res = await fetchWithProxy(
            url,
            {
              headers: {
                Authorization: `Bearer ${env.HF_API_KEY}`,
                ContentType: "application/json",
              },
              signal: controller.signal,
              // dispatcher: proxyAgent
            }
          );

          clearTimeout(timeoutId);

          if (!res.ok) {
            throw new Error(`Failed to fetch ${file} for ${modelName}: ${res.status} ${res.statusText}`);
          }

          await fs.mkdir(targetDir, { recursive: true });
          console.log("Writing to", targetPath);
          await fs.writeFile(targetPath, await res.text());
        } catch (error) {
          clearTimeout(timeoutId);
          console.error(`Error downloading ${file} for ${modelName}:`, error);
          throw error;
        }
      }
    }
  } finally {
    // 不再需要恢复全局fetch
  }
}

download();
