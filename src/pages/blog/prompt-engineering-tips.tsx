import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Breadcrumb } from "~/components/Breadcrumb";

export default function PromptEngineeringTips() {
  return (
    <>
      <Head>
        <title>Advanced Prompt Engineering Tips for Token Efficiency - Tiktokenizer</title>
        <meta
          name="description"
          content="Learn advanced prompt engineering techniques to reduce token usage and improve LLM output quality."
        />
        <link rel="canonical" href="https://tiktokenizer.app/blog/prompt-engineering-tips" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-[900px] px-8 py-12">
          <Breadcrumb items={[
            { label: "Blog", href: "/blog" },
            { label: "Prompt Engineering Tips" }
          ]} />

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          <article>
            <header className="mb-8">
              <h1 className="text-5xl font-bold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Advanced Prompt Engineering Tips for Token Efficiency
              </h1>

              <div className="flex flex-wrap gap-6 text-slate-600 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  October 21, 2024
                </div>
                <div className="flex items-center gap-2">
                  <User size={18} />
                  Tiktokenizer Team
                </div>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-semibold">
                  Best Practices
                </span>
              </div>
            </header>

            <div className="prose prose-slate max-w-none">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                Prompt engineering is both an art and a science. The way you structure your prompts can dramatically impact both the quality of outputs and the number of tokens consumed. In this guide, we'll explore advanced techniques to master both aspects.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">1. Use Token-Efficient Formats</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Structured formats consume fewer tokens while providing clarity. JSON, YAML, and markdown are token-efficient choices.
              </p>

              <div className="bg-slate-100 p-4 rounded-lg my-6 font-mono text-sm">
                <p className="text-slate-700 mb-3"><strong>❌ Inefficient:</strong></p>
                <p className="text-slate-600 mb-4">
                  "Please analyze this customer review: The product is great but the shipping was slow. I would buy again but I'm concerned about delivery times."
                </p>
                <p className="text-slate-700 mb-3"><strong>✅ Efficient:</strong></p>
                <p className="text-slate-600">
                  Review: "Product great, slow shipping. Would repurchase but concerned about delivery."
                  <br />
                  Format: Analyze sentiment and concerns.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">2. Leverage Few-Shot Examples Wisely</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Examples are powerful but expensive. Use 1-2 high-quality examples instead of many mediocre ones.
              </p>

              <div className="bg-slate-100 p-4 rounded-lg my-6 font-mono text-sm">
                <p className="text-slate-700 mb-2"><strong>Good Few-Shot Example:</strong></p>
                <pre className="text-slate-600 whitespace-pre-wrap">
{`Input: "The movie was fantastic!"
Output: {"sentiment": "positive", "confidence": 0.95}

Input: "I hated it."
Output: {"sentiment": "negative", "confidence": 0.90}`}
                </pre>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">3. Chain-of-Thought Optimization</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Chain-of-thought prompting improves reasoning but adds tokens. Use it only when needed.
              </p>

              <ul className="list-disc list-inside text-slate-700 space-y-3 mb-6">
                <li><strong>Simple tasks:</strong> Skip chain-of-thought to save tokens</li>
                <li><strong>Complex reasoning:</strong> Use abbreviated chain-of-thought</li>
                <li><strong>Critical decisions:</strong> Full chain-of-thought justified</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">4. Dynamic Prompt Construction</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Build prompts dynamically based on input complexity. Simple inputs get simpler prompts.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded">
                <p className="text-slate-700 mb-3"><strong>Strategy:</strong></p>
                <ol className="list-decimal list-inside text-slate-700 space-y-2">
                  <li>Detect input complexity</li>
                  <li>Adjust system prompt length accordingly</li>
                  <li>Reduce examples for simple queries</li>
                  <li>Add context only when needed</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">5. Compression Techniques</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Modern language models can understand compressed prompts:
              </p>

              <div className="bg-slate-100 p-4 rounded-lg my-6 font-mono text-sm">
                <p className="text-slate-700 mb-2"><strong>Before (longer):</strong></p>
                <p className="text-slate-600 mb-4">
                  "You are an expert data analyst. Please analyze the following dataset and provide insights about trends, patterns, and anomalies."
                </p>
                <p className="text-slate-700 mb-2"><strong>After (compressed):</strong></p>
                <p className="text-slate-600">
                  "Analyze dataset: trends, patterns, anomalies"
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">6. Context Window Management</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                With context windows getting larger, prioritize what goes in:
              </p>

              <ul className="list-disc list-inside text-slate-700 space-y-3 mb-6">
                <li><strong>Essential:</strong> Core task definition</li>
                <li><strong>Important:</strong> Critical examples and context</li>
                <li><strong>Nice to have:</strong> Background information</li>
                <li><strong>Low priority:</strong> Explanations and disclaimers</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">7. Token-Aware System Messages</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                System messages are crucial but count toward token limits. Make them concise:
              </p>

              <div className="bg-slate-100 p-4 rounded-lg my-6 font-mono text-sm">
                <p className="text-slate-700 mb-2"><strong>❌ Long (150 tokens):</strong></p>
                <p className="text-slate-600 mb-4">
                  "You are a helpful assistant that specializes in providing detailed and thorough responses. You should always consider multiple perspectives..."
                </p>
                <p className="text-slate-700 mb-2"><strong>✅ Short (20 tokens):</strong></p>
                <p className="text-slate-600">
                  "Assistant: Concise, accurate responses."
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Real-World Implementation</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Here's a practical prompt that's both efficient and effective:
              </p>

              <div className="bg-slate-50 p-6 rounded-lg my-6 font-mono text-sm">
                <pre className="text-slate-600 whitespace-pre-wrap">{`System: You classify sentiment. Be brief.

User: Review: "Love the product! Shipping was slow."
Output format: {sentiment: string, score: 0-1}

Task: Classify the review.`}</pre>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Conclusion</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Effective prompt engineering combines clarity, conciseness, and strategic use of examples. By implementing these techniques, you can significantly reduce token consumption while maintaining (or even improving) output quality.
              </p>

              <p className="text-slate-700 leading-relaxed">
                The key is experimentation. Test your prompts, measure token usage, and iterate continuously.
              </p>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-3">Test Your Prompts</h3>
              <p className="mb-4 opacity-90">
                Use Tiktokenizer to measure token efficiency of your prompts across different models.
              </p>
              <Link
                href="/"
                className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Try Now
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
