import Head from "next/head";
import Link from "next/link";

export default function TokenCounter() {
  return (
    <>
      <Head>
        <title>Token Counter - Free Online Token Counter for GPT-4, Claude, Llama | Tiktokenizer</title>
        <meta name="description" content="Free online token counter for ChatGPT, GPT-4, Claude, Llama, and all major LLMs. Count tokens instantly, visualize tokenization, optimize prompts and reduce API costs." />
        <meta name="keywords" content="token counter, token counter online, chatgpt token counter, gpt token counter, llm token counter, openai token counter, token count, count tokens, tiktoken counter" />
        <link rel="canonical" href="https://tiktokenizer.app/token-counter" />
        <meta property="og:title" content="Token Counter - Free Online Tool for All LLMs" />
        <meta property="og:description" content="Count tokens for GPT-4, Claude, Llama instantly. Free online token counter with visualization." />
        <meta property="og:url" content="https://tiktokenizer.app/token-counter" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center justify-center p-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Token Counter for LLMs
          </h1>

          <p className="text-xl text-slate-700 mb-8">
            Free online token counter for GPT-4, Claude, Llama, DeepSeek, and 60+ language models
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Why Use a Token Counter?</h2>

            <div className="text-left space-y-4 text-slate-700">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">✓</span>
                <div>
                  <strong className="text-slate-800">Reduce API Costs:</strong> Count tokens before sending requests to avoid unexpected charges
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">✓</span>
                <div>
                  <strong className="text-slate-800">Optimize Prompts:</strong> Stay within context windows (4K, 8K, 32K, 128K tokens)
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">✓</span>
                <div>
                  <strong className="text-slate-800">Compare Models:</strong> See how different models tokenize the same text
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">✓</span>
                <div>
                  <strong className="text-slate-800">Visualize Tokenization:</strong> Understand how text is broken into tokens
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Supported Models</h3>
            <p className="text-slate-700 mb-4">
              Our token counter supports 60+ LLM models including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-slate-700">
              <div>• GPT-4, GPT-4o, GPT-4 Turbo</div>
              <div>• Claude 3.5 Sonnet, Opus</div>
              <div>• Llama 3, 3.1, 3.2, 4</div>
              <div>• DeepSeek R1, V3</div>
              <div>• Qwen 2.5, QwQ</div>
              <div>• Gemini, Mistral, Phi</div>
            </div>
          </div>

          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            Open Token Counter Tool →
          </Link>

          <div className="mt-12 text-left bg-slate-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">How to Use the Token Counter</h2>
            <ol className="list-decimal list-inside space-y-3 text-slate-700">
              <li><strong>Select your model:</strong> Choose from GPT-4, Claude, Llama, or 60+ other models</li>
              <li><strong>Enter your text:</strong> Paste your prompt, document, or any text you want to analyze</li>
              <li><strong>See results instantly:</strong> View token count, visualization, and character count</li>
              <li><strong>Optimize:</strong> Adjust your text to fit within token limits and reduce costs</li>
            </ol>
          </div>

          <div className="mt-8 text-sm text-slate-600">
            <p className="mb-4">
              This page provides comprehensive information about token counting for LLMs.{" "}
              <strong>Choose an option below:</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Use Interactive Token Counter →
              </Link>
              <Link
                href="/blog/token-economy"
                className="text-blue-600 hover:underline font-medium"
              >
                Read Token Pricing Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
