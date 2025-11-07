import { z } from "zod";

export const provider = z.enum(["openai", "anthropic", "open-source"]);

export const oaiEncodings = z.enum([
  "gpt2",
  "r50k_base",
  "p50k_base",
  "p50k_edit",
  "cl100k_base",
  "o200k_base",
]);

export const chatModels = z.enum([
  "gpt-4o",
  "gpt-3.5-turbo",
  "gpt-4",
  "gpt-4-32k",
  "gpt-4-1106-preview",
]);

export const legacyTextModels = z.enum([
  "text-davinci-003",
  "text-davinci-002",
  "text-davinci-001",
  "text-curie-001",
  "text-babbage-001",
  "text-ada-001",
  "davinci",
  "curie",
  "babbage",
  "ada",
  "code-davinci-002",
  "code-davinci-001",
  "code-cushman-002",
  "code-cushman-001",
  "davinci-codex",
  "cushman-codex",
  "text-davinci-edit-001",
  "code-davinci-edit-001",
]);

export const embeddingModels = z.enum([
  "text-embedding-ada-002",
  "text-embedding-3-small",
  "text-embedding-3-large",
]);

export const legacyEmbeddingModels = z.enum([
  "text-similarity-davinci-001",
  "text-similarity-curie-001",
  "text-similarity-babbage-001",
  "text-similarity-ada-001",
  "text-search-davinci-doc-001",
  "text-search-curie-doc-001",
  "text-search-babbage-doc-001",
  "text-search-ada-doc-001",
  "code-search-babbage-code-001",
  "code-search-ada-code-001",
]);

export const oaiModels = z.enum([
  ...chatModels.options,
  ...legacyTextModels.options,
  ...legacyEmbeddingModels.options,
  ...embeddingModels.options,
]);

