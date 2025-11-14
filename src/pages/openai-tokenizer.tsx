import Head from "next/head";
import Link from "next/link";

export default function OpenAITokenizer() {
  return (
    <>
      <Head>
        <title>OpenAI Tokenizer - Free GPT-4 & ChatGPT Token Counter | Tiktokenizer</title>
        <meta name="description" content="Free OpenAI tokenizer for GPT-4, ChatGPT, GPT-3.5. Official tiktoken-based tool to count tokens, visualize tokenization, and optimize your OpenAI API usage." />
        <meta name="keywords" content="openai tokenizer, openai token counter, gpt tokenizer, gpt-4 tokenizer, chatgpt tokenizer, openai tiktoken, gpt token counter, openai tokenization" />
        <link rel="canonical" href="https://tiktokenizer.app/openai-tokenizer" />
        <meta property="og:title" content="OpenAI Tokenizer - GPT-4 & ChatGPT Token Counter" />
        <meta property="og:description" content="Free OpenAI tokenizer tool using official tiktoken. Count tokens for GPT-4, ChatGPT instantly." />
        <meta property="og:url" content="https://tiktokenizer.app/openai-tokenizer" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-slate-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              OpenAI Tokenizer
            </h1>

            <p className="text-xl text-slate-700 mb-4">
              Official tokenizer for GPT-4, GPT-4o, ChatGPT, and all OpenAI models
            </p>

            <p className="text-lg text-slate-600">
              Free online tool using OpenAI's tiktoken library
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-10 border-2 border-blue-200 shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">OpenAI Token Pricing (2025)</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5 shadow-md">
                <h3 className="font-bold text-lg text-slate-800 mb-3">GPT-4o</h3>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex justify-between">
                    <span>Input:</span>
                    <strong className="text-blue-600">$2.50 / 1M tokens</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Output:</span>
                    <strong className="text-blue-600">$10.00 / 1M tokens</strong>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 shadow-md">
                <h3 className="font-bold text-lg text-slate-800 mb-3">GPT-4o mini</h3>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex justify-between">
                    <span>Input:</span>
                    <strong className="text-green-600">$0.15 / 1M tokens</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Output:</span>
                    <strong className="text-green-600">$0.60 / 1M tokens</strong>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 shadow-md">
                <h3 className="font-bold text-lg text-slate-800 mb-3">GPT-4 Turbo</h3>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex justify-between">
                    <span>Input:</span>
                    <strong className="text-purple-600">$10.00 / 1M tokens</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Output:</span>
                    <strong className="text-purple-600">$30.00 / 1M tokens</strong>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 shadow-md">
                <h3 className="font-bold text-lg text-slate-800 mb-3">GPT-3.5 Turbo</h3>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex justify-between">
                    <span>Input:</span>
                    <strong className="text-green-600">$0.50 / 1M tokens</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Output:</span>
                    <strong className="text-green-600">$1.50 / 1M tokens</strong>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-slate-600 mt-6">
              💡 <strong>Pro tip:</strong> Use our tokenizer to calculate exact costs before API calls
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-blue-500">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-lg text-slate-800 mb-2">Accurate Token Counts</h3>
              <p className="text-slate-700 text-sm">
                Uses OpenAI's official tiktoken library for 100% accurate token counting across all GPT models.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-indigo-500">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-lg text-slate-800 mb-2">Cost Calculator</h3>
              <p className="text-slate-700 text-sm">
                Calculate exact API costs for GPT-4, GPT-3.5, and other OpenAI models before making requests.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-purple-500">
              <div className="text-3xl mb-3">👁️</div>
              <h3 className="font-semibold text-lg text-slate-800 mb-2">Token Visualization</h3>
              <p className="text-slate-700 text-sm">
                See how OpenAI models break down your text into individual tokens with color-coded display.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">How OpenAI Tokenization Works</h2>

            <div className="space-y-4 text-slate-700">
              <p>
                OpenAI models like GPT-4 and ChatGPT use <strong>Byte Pair Encoding (BPE)</strong> tokenization. This means text is broken into subword units (tokens) rather than individual characters or whole words.
              </p>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-semibold text-slate-800 mb-3">Example Tokenization:</h3>
                <div className="space-y-3 font-mono text-sm">
                  <div>
                    <div className="text-slate-600 mb-1">Input text:</div>
                    <div className="bg-white p-3 rounded border border-slate-200">
                      "ChatGPT is amazing!"
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-600 mb-1">Tokens (6 total):</div>
                    <div className="bg-white p-3 rounded border border-slate-200 flex flex-wrap gap-2">
                      <span className="bg-blue-100 px-2 py-1 rounded">Chat</span>
                      <span className="bg-green-100 px-2 py-1 rounded">G</span>
                      <span className="bg-yellow-100 px-2 py-1 rounded">PT</span>
                      <span className="bg-purple-100 px-2 py-1 rounded"> is</span>
                      <span className="bg-pink-100 px-2 py-1 rounded"> amazing</span>
                      <span className="bg-indigo-100 px-2 py-1 rounded">!</span>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                <strong>Key facts about OpenAI tokens:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>1 token ≈ 4 characters in English</li>
                <li>1 token ≈ ¾ of a word on average</li>
                <li>100 tokens ≈ 75 words</li>
                <li>Context limits: GPT-4 (8K-128K), GPT-3.5 (4K-16K)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 mb-10 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Start Using the OpenAI Tokenizer</h2>
            <p className="mb-6 text-blue-50">
              Instantly count tokens, visualize tokenization, and optimize your prompts for all OpenAI models including GPT-4, ChatGPT, and GPT-3.5.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
            >
              Open Tokenizer Tool →
            </Link>
          </div>

          <div className="bg-slate-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Supported OpenAI Models</h2>
            <div className="grid md:grid-cols-2 gap-4 text-slate-700">
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">GPT-4 Family:</h3>
                <ul className="space-y-1 text-sm ml-4">
                  <li>• GPT-4o (latest)</li>
                  <li>• GPT-4o mini</li>
                  <li>• GPT-4 Turbo</li>
                  <li>• GPT-4-32k</li>
                  <li>• GPT-4 (8K context)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">GPT-3.5 Family:</h3>
                <ul className="space-y-1 text-sm ml-4">
                  <li>• GPT-3.5-turbo</li>
                  <li>• GPT-3.5-turbo-16k</li>
                  <li>• text-davinci-003</li>
                  <li>• text-davinci-002</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-slate-600">
            <p className="mb-4 text-base">
              <strong>Start tokenizing with OpenAI models:</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-lg border-2 border-blue-600"
              >
                Open OpenAI Tokenizer Tool →
              </Link>
              <Link
                href="/blog/gpt-4-vs-gpt-35"
                className="text-blue-600 hover:underline font-medium"
              >
                Compare GPT-4 vs GPT-3.5
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
