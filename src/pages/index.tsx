import {
  type GetServerSideProps,
  type InferGetServerSidePropsType,
  type NextPage,
} from "next";
import Head from "next/head";
import { useMemo, useState } from "react";
import { Twitter, Github } from "lucide-react"; // 添加这一行导入图标组件

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { TextArea } from "~/components/Input";
import { type AllOptions, isChatModel, isValidOption } from "~/models";
import { createTokenizer } from "~/models/tokenizer";
import { EncoderSelect } from "~/sections/EncoderSelect";
import { TokenViewer } from "~/sections/TokenViewer";
import { ChatGPTEditor } from "../sections/ChatGPTEditor";

function useQueryParamsState() {
  const router = useRouter();

  const params = useMemo((): AllOptions => {
    return isValidOption(router.query?.model)
      ? router.query.model
      : "gpt-4o";
  }, [router.query]);

  const setParams = (model: AllOptions) => {
    router.push({
      pathname: router.pathname,
      query: { model },
    });
  };

  return [params, setParams] as const;
}

// Add example text constants
const EXAMPLE_TEXTS = [
  "Large Language Models (LLMs) are deep learning-based natural language processing models capable of understanding and generating human language.",
  "Tokenization is the process of breaking down text into smaller units called tokens.",
  "GPT-4 is a large language model developed by OpenAI with powerful natural language understanding and generation capabilities.",
  "Llama 3 is an open-source large language model developed by Meta that performs excellently on various tasks."
];

