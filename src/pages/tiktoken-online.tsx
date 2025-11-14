import Head from "next/head";
import Link from "next/link";

export default function TiktokenOnline() {
  return (
    <>
      <Head>
        <title>Tiktoken Online - Free OpenAI Tiktoken Tokenizer Tool | Tiktokenizer</title>
        <meta name="description" content="Free tiktoken online tool - Official OpenAI tiktoken tokenizer for GPT-4, GPT-3.5, Claude. Count tokens, visualize tokenization, optimize prompts online instantly." />
        <meta name="keywords" content="tiktoken online, tiktoken, openai tiktoken, tiktoken tokenizer, python tiktoken, tiktoken api, tiktoken counter, tiktoken count tokens, online tiktoken, tiktoken playground" />
        <link rel="canonical" href="https://tiktokenizer.app/tiktoken-online" />
        <meta property="og:title" content="Tiktoken Online - Free OpenAI Tokenizer Tool" />
        <meta property="og:description" content="Use OpenAI's tiktoken online for free. Count tokens, visualize tokenization for GPT-4, GPT-3.5, Claude instantly." />
        <meta property="og:url" content="https://tiktokenizer.app/tiktoken-online" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center justify-center p-8">
        <div className="max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-slate-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Tiktoken Online Tool
            </h1>

            <p className="text-xl text-slate-700 mb-4">
              Free online version of OpenAI's tiktoken tokenizer
            </p>

            <p className="text-lg text-slate-600">
              No installation required - Use tiktoken directly in your browser
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:border-blue-300 transition-colors">
              <h2 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                No Setup Required
              </h2>
              <p className="text-slate-700">
                Skip Python installation and package management. Use tiktoken online instantly without any configuration.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:border-blue-300 transition-colors">
              <h2 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Real-time Results
              </h2>
              <p className="text-slate-700">
                See token counts and visualization instantly as you type. Perfect for testing and optimization.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:border-blue-300 transition-colors">
              <h2 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                All Tiktoken Encodings
              </h2>
              <p className="text-slate-700">
                Supports cl100k_base (GPT-4), p50k_base, r50k_base, and all OpenAI encoding formats.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:border-blue-300 transition-colors">
              <h2 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Visual Tokenization
              </h2>
              <p className="text-slate-700">
                See exactly how tiktoken breaks down your text into tokens with color-coded visualization.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8 border-2 border-blue-200">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">What is Tiktoken?</h2>
            <p className="text-slate-700 mb-4">
              <strong>Tiktoken</strong> is OpenAI's official tokenizer library used by GPT-4, GPT-3.5-turbo, and other OpenAI models. It efficiently encodes text into tokens that the models can understand.
            </p>
            <p className="text-slate-700 mb-4">
              Our online tiktoken tool provides the same functionality as the Python library, but directly in your browser:
            </p>
            <div className="bg-white rounded p-4 font-mono text-sm text-slate-800 mb-4">
              <div className="text-slate-500"># Python tiktoken equivalent:</div>
              <div>import tiktoken</div>
              <div>enc = tiktoken.get_encoding("cl100k_base")</div>
              <div>tokens = enc.encode("Your text here")</div>
              <div className="text-slate-500"># Now available online! →</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Tiktoken Encoding Formats</h2>
            <div className="space-y-4 text-slate-700">
              <div className="border-l-4 border-blue-500 pl-4">
                <strong className="text-slate-800">cl100k_base:</strong> Used by GPT-4, GPT-3.5-turbo, text-embedding-ada-002
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <strong className="text-slate-800">p50k_base:</strong> Used by Code-Cushman, text-davinci-002, text-davinci-003
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <strong className="text-slate-800">r50k_base (GPT-2):</strong> Used by GPT-2 models
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-lg text-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              Launch Tiktoken Online Tool →
            </Link>
          </div>

          <div className="bg-slate-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Why Use Tiktoken Online?</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Calculate API costs</strong> before making requests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Optimize prompts</strong> to fit within context limits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Debug tokenization issues</strong> in your applications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Compare different encodings</strong> side by side</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>No Python installation</strong> or dependencies needed</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center text-sm text-slate-600">
            <p className="mb-4 text-base">
              <strong>Ready to use tiktoken online?</strong> Choose your preferred option:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-lg text-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
              >
                Launch Tiktoken Online Tool →
              </Link>
              <Link
                href="/blog/understanding-tokenization"
                className="text-blue-600 hover:underline font-medium"
              >
                Learn About Tokenization
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
