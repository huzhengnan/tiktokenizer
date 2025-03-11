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
      <main className="mx-auto flex min-h-screen max-w-[1200px] flex-col gap-4 p-8">
        <header className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-4xl font-bold">Tiktokenizer</h1>
            <p className="text-slate-600 mt-2">Tokenization visualization tool for GPT, Llama, Qwen and other large language models</p>
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

        <div className="grid gap-4 md:grid-cols-2">
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

          <section className="flex flex-col gap-4" aria-labelledby="token-section">
            <h2 id="token-section" className="sr-only">Tokenization Results</h2>
            <TokenViewer model={model} data={tokens} isFetching={false} />
          </section>
        </div>
        <style jsx>
          {`
            .diagram-link:hover > span {
              margin-left: 0;
            }

            .diagram-link > svg {
              opacity: 0;
              transform: scale(0.8);
            }
            .diagram-link:hover > svg {
              opacity: 1;
              transform: scale(1);
            }
          `}
        </style>
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
          </p>
          
          <div className="flex gap-3">
            <a 
              href="https://twitter.com/intent/tweet?text=Check%20out%20Tiktokenizer%20-%20a%20visualization%20tool%20for%20LLM%20tokenization&url=https://tiktokenizer.app" 
              target="_blank"
              rel="noreferrer"
              aria-label="Share on Twitter"
              className="text-slate-600 hover:text-slate-900"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://github.com/huzhengnan/tiktokenizer" 
              target="_blank"
              rel="noreferrer"
              aria-label="View on GitHub"
              className="text-slate-600 hover:text-slate-900"
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