const Home: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = () => {
  const [inputText, setInputText] = useState<string>("");
  const [model, setModel] = useQueryParamsState();
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

  return (
    <>
      <Head>
        <title>Tiktokenizer - Tokenization Visualization Tool for LLMs</title>
        <meta name="description" content="Tiktokenizer is a visualization tool for tokenization results of large language models like GPT, Llama, Qwen, helping developers understand and optimize token usage." />
        <meta name="keywords" content="tokenizer, GPT, Llama, CodeLlama, Qwen, tokenization, large language models, LLM, tokens, AI, artificial intelligence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Tiktokenizer - Tokenization Visualization Tool for LLMs" />
        <meta property="og:description" content="Visualize tokenization results of large language models like GPT, Llama, Qwen, helping developers understand and optimize token usage." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tiktokenizer.app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://tiktokenizer.app" />
      </Head>
      <main className="mx-auto flex min-h-screen max-w-[1200px] flex-col gap-6 p-8 bg-gradient-to-b from-white to-slate-50">
        <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center mb-6">
          <div>
            <h1 className="heading-1 text-4xl font-bold text-slate-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Tiktokenizer</h1>
            <p className="text-slate-600 mt-2 text-lg">Tokenization visualization tool for GPT, Llama, Qwen and other large language models</p>
          </div>

          <EncoderSelect
            value={model}
            isLoading={tokenizer.isFetching}
            onChange={(update) => {
              setModel(update);
              if (isChatModel(update) !== isChatModel(model)) {
                setInputText("");
              }
            }}
          />
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="flex flex-col gap-4" aria-labelledby="input-section">
            <h2 id="input-section" className="sr-only">Input Text</h2>
            {isChatModel(model) && (
              <ChatGPTEditor model={model} onChange={setInputText} />
            )}

            <TextArea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[256px] rounded-md border border-slate-200 p-4 font-mono shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Enter text to analyze tokenization..."
              aria-label="Input text for tokenization"
            />
          </section>

          <section className="flex flex-col gap-4" aria-labelledby="token-section">
            <h2 id="token-section" className="sr-only">Tokenization Results</h2>
            {isEmpty ? (
              <div className="flex flex-col items-center justify-center min-h-[256px] border border-slate-200 rounded-md p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium mb-4 text-slate-800">Example Texts</h3>
                <p className="text-slate-600 mb-4">Click on an example below to see tokenization results:</p>
                <div className="flex flex-col gap-3 w-full">
                  {EXAMPLE_TEXTS.map((text, index) => (
                    <button
                      key={index}
                      onClick={() => handleExampleClick(text)}
                      className="text-left p-3 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors hover:border-slate-300"
                    >
                      {text.length > 60 ? text.substring(0, 60) + '...' : text}
                    </button>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-slate-500">
                    Need additional models? Contact us at:
                    <a 
                      href="mailto:huzhengnan@foxmail.com" 
                      className="text-blue-600 hover:underline ml-1"
                    >
                      huzhengnan@foxmail.com
                    </a>
                  </p>
                </div>
              </div>
            ) : (
              <TokenViewer model={model} data={tokens} isFetching={false} />
            )}
          </section>
        </div>
        
        {/* Only show ads when there is content */}
        {!isEmpty && (
          <div className="mt-8 ad-container">
            {/* Ad content goes here */}
          </div>
        )}
        
        {/* Add more valuable content */}
        <div className="mt-10 border-t border-slate-200 pt-8">
          <h2 className="heading-2 mb-6 text-center">About Tokenization</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card hover:border-blue-200">
              <h3 className="heading-3 mb-3">What is Tokenization?</h3>
              <p className="text-body">
                Tokenization is the process of breaking text into smaller units (called tokens). Large language models use these tokens to understand and generate text.
                Different models use different tokenization algorithms, which affects their performance and efficiency.
              </p>
            </div>
            <div className="card hover:border-blue-200">
              <h3 className="heading-3 mb-3">Why is Tokenization Important?</h3>
              <p className="text-body">
                Understanding how models break text into tokens is crucial for optimizing prompts, reducing token usage, and lowering API costs.
                By visualizing the tokenization process, developers can better understand how models work and create more effective applications.
              </p>
            </div>
          </div>
        </div>
        
        {/* Add supported models list */}
        <div className="mt-10">
          <h2 className="heading-2 mb-6 text-center">Supported Models</h2>
          <div className="card-grid">
            <div className="card hover:border-blue-200">
              <h3 className="heading-3 mb-3 flex items-center">
                <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                OpenAI Models
              </h3>
              <ul className="mt-3 space-y-2 text-small">
                <li className="flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                  GPT-4
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                  GPT-4o
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                  GPT-3.5-Turbo
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                  text-davinci-003
                </li>
              </ul>
            </div>
            <div className="card hover:border-blue-200">
              <h3 className="heading-3 mb-3 flex items-center">
                <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                Meta Models
              </h3>
              <ul className="mt-3 space-y-2 text-small">
                <li className="flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                  Llama 2
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                  Llama 3
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                  CodeLlama
                </li>
              </ul>
            </div>
            <div className="card hover:border-blue-200">
              <h3 className="heading-3 mb-3 flex items-center">
                <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                Other Models
              </h3>
              <ul className="mt-3 space-y-2 text-small">
                <li className="flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                  Qwen
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                  Mistral
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                  Claude
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-10 text-center">
          <div className="inline-block p-6 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="heading-3 mb-3 text-blue-700">Ready to optimize your token usage?</h3>
            <p className="text-blue-600 mb-4">Try different models and text inputs to see how tokenization varies.</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn btn-primary bg-blue-600 hover:bg-blue-700"
            >
              Start Tokenizing
            </button>
          </div>
        </div>

        {/* Footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center mt-10 pt-6 border-t border-slate-200">
          <p className="text-sm text-slate-500 mb-4 md:mb-0">
            Built by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 hover:text-blue-600 transition-colors"
              href="https://1000ai.ai"
            >
              1000ai
            </a>
            {" | "}
            <a
              href="mailto:huzhengnan@foxmail.com"
              className="text-slate-700 hover:text-blue-600 transition-colors"
              title="Contact us to add more models"
            >
              Contact Us
            </a>
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://twitter.com/intent/tweet?text=Check%20out%20Tiktokenizer%20-%20a%20visualization%20tool%20for%20LLM%20tokenization&url=https://tiktokenizer.app" 
              target="_blank"
              rel="noreferrer"
              aria-label="Share on Twitter"
              className="text-slate-500 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-slate-100"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://github.com/huzhengnan/tiktokenizer" 
              target="_blank"
              rel="noreferrer"
              aria-label="View on GitHub"
              className="text-slate-500 hover:text-slate-900 transition-colors p-2 rounded-full hover:bg-slate-100"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        {/* Add structure data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Tiktokenizer",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Tokenization visualization tool for GPT, Llama, Qwen and other large language models",
              "creator": {
                "@type": "Organization",
                "name": "1000ai",
                "url": "https://1000ai.ai"
              },
              "url": "https://tiktokenizer.app",
              "inLanguage": "en"
            })
          }}
        />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: { query: context.query } };
};

export default Home;
