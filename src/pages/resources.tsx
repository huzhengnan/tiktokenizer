import Head from "next/head";
import Link from "next/link";
import { BookOpen, ExternalLink, Github, FileText, Video, Code } from "lucide-react";
import { Breadcrumb } from "~/components/Breadcrumb";

export default function Resources() {
  const resourceCategories = [
    {
      title: "Official Documentation",
      icon: FileText,
      resources: [
        {
          name: "OpenAI Tokenizer Guide",
          description: "Official documentation for OpenAI's tiktoken library",
          url: "https://platform.openai.com/docs/guides/tokens",
          icon: FileText,
        },
        {
          name: "Hugging Face Transformers",
          description: "Complete tokenizer documentation for open-source models",
          url: "https://huggingface.co/docs/transformers/",
          icon: FileText,
        },
        {
          name: "Claude API Docs",
          description: "Anthropic's documentation for Claude models",
          url: "https://docs.anthropic.com/",
          icon: FileText,
        },
      ],
    },
    {
      title: "Learning Resources",
      icon: BookOpen,
      resources: [
        {
          name: "Prompt Engineering Guide",
          description: "Comprehensive guide to effective prompt engineering",
          url: "https://platform.openai.com/docs/guides/prompt-engineering",
          icon: BookOpen,
        },
        {
          name: "LLM Best Practices",
          description: "Industry best practices for working with LLMs",
          url: "https://github.com/openai/openai-python/tree/main/examples",
          icon: BookOpen,
        },
        {
          name: "Token Counting Tutorial",
          description: "Deep dive into how tokenization works",
          url: "https://github.com/openai/openai-cookbook",
          icon: Code,
        },
      ],
    },
    {
      title: "Code Examples",
      icon: Code,
      resources: [
        {
          name: "OpenAI Python Library",
          description: "Official Python client for OpenAI API",
          url: "https://github.com/openai/openai-python",
          icon: Github,
        },
        {
          name: "Langchain Documentation",
          description: "Framework for building LLM applications",
          url: "https://python.langchain.com/",
          icon: Code,
        },
        {
          name: "Tiktokenizer on GitHub",
          description: "Source code for this tokenization tool",
          url: "https://github.com/huzhengnan/tiktokenizer",
          icon: Github,
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Resources - Tiktokenizer</title>
        <meta
          name="description"
          content="Comprehensive collection of resources for learning about LLM tokenization and optimization."
        />
        <link rel="canonical" href="https://tiktokenizer.app/resources" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-[1200px] px-8 py-12">
          <Breadcrumb items={[{ label: "Resources" }]} />

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Learning Resources
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              Curated collection of documentation, guides, and tools to help you master LLM tokenization and optimization.
            </p>
          </div>

          {/* Resources by Category */}
          <div className="space-y-12 mb-16">
            {resourceCategories.map((category, idx) => {
              const CategoryIcon = category.icon;
              return (
                <div key={idx}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CategoryIcon className="text-blue-600" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {category.resources.map((resource, resourceIdx) => {
                      const ResourceIcon = resource.icon;
                      return (
                        <a
                          key={resourceIdx}
                          href={resource.url}
                          target="_blank"
                          rel="noreferrer"
                          className="group bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                              <ResourceIcon className="text-slate-600 group-hover:text-blue-600 transition-colors" size={20} />
                            </div>
                            <ExternalLink className="text-slate-400 group-hover:text-blue-600 transition-colors" size={18} />
                          </div>
                          <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {resource.name}
                          </h3>
                          <p className="text-sm text-slate-600">{resource.description}</p>
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Featured Content */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 mb-16 text-white">
            <h2 className="text-2xl font-bold mb-4">Start With Our Blog</h2>
            <p className="mb-6 opacity-90">
              New to tokenization? Start with our beginner-friendly articles that explain concepts step by step.
            </p>
            <Link
              href="/blog/understanding-tokenization"
              className="inline-block px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Read Our Guide
            </Link>
          </div>

          {/* Tips */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Tips for Learning</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-bold text-slate-900 mb-3">1. Start with Fundamentals</h3>
                <p className="text-slate-600">
                  Begin by understanding what tokenization is and why it matters. Read our "Understanding Tokenization" guide.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-3">2. Experiment Hands-On</h3>
                <p className="text-slate-600">
                  Use Tiktokenizer to test different models and see how they tokenize your text. Hands-on learning is most effective.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-3">3. Study Real Examples</h3>
                <p className="text-slate-600">
                  Review code examples and real-world use cases. Check out the official OpenAI cookbook for practical implementations.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-3">4. Stay Updated</h3>
                <p className="text-slate-600">
                  Follow official blogs and documentation. New models and techniques are released regularly, so keep learning!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
