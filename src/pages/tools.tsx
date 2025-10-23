import Head from "next/head";
import Link from "next/link";
import { Zap, Calculator, BarChart3, BookOpen, Settings, Lightbulb } from "lucide-react";
import { Breadcrumb } from "~/components/Breadcrumb";

export default function Tools() {
  const tools = [
    {
      icon: Calculator,
      title: "Token Calculator",
      description: "Estimate tokens for any text across different LLM models",
      href: "/",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: BarChart3,
      title: "Cost Analyzer",
      description: "Calculate API costs based on token usage and model selection",
      href: "/",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: Zap,
      title: "Prompt Optimizer",
      description: "Get suggestions to optimize your prompts for efficiency",
      href: "/",
      color: "from-yellow-600 to-orange-600",
    },
    {
      icon: BookOpen,
      title: "Model Comparison",
      description: "Compare tokenization and performance across different models",
      href: "/",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: Settings,
      title: "API Configuration",
      description: "Configure your LLM API settings and parameters",
      href: "/",
      color: "from-red-600 to-rose-600",
    },
    {
      icon: Lightbulb,
      title: "Best Practices",
      description: "Learn industry best practices for LLM optimization",
      href: "/blog",
      color: "from-indigo-600 to-blue-600",
    },
  ];

  return (
    <>
      <Head>
        <title>Tools & Utilities - Tiktokenizer</title>
        <meta
          name="description"
          content="Comprehensive tools and utilities for LLM tokenization, cost analysis, and optimization."
        />
        <link rel="canonical" href="https://tiktokenizer.app/tools" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-[1200px] px-8 py-12">
          <Breadcrumb items={[{ label: "Tools" }]} />

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Tools & Utilities
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              Comprehensive tools to help you optimize tokenization, analyze costs, and improve your LLM applications.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={index}
                  href={tool.href}
                  className="group bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all overflow-hidden"
                >
                  <div className={`h-24 bg-gradient-to-br ${tool.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                  <div className="p-6">
                    <div className={`inline-block p-3 bg-gradient-to-br ${tool.color} rounded-lg mb-4`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      {tool.description}
                    </p>
                    <span className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                      Learn More →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Coming Soon Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">More Tools Coming Soon</h2>
            <p className="text-slate-700 mb-6">
              We're continuously developing new tools and features to help you optimize your LLM usage. Stay tuned for exciting updates!
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                Subscribe for Updates
              </button>
              <Link
                href="/blog"
                className="px-6 py-2 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-colors"
              >
                Read Blog
              </Link>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Use Our Tools?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="text-blue-600" size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900">Lightning Fast</h3>
                </div>
                <p className="text-slate-600">
                  Get instant results without waiting for API calls. All calculations are processed locally in your browser.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="text-green-600" size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900">Data-Driven</h3>
                </div>
                <p className="text-slate-600">
                  Make informed decisions based on accurate token counts and cost analysis across different models.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Lightbulb className="text-purple-600" size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900">Expert Insights</h3>
                </div>
                <p className="text-slate-600">
                  Leverage best practices and recommendations from LLM experts to optimize your applications.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Are these tools free?</h3>
                <p className="text-slate-600">Yes, all our tools are completely free to use. No signup required.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">How accurate are the token counts?</h3>
                <p className="text-slate-600">
                  Our tools use the official tokenizers from each model provider, ensuring accuracy that matches the actual API.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Do you store my data?</h3>
                <p className="text-slate-600">
                  No, all calculations are performed locally in your browser. We don't store or transmit your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
