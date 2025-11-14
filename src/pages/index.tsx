import {
  type GetServerSideProps,
  type InferGetServerSidePropsType,
  type NextPage,
} from "next";
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { TextArea } from "~/components/Input";
import { FAQ } from "~/components/FAQ";
import { Testimonials } from "~/components/Testimonials";
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
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XKHFN1NQ3R"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XKHFN1NQ3R');
            `
          }}
        />
        <title>Tiktokenizer - Free Online Tiktoken Counter & Tokenizer Tool | GPT-4, Claude, Llama</title>
        <meta name="description" content="Free online tiktoken tokenizer and token counter for GPT-4, Claude, Llama, DeepSeek, Qwen models. Visualize tokenization, count tokens, optimize prompts for ChatGPT and LLMs. Official tiktoken online tool." />
        <meta name="keywords" content="tiktokenizer, tiktoken, tiktoken online, tiktoken counter, token counter, tokenizer, gpt tokenizer, openai tokenizer, llm token counter, token count, chatgpt token counter, tiktoken tokenizer, tokenizer playground, count tokens, tokenize text, python tiktoken, openai tiktoken, gpt tokens, deepseek tokens, llm token calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Tiktokenizer - Free Online Tiktoken Counter & Tokenizer | GPT-4, Claude" />
        <meta property="og:description" content="Free tiktoken online tool: Count tokens, visualize tokenization for GPT-4, Claude, Llama, DeepSeek. Optimize your prompts and reduce API costs with our token counter." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tiktokenizer.app" />
        <meta property="og:image" content="https://tiktokenizer.app/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tiktokenizer - Free Tiktoken Counter & Online Tokenizer Tool" />
        <meta name="twitter:description" content="Count tokens online for GPT-4, Claude, Llama models. Free tiktoken tokenizer with visualization. Optimize prompts & reduce API costs." />
        <meta name="twitter:image" content="https://tiktokenizer.app/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://tiktokenizer.app" />

        {/* Schema.org Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tiktokenizer",
              "url": "https://tiktokenizer.app",
              "logo": "https://tiktokenizer.app/favicon.ico",
              "description": "A visualization tool for tokenization results of large language models",
              "sameAs": [
                "https://github.com/dqbd/tiktokenizer"
              ]
            })
          }}
        />

        {/* Schema.org Structured Data - WebApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Tiktokenizer",
              "url": "https://tiktokenizer.app",
              "description": "Tokenization Visualization Tool for LLMs like GPT-4o, GPT-3.5-turbo, Llama, Qwen, DeepSeek, and more",
              "applicationCategory": "DeveloperApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150"
              }
            })
          }}
        />

        {/* Schema.org Structured Data - SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Tiktokenizer",
              "applicationCategory": "DeveloperApplication",
              "description": "Visualization and analysis tool for LLM tokenization. Supports GPT-4o, GPT-3.5-turbo, Llama, Qwen, DeepSeek, Mistral, Phi, Yi, CodeLlama and more",
              "url": "https://tiktokenizer.app",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </Head>
      <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 p-8 bg-gradient-to-b from-white to-slate-50">
        <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center mb-6">
          <div>
            <h1 className="heading-1 text-4xl font-bold text-slate-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Tiktokenizer - Free Online Tiktoken Counter</h1>
            <p className="text-slate-600 mt-2 text-lg">Online tokenizer and token counter for GPT-4, Claude, Llama, DeepSeek, and 60+ LLM models</p>
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

        {/* Testimonials Section - Commented out until real user feedback is available */}
        {/* <div className="mt-16 py-12 border-t border-slate-200">
          <Testimonials items={[]} />
        </div> */}

        {/* FAQ Section */}
        <div className="mt-16">
          {/* SEO Internal Links Section */}
          <div className="mb-12 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Explore Our Token Counter Tools
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/token-counter"
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-blue-400"
              >
                <h3 className="font-semibold text-lg text-slate-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  Token Counter
                </h3>
                <p className="text-slate-600 text-sm">
                  Count tokens for GPT-4, Claude, Llama and 60+ LLM models. Free online token counter with real-time visualization.
                </p>
              </Link>

              <Link
                href="/tiktoken-online"
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-indigo-400"
              >
                <h3 className="font-semibold text-lg text-slate-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Tiktoken Online
                </h3>
                <p className="text-slate-600 text-sm">
                  Use OpenAI's tiktoken tokenizer online. No Python installation required - count tokens instantly in your browser.
                </p>
              </Link>

              <Link
                href="/openai-tokenizer"
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-purple-400"
              >
                <h3 className="font-semibold text-lg text-slate-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">🤖</span>
                  OpenAI Tokenizer
                </h3>
                <p className="text-slate-600 text-sm">
                  Official OpenAI tokenizer for GPT-4, ChatGPT. Calculate API costs and optimize prompts with accurate token counts.
                </p>
              </Link>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Popular Resources</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/blog/token-economy" className="text-blue-600 hover:underline text-sm font-medium">
                  Token Pricing Guide
                </Link>
                <span className="text-slate-300">•</span>
                <Link href="/blog/multilingual-tokenization" className="text-blue-600 hover:underline text-sm font-medium">
                  Multilingual Tokens
                </Link>
                <span className="text-slate-300">•</span>
                <Link href="/blog/efficient-prompt-design" className="text-blue-600 hover:underline text-sm font-medium">
                  Prompt Optimization
                </Link>
                <span className="text-slate-300">•</span>
                <Link href="/blog/rag-systems" className="text-blue-600 hover:underline text-sm font-medium">
                  RAG Token Management
                </Link>
              </div>
            </div>
          </div>

          <FAQ
            title="Common Questions"
            items={[
              {
                question: "Is Tiktokenizer free?",
                answer:
                  "Yes, Tiktokenizer is completely free and open source. We believe in making tokenization visualization accessible to everyone.",
              },
              {
                question: "Which models does Tiktokenizer support?",
                answer:
                  "We support OpenAI models (GPT-4, GPT-3.5, etc.), Meta's Llama family, Qwen models, Mistral, and many other open-source models from Hugging Face.",
              },
              {
                question: "Is my data stored or shared?",
                answer:
                  "No, your data is processed locally in your browser. We don't store, log, or share any text you input. Your privacy is important to us.",
              },
              {
                question: "How accurate are the token counts?",
                answer:
                  "Our token counts are based on the official tokenizers for each model. They should match exactly what the API would count, but we recommend testing with your specific use case.",
              },
              {
                question: "Can I use Tiktokenizer offline?",
                answer:
                  "Since Tiktokenizer is open source, you can clone the GitHub repository and run it locally. Check our docs for setup instructions.",
              },
              {
                question: "How do I add a new model?",
                answer:
                  "You can open an issue on our GitHub repository with a feature request. We regularly add new models based on user requests and community interest.",
              },
            ]}
          />
        </div>

        {/* Advertising Disclosure */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="bg-slate-50 rounded-lg p-6 text-center">
            <h3 className="text-sm font-semibold text-slate-700 mb-2">Advertising Disclosure</h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-3xl mx-auto">
              This website is a free tool for developers and is supported by advertising. We participate in Google AdSense to display relevant ads. When you click on ads or links on this site, we may receive compensation from third parties. This helps us keep the tool free and continuously improve it. Your use of this site and interaction with ads is governed by our{" "}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              . You can opt out of personalized advertising at{" "}
              <a href="https://adssettings.google.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Google Ads Settings
              </a>
              .
            </p>
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
