import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { TextArea } from "~/components/Input";
import type { AllOptions } from "~/models";
import { isChatModel, isValidOption } from "~/models";
import { createTokenizer } from "~/models/tokenizer";
import { EncoderSelect } from "~/sections/EncoderSelect";
import { TokenViewer } from "~/sections/TokenViewer";
import { ChatGPTEditor } from "~/sections/ChatGPTEditor";
import { Twitter, Github } from "lucide-react";
import Link from "next/link";

// 模型描述映射
const MODEL_DESCRIPTIONS: Record<string, { title: string; description: string }> = {
  "gpt-4": {
    title: "GPT-4 Tokenizer - Advanced Token Visualization",
    description: "Visualize how GPT-4 tokenizes text. Understand token usage and optimize your prompts for OpenAI's most advanced model."
  },
  "gpt-4o": {
    title: "GPT-4o Tokenizer - Optimized Token Visualization",
    description: "Explore GPT-4o tokenization with our visualization tool. See how text is broken down into tokens for OpenAI's optimized model."
  },
  "gpt-3.5-turbo": {
    title: "GPT-3.5 Turbo Tokenizer - Efficient Token Visualization",
    description: "Analyze how GPT-3.5 Turbo processes text into tokens. Optimize your prompts and understand token usage for this popular OpenAI model."
  },
  "llama-3": {
    title: "Llama 3 Tokenizer - Open Source LLM Token Visualization",
    description: "Visualize tokenization for Meta's Llama 3 model. Understand how this open-source LLM processes text into tokens."
  }
};

// Example texts (already in English)
const EXAMPLE_TEXTS = [
  "Large Language Models (LLMs) are deep learning-based natural language processing models capable of understanding and generating human language.",
  "Tokenization is the process of breaking down text into smaller units called tokens.",
  "GPT-4 is a large language model developed by OpenAI with powerful natural language understanding and generation capabilities.",
  "Llama 3 is an open-source large language model developed by Meta that performs excellently on various tasks."
];

