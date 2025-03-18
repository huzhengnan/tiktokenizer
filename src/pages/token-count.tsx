import type { NextPage } from "next";
import Head from "next/head";
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

// Example texts
const EXAMPLE_TEXTS = [
  "Large Language Models (LLMs) are deep learning-based natural language processing models capable of understanding and generating human language.",
  "Tokenization is the process of breaking down text into smaller units called tokens.",
  "GPT-4 is a large language model developed by OpenAI with powerful natural language understanding and generation capabilities.",
  "Llama 3 is an open-source large language model developed by Meta that performs excellently on various tasks."
];

const TokenCountPage: NextPage = () => {
  const [inputText, setInputText] = useState<string>("");
  const [model, setModel] = useState<AllOptions>("gpt-4");
  
  const tokenizer = useQuery({
    queryKey: [model],
    queryFn: ({ queryKey: [model] }) => createTokenizer(model!),
  });

  const tokens = tokenizer.data?.tokenize(inputText);
  const isEmpty = !inputText || inputText.trim() === "";
  const tokenCount = tokens?.count || 0;

  // Function to handle example text selection
  const handleExampleClick = (text: string) => {
    setInputText(text);
  };

  return (
    <>
      <Head>
        <title>Token Count Calculator for LLMs - Tiktokenizer</title>
        <meta name="description" content="Calculate the exact token count for GPT, Llama, and other LLMs. Optimize your prompts and reduce API costs with our accurate token counter." />
        <meta name="keywords" content="token count, token calculator, GPT tokens, Llama tokens, LLM tokens, OpenAI token counter, prompt optimization" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Token Count Calculator for LLMs - Tiktokenizer" />
        <meta property="og:description" content="Calculate the exact token count for GPT, Llama, and other LLMs. Optimize your prompts and reduce API costs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tiktokenizer.app/token-count" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://tiktokenizer.app/token-count" />
      </Head>
      <main className="mx-auto flex min-h-screen max-w-[1200px] flex-col gap-4 p-8 bg-gradient-to-b from-white to-slate-50">
        <header className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold text-slate-800">Token Counter</h1>
            <p className="text-slate-600 mt-2">Calculate exact token count for large language models</p>
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
              placeholder="Enter text to count tokens..."
              aria-label="Input text for token counting"
            />
          </section>

          <section className="flex flex-col gap-4" aria-labelledby="token-section">
            <h2 id="token-section" className="sr-only">Token Count Results</h2>
            {isEmpty ? (
              <div className="flex flex-col items-center justify-center min-h-[256px] border border-slate-200 rounded-md p-6 bg-white shadow-sm">
                <h3 className="text-lg font-medium mb-4 text-slate-800">Example Texts</h3>
                <p className="text-slate-600 mb-4">Click on an example below to count tokens:</p>
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
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="p-6 border border-slate-200 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-slate-800">Token Count</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-mono text-blue-600">{tokenCount}</span>
                    <span className="text-slate-500">tokens</span>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-slate-600">
                    <p>
                      Model: <span className="font-medium">{model}</span>
                    </p>
                    <p>
                      Characters: <span className="font-medium">{inputText.length}</span>
                    </p>
                    <p>
                      Words: <span className="font-medium">{inputText.split(/\s+/).filter(Boolean).length}</span>
                    </p>
                  </div>
                </div>
                
                <TokenViewer model={model} data={tokens} isFetching={false} />
              </div>
            )}
          </section>
        </div>
        
        {/* Related information */}
        <div className="mt-10 border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">About Token Counting</h2>
          <div className="prose max-w-none">
            <p className="text-slate-700">
              Token counting is essential for working with large language models (LLMs) like GPT-4, GPT-3.5 Turbo, and Llama. 
              Each model has a specific token limit, and understanding how many tokens your text uses helps you:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
              <li>Stay within model context limits</li>
              <li>Optimize API costs (as many providers charge per token)</li>
              <li>Improve prompt engineering by understanding token efficiency</li>
              <li>Debug issues related to context length</li>
            </ul>
            
            <h3 className="text-xl font-medium mt-6 mb-3 text-slate-800">Token Limits by Model</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse rounded-md overflow-hidden">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 p-3 text-left text-slate-700">Model</th>
                    <th className="border border-slate-200 p-3 text-left text-slate-700">Max Tokens</th>
                    <th className="border border-slate-200 p-3 text-left text-slate-700">Tokenizer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-slate-50">
                    <td className="border border-slate-200 p-3">GPT-4</td>
                    <td className="border border-slate-200 p-3">8,192</td>
                    <td className="border border-slate-200 p-3">cl100k_base</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="border border-slate-200 p-3">GPT-4o</td>
                    <td className="border border-slate-200 p-3">128,000</td>
                    <td className="border border-slate-200 p-3">o200k_base</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="border border-slate-200 p-3">GPT-3.5 Turbo</td>
                    <td className="border border-slate-200 p-3">4,096</td>
                    <td className="border border-slate-200 p-3">cl100k_base</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="border border-slate-200 p-3">Llama 3</td>
                    <td className="border border-slate-200 p-3">8,192</td>
                    <td className="border border-slate-200 p-3">Llama tokenizer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer content */}
        <div className="flex justify-between items-center text-center mt-10 pt-6 border-t border-slate-200">
          <p className="text-sm text-slate-500">
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
            <Link
              href="/"
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://twitter.com/intent/tweet?text=Check%20out%20this%20token%20counter%20for%20LLMs&url=https%3A%2F%2Ftiktokenizer.app%2Ftoken-count"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-blue-500 transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://github.com/huzhengnan/tiktokenizer"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="View on GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Add structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Token Counter for LLMs - Tiktokenizer",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Calculate the exact token count for GPT, Llama, and other LLMs. Optimize your prompts and reduce API costs with our accurate token counter.",
              "creator": {
                "@type": "Organization",
                "name": "1000ai",
                "url": "https://1000ai.ai"
              },
              "url": "https://tiktokenizer.app/token-count",
              "inLanguage": "en",
              "potentialAction": {
                "@type": "UseAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://tiktokenizer.app/token-count",
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
                "@id": "https://tiktokenizer.app/token-count"
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

export default TokenCountPage;