export const openSourceModels = z.enum([
  // Meta Llama 系列
  // "meta-llama/Llama-2-7b-hf",
  "meta-llama/Meta-Llama-3-8B",
  "meta-llama/Meta-Llama-3-70B",
  // "meta-llama/Meta-Llama-3.1-8B",  // 403 Forbidden
  // "meta-llama/Meta-Llama-3.1-70B",  // 403 Forbidden
  // "meta-llama/Meta-Llama-3.1-405B",  // 403 Forbidden
  // "meta-llama/Llama-3.2-1B",  // 403 Forbidden
  // "meta-llama/Llama-3.2-3B",  // 403 Forbidden
  // "meta-llama/Llama-3.2-11B-Vision-Instruct",  // 403 Forbidden
  // "meta-llama/Llama-3.2-90B-Vision-Instruct",  // 403 Forbidden
  "meta-llama/Llama-4-Scout-17B-16E-Instruct",
  "meta-llama/Meta-Llama-3.1-8B-Instruct",
  "meta-llama/Meta-Llama-3.1-70B-Instruct",
  "meta-llama/Meta-Llama-3.1-405B-Instruct",

  // Code Llama 系列
  "codellama/CodeLlama-7b-hf",
  "codellama/CodeLlama-70b-hf",
  "codellama/CodeLlama-34b-hf",

  // DeepSeek 系列
  "deepseek-ai/DeepSeek-R1",
  "deepseek-ai/DeepSeek-R1-Distill-Llama-70B",
  "deepseek-ai/DeepSeek-R1-Distill-Qwen-7B",
  "deepseek-ai/DeepSeek-R1-Distill-Llama-8B",
  "deepseek-ai/DeepSeek-V3",
  "deepseek-ai/DeepSeek-V3-0324",
  "deepseek-ai/DeepSeek-V2.5",
  "deepseek-ai/DeepSeek-V2",
  "deepseek-ai/DeepSeek-Coder-V2-Lite-Instruct",
  "deepseek-ai/DeepSeek-Coder-V2",

  // Qwen 系列（阿里）
  "Qwen/Qwen2.5-72B",
  "Qwen/Qwen2.5-32B",
  "Qwen/Qwen2.5-14B",
  "Qwen/Qwen2.5-7B",
  "Qwen/Qwen2.5-3B",
  "Qwen/Qwen2-72B",
  "Qwen/Qwen2-57B-A14B",
  "Qwen/Qwen2-1B",
  "Qwen/QwQ-32B",
  "Qwen/QwQ-32B-Preview",
  "Qwen/Qwen2.5-Math-72B",
  "Qwen/Qwen2.5-Coder-32B-Instruct",
  "Qwen/Qwen2.5-Coder-7B",
  "Qwen/QVQ-72B-Preview",

  // Microsoft Phi 系列（高效小模型）
  "microsoft/phi-2",
  "microsoft/Phi-3-mini-4k-instruct",
  // "microsoft/Phi-3-small-8k-instruct",  // 403 Forbidden
  "microsoft/Phi-3-medium-4k-instruct",
  "microsoft/Phi-4",

  // Grok 系列 (xAI)
  // "xai-org/grok-1",  // 404 Not Found
  // "xai-org/Grok-2-1212",  // 404 Not Found

  // Google Gemma 系列
  // "google/gemma-7b",
  // "google/gemma-2-9b",  // 403 Forbidden
  // "google/gemma-2-27b",  // 403 Forbidden

  // Mistral 系列
  // "mistralai/Mistral-7B-v0.1",
  // "mistralai/Mistral-Large-Instruct-2407",  // 403 Forbidden
  "mistralai/Mistral-Small-Instruct-2409",
  "mistralai/Mistral-7B-Instruct-v0.3",
  "mistralai/Mixtral-8x7B-Instruct-v0.1",
  "mistralai/Mixtral-8x22B-Instruct-v0.1",
  "mistralai/Mistral-Nemo-Instruct-2407",
  "mistralai/Mistral-7B-v0.1",

  // Falcon 系列
  "tiiuae/falcon-7b",
  "tiiuae/falcon-11b",
  // "tiiuae/falcon-180B-chat",  // 403 Forbidden

  // Yi 系列
  "01-ai/Yi-6B",
  "01-ai/Yi-1.5-34B",
  "01-ai/Yi-1.5-9B",
  "01-ai/Yi-Coder-9B",
  // "01-ai/Yi-Vision-34B",  // 404 Not Found

  // Claude 系列 (Anthropic)
  // 注: Anthropic 的模型通常需要通过官方 API 访问，不在 HuggingFace 上发布完整模型

  // Google 的思维链模型
  // "google/deepseek-r1",  // 404 Not Found

  // NousResearch/Hermes 系列
  "NousResearch/Hermes-3-Llama-3.1-405B",
  "NousResearch/Hermes-2-Theta-Llama-3-8B",
  // "NousResearch/Hermes-3-Llama-3.1-70B",  // fetch failed

  // Databricks 系列
  // "databricks/dbrx-instruct",  // 403 Forbidden
  // "databricks/dbrx-base",  // 403 Forbidden

  // NVIDIA 系列
  // "nvidia/Llama2-70b-nvsl",  // 404 Not Found

  // 其他优质模型
  // "unslothai/Llama-3.2-70B-Vision-Instruct",  // 404 Not Found
  // "unslothai/Llama-3.2-11B-Vision-Instruct",  // 404 Not Found
  "openchat/openchat-3.5-1210",
  // "teknium/OpenHermes-2.5-Mistral-7B",  // 404 Not Found
  "mistralai/Mistral-7B-Instruct-v0.2",
  "NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO",
  // "teknium/Hermes-3-Llama-3.1-8B",  // 404 Not Found

  // Llama 2 系列
  "meta-llama/Llama-2-7b-hf",
  "meta-llama/Llama-2-70b-hf",
  "meta-llama/Llama-2-13b-hf",

  // Gemma 系列 (Google)
  // "google/gemma-7b",  // 404 Not Found
  // "google/gemma-2b",  // 404 Not Found

  // Llava 视觉模型
  "llava-hf/llava-1.5-7b-hf",
  "llava-hf/llava-1.5-13b-hf",

  // 其他热门模型
  "meta-llama/Llama-2-7b-chat-hf",
  "meta-llama/Llama-2-70b-chat-hf",
  // "mistralai/Mistral-7B",  // 404 Not Found
  // "NousResearch/Nous-Hermes-2-Mistral-7B-DPO",  // 404 Not Found
  // "lmsys/vicuna-7b-v1.5",  // 404 Not Found
  // "lmsys/vicuna-13b-v1.5",  // 404 Not Found
  "stabilityai/stablelm-3b-4e1t",
  "stabilityai/stablelm-zephyr-3b",

  // Baichuan 系列 (百川)
  // "baichuan-inc/Baichuan-7B",  // 404 Not Found
  // "baichuan-inc/Baichuan2-7B-Base",  // 404 Not Found
  // "baichuan-inc/Baichuan2-13B-Base",  // 404 Not Found

  // Internlm 系列
  // "internlm/internlm2-7b",  // 404 Not Found
  // "internlm/internlm2-20b",  // 404 Not Found

  // Bloom 系列
  "bigscience/bloom",
  "bigscience/bloom-7b1",

  // Mistral 小模型
  "mistralai/Mistral-7B-Instruct-v0.1",

  // 更多 Phi 模型
  "microsoft/Phi-3.5-mini-instruct",
  // "microsoft/Phi-3-small-128k-instruct",  // 404 Not Found

  // Yi 更多变体
  "01-ai/Yi-6B-Chat",
  "01-ai/Yi-1.5-6B",

  // Zephyr 系列
  "HuggingFaceH4/zephyr-7b-beta",
  "HuggingFaceH4/zephyr-7b-alpha",

  // Orca 系列
  // "microsoft/Orca-2-7b",  // 404 Not Found
  // "microsoft/Orca-2-13b",  // 404 Not Found

  // Dolphin 系列
  // "cognitivecomputations/Dolphin-2.6-Mixtral-8x7b",  // 404 Not Found

  // Airoboros 系列
  "jondurbin/airoboros-l2-7b-gpt4-1.4.1",

  // Chinese 特化模型
  "wenge-research/yayi-7b",
  // "THUDM/chatglm3-6b",  // 404 Not Found
  // "THUDM/chatglm3-6b-32k",  // 404 Not Found
  // "THUDM/chatglm2-6b",  // 404 Not Found
]);