const ModelPage: NextPage<{ model: AllOptions }> = ({ model: initialModel }) => {
  const router = useRouter();
  const { model: modelParam } = router.query;
  const model = (isValidOption(modelParam as string) ? modelParam : initialModel) as AllOptions;
  
  const [inputText, setInputText] = useState<string>("");
  const tokenizer = useQuery({
    queryKey: [model],
    queryFn: ({ queryKey: [model] }) => createTokenizer(model!),
  });

  const tokens = tokenizer.data?.tokenize(inputText);
  const isEmpty = !inputText || inputText.trim() === "";

  // 选择示例文本的函数
  const handleExampleClick = (text: string) => {
    setInputText(text);
  };

  // 获取模型描述
  const modelInfo = MODEL_DESCRIPTIONS[model] || {
    title: `${model} Tokenizer - Token Visualization Tool`,
    description: `Visualize how ${model} tokenizes text. Understand token usage and optimize your prompts.`
  };

  return (
    <>
      <Head>
        <title>{modelInfo.title}</title>
        <meta name="description" content={modelInfo.description} />
        <meta name="keywords" content={`tokenizer, ${model}, tokenization, large language models, LLM, tokens, AI, artificial intelligence`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={modelInfo.title} />
        <meta property="og:description" content={modelInfo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://tiktokenizer.app/models/${model}`} />
        <meta property="og:image" content="https://tiktokenizer.app/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={modelInfo.title} />
        <meta name="twitter:description" content={modelInfo.description} />
        <meta name="twitter:image" content="https://tiktokenizer.app/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://tiktokenizer.app/models/${model}`} />

        {/* Schema.org Structured Data - Tool/SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Tool",
              "name": `${model} Tokenizer - Tiktokenizer`,
              "description": modelInfo.description,
              "url": `https://tiktokenizer.app/models/${model}`,
              "applicationCategory": "DeveloperApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </Head>
      <main className="mx-auto flex min-h-screen max-w-[1200px] flex-col gap-4 p-8">
        <header className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-4xl font-bold">Tiktokenizer</h1>
            <p className="text-slate-600 mt-2">
              <span className="font-medium">{model}</span> tokenization visualization tool
            </p>
          </div>

          <EncoderSelect
            value={model}
            isLoading={tokenizer.isFetching}
            onChange={(update) => {
              router.push(`/models/${update}`);
            }}
          />
        </header>

        {/* Main content area - similar to homepage */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Input area */}
          <section className="flex flex-col gap-4" aria-labelledby="input-section">
            <h2 id="input-section" className="sr-only">Input Text</h2>
            {isChatModel(model) && (
              <ChatGPTEditor model={model} onChange={setInputText} />
            )}

            <TextArea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[256px] rounded-md border p-4 font-mono shadow-sm"
              placeholder="Enter text to analyze tokenization..."
              aria-label="Input text for tokenization"
            />
          </section>

          {/* Results area */}
          <section className="flex flex-col gap-4" aria-labelledby="token-section">
            <h2 id="token-section" className="sr-only">Tokenization Results</h2>
            {isEmpty ? (
              <div className="flex flex-col items-center justify-center min-h-[256px] border rounded-md p-4">
                <h3 className="text-lg font-medium mb-4">Example Texts</h3>
                <p className="text-slate-600 mb-4">Click on an example below to see tokenization results:</p>
                <div className="flex flex-col gap-2 w-full">
                  {EXAMPLE_TEXTS.map((text, index) => (
                    <button
                      key={index}
                      onClick={() => handleExampleClick(text)}
                      className="text-left p-2 border rounded hover:bg-slate-50 transition-colors"
                    >
                      {text.length > 60 ? text.substring(0, 60) + '...' : text}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <TokenViewer model={model} data={tokens} isFetching={false} />
            )}
          </section>
        </div>
        
        {/* Model specific information */}
        <div className="mt-8 border-t pt-6">
          <h2 className="text-xl font-bold mb-4">About {model} Tokenization</h2>
          <div className="prose max-w-none">
            {model === "gpt-4" && (
              <p>
                GPT-4 uses the cl100k_base tokenizer, which can encode text into tokens more efficiently than previous tokenizers. 
                It handles various languages, special characters, and whitespace with improved accuracy, allowing GPT-4 to process 
                information more effectively.
              </p>
            )}
            {model === "gpt-4o" && (
              <p>
                GPT-4o uses the o200k_base tokenizer, which is an advanced tokenization system designed for the optimized version 
                of GPT-4. This tokenizer provides enhanced efficiency for processing various languages and special characters.
              </p>
            )}
            {model === "gpt-3.5-turbo" && (
              <p>
                GPT-3.5 Turbo uses the cl100k_base tokenizer, which efficiently breaks down text into tokens. This tokenizer 
                was designed to handle multiple languages and special characters effectively, making it versatile for various applications.
              </p>
            )}
            {model === "cl100k_base" && (
              <p>
                cl100k_base is the tokenizer used by GPT-4 and GPT-3.5 Turbo. It has a vocabulary of 100,000 tokens and 
                efficiently handles multiple languages, special characters, and whitespace with improved accuracy compared to earlier tokenizers.
              </p>
            )}
            {model === "p50k_base" && (
              <p>
                p50k_base is the tokenizer used by older GPT-3 models. It has a vocabulary of 50,000 tokens and was designed 
                to handle English text efficiently, though it can process other languages as well.
              </p>
            )}
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2">Token Usage Tips</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Shorter prompts use fewer tokens and can reduce API costs</li>
              <li>Different languages tokenize differently - some languages use more tokens per word than others</li>
              <li>Special characters and whitespace count as tokens</li>
              <li>Understanding tokenization can help you optimize your prompts for better results</li>
            </ul>
          </div>
        </div>

        {/* Footer content */}
        <div className="flex justify-between items-center text-center md:mt-6">
          <p className="text-sm text-slate-400">
            Built by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="text-slate-800"
              href="https://1000ai.ai"
            >
              1000ai
            </a>
            {" | "}
            <Link
              href="/"
              className="text-slate-800"
            >
              Home
            </Link>
          </p>
          
          <div className="flex gap-3">
            <a 
              href={`https://twitter.com/intent/tweet?text=Check%20out%20the%20${model}%20tokenizer%20visualization%20tool&url=https%3A%2F%2Ftiktokenizer.app%2Fmodels%2F${model}`}
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-blue-500"
              aria-label="Share on Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://github.com/huzhengnan/tiktokenizer"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-slate-900"
              aria-label="View on GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* 添加结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": `Tiktokenizer - ${model} Tokenization Tool`,
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": modelInfo.description,
              "creator": {
                "@type": "Organization",
                "name": "1000ai",
                "url": "https://1000ai.ai"
              },
              "url": `https://tiktokenizer.app/models/${model}`,
              "inLanguage": "en",
              "potentialAction": {
                "@type": "UseAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `https://tiktokenizer.app/models/${model}`,
                  "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform"
                  ]
                },
                "expectsAcceptanceOf": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://tiktokenizer.app/models/${model}`
              },
              "sameAs": [
                "https://github.com/huzhengnan/tiktokenizer"
              ]
            })
          }}
        />
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // 定义要预渲染的模型路径
  const models = [
    "gpt-4",
    "gpt-4o",
    "gpt-3.5-turbo",
    "llama-3",
    "llama-2",
    "codellama",
    "qwen",
    "mistral",
    "cl100k_base",
    "p50k_base"
  ];

  const paths = models.map((model) => ({
    params: { model },
  }));

  return {
    paths,
    // 对于未预渲染的路径，将在请求时生成
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const model = params?.model as string;

  // 验证模型是否有效
  if (!isValidOption(model)) {
    return {
      notFound: true, // 返回404页面
    };
  }

  return {
    props: {
      model,
    },
    // 每天重新生成一次页面
    revalidate: 86400, // 24小时
  };
};

export default ModelPage;