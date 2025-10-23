import Head from "next/head";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Breadcrumb } from "~/components/Breadcrumb";

const blogPosts = [
  {
    id: "llm-api-cost-management",
    title: "Complete Guide to LLM API Cost Management",
    excerpt:
      "Comprehensive strategies for managing and reducing LLM API costs while maintaining quality.",
    date: "October 22, 2024",
    readTime: "15 min read",
    image: "https://cdn.1000ai.ai/kiro/2025-10-23/generated_A_developer_working_20251023_105643.png",
    category: "Cost Optimization",
  },
  {
    id: "prompt-engineering-tips",
    title: "Advanced Prompt Engineering Tips for Token Efficiency",
    excerpt:
      "Learn advanced techniques to reduce token usage and improve LLM output quality through better prompting.",
    date: "October 21, 2024",
    readTime: "12 min read",
    image: "https://cdn.1000ai.ai/kiro/2025-10-23/generated_A_professional_infog_20251023_105632.png",
    category: "Best Practices",
  },
  {
    id: "gpt-4-vs-gpt-35",
    title: "GPT-4 vs GPT-3.5: Tokenization and Cost Comparison",
    excerpt:
      "Detailed comparison of GPT-4 and GPT-3.5-turbo tokenization patterns, performance, and API costs.",
    date: "October 22, 2024",
    readTime: "10 min read",
    image: "https://cdn.1000ai.ai/kiro/2025-10-23/generated_Comparison_visualiza_20251023_105656.png",
    category: "Comparison",
  },
  {
    id: "understanding-tokenization",
    title: "Understanding Tokenization in Large Language Models",
    excerpt:
      "Learn the fundamentals of how LLMs break down text into tokens and why it matters for your applications.",
    date: "October 20, 2024",
    readTime: "8 min read",
    image: "https://cdn.1000ai.ai/kiro/2025-10-23/generated_A_professional_infog_20251023_105632.png",
    category: "Fundamentals",
  },
  {
    id: "optimize-token-usage",
    title: "How to Optimize Token Usage and Reduce API Costs",
    excerpt:
      "Practical strategies for reducing token consumption and saving money on LLM API calls.",
    date: "October 18, 2024",
    readTime: "10 min read",
    image: "https://cdn.1000ai.ai/kiro/2025-10-23/generated_A_developer_working_20251023_105643.png",
    category: "Tips & Tricks",
  },
  {
    id: "comparing-models",
    title: "Comparing Tokenization Across Different AI Models",
    excerpt:
      "An in-depth comparison of how GPT, Llama, and other models handle tokenization differently.",
    date: "October 15, 2024",
    readTime: "12 min read",
    image: "https://cdn.1000ai.ai/kiro/2025-10-23/generated_Comparison_visualiza_20251023_105656.png",
    category: "Comparison",
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Tiktokenizer</title>
        <meta name="description" content="Read articles about LLM tokenization, optimization tips, and best practices." />
        <link rel="canonical" href="https://tiktokenizer.app/blog" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-[1200px] px-8 py-12">
          {/* Breadcrumb */}
          <Breadcrumb items={[{ label: "Blog" }]} />

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Blog
            </h1>
            <p className="text-xl text-slate-600">
              Articles, tips, and insights about LLM tokenization and optimization.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid gap-8 md:grid-cols-1 mb-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  {/* Image */}
                  <div className="md:col-span-1">
                    <div className="relative h-48 md:h-full rounded-lg overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                          {post.category}
                        </span>
                        <span className="text-sm text-slate-500">{post.readTime}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-3">
                        {post.title}
                      </h2>
                      <p className="text-slate-600 mb-4">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar size={16} />
                        {post.date}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Read More
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6 opacity-90">
              Subscribe to get notified about new articles and tips for optimizing LLM usage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