export function tempLlama3HackGetRevision(model: AllModels): string {
  // if (model === "meta-llama/Meta-Llama-3-8B") {
  //   return "refs/pr/35";
  // } else if (model === "meta-llama/Meta-Llama-3-70B") {
  //   return "refs/pr/5";
  // } else {
  //   return "main";
  // }
  return "main"
}

export const hackModelsRemoveFirstToken = z.enum([
  "meta-llama/Llama-2-7b-hf",
  "codellama/CodeLlama-7b-hf",
  "codellama/CodeLlama-70b-hf",
]);

export const allModels = z.enum([
  ...oaiModels.options,
  ...openSourceModels.options,
]);

export type AllModels = z.infer<typeof allModels>;

export const allOptions = z.enum([
  ...allModels.options,
  ...oaiEncodings.options,
]);

export type AllOptions = z.infer<typeof allOptions>;

export const MODELS = allModels.options;

export const POPULAR: z.infer<typeof allOptions>[] = [
  "cl100k_base",
  "o200k_base",
  "gpt-4o",
  "gpt-4-1106-preview",
  "gpt-3.5-turbo",
  "deepseek-ai/DeepSeek-V3",
  "Qwen/Qwen2.5-72B",
  "mistralai/Mistral-Small-Instruct-2409",
  "meta-llama/Meta-Llama-3-70B",
  "codellama/CodeLlama-7b-hf",
  "microsoft/Phi-3-mini-4k-instruct",
];

export function isChatModel(
  model: AllOptions
): model is z.infer<typeof chatModels> {
  return (
    model === "gpt-3.5-turbo" ||
    model === "gpt-4o" ||
    model === "gpt-4" ||
    model === "gpt-4-1106-preview" ||
    model === "gpt-4-32k"
  );
}

export function isValidOption(model: unknown): model is AllOptions {
  return allOptions.safeParse(model).success;
}
