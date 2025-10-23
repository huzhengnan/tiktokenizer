import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Zap, BookOpen, Users } from "lucide-react";

export default function About() {
  return (
    <>
      <Head>
        <title>About Tiktokenizer - Understanding LLM Tokenization</title>
        <meta name="description" content="Learn about Tiktokenizer, a free visualization tool for understanding how large language models tokenize text." />
        <link rel="canonical" href="https://tiktokenizer.app/about" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-[1200px] px-8 py-12">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              About Tiktokenizer
            </h1>
            <p className="text-xl text-slate-700 max-w-2xl">
              Tiktokenizer is a free, open-source visualization tool designed to help developers understand how large language models break down text into tokens.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-slate-700 mb-4">
                We believe that transparency and understanding are crucial for building effective AI applications. By visualizing the tokenization process, developers can:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Optimize prompt engineering strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Reduce API costs by understanding token usage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Compare tokenization across different models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Improve application performance and efficiency</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-indigo-600" size={24} />
                <h2 className="text-2xl font-bold text-slate-900">Key Features</h2>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <p className="font-semibold">Multi-Model Support</p>
                    <p className="text-sm text-slate-600">Support for OpenAI models, Meta&apos;s Llama, Qwen, and many other LLMs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <p className="font-semibold">Real-time Visualization</p>
                    <p className="text-sm text-slate-600">Instant feedback on how text is tokenized</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <p className="font-semibold">100% Free & Open Source</p>
                    <p className="text-sm text-slate-600">No signup required, available on GitHub</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* How it Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-3">1</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Select a Model</h3>
                <p className="text-slate-700">
                  Choose from a wide variety of LLMs including GPT, Llama, Qwen, and others.
                </p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                <div className="text-3xl font-bold text-indigo-600 mb-3">2</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Enter Your Text</h3>
                <p className="text-slate-700">
                  Paste or type any text you want to analyze for tokenization patterns.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-3">3</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">See Results</h3>
                <p className="text-slate-700">
                  Get instant visualization of how the model tokenizes your input text.
                </p>
              </div>
            </div>
          </div>

          {/* Technology Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Users size={28} className="text-blue-600" />
              Built With Modern Technology
            </h2>
            <p className="text-slate-700 mb-4">
              Tiktokenizer leverages cutting-edge open-source libraries and technologies:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-slate-700">
                <span className="text-blue-600">→</span>
                <span><strong>Next.js</strong> - Modern React framework</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <span className="text-blue-600">→</span>
                <span><strong>Tiktoken</strong> - OpenAI&apos;s tokenizer library</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <span className="text-blue-600">→</span>
                <span><strong>Transformers.js</strong> - Hugging Face transformers</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <span className="text-blue-600">→</span>
                <span><strong>TypeScript</strong> - Type-safe development</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-lg mb-6 opacity-90">
              Start visualizing tokenization and optimize your LLM usage today.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Go to Tokenizer
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
