import Head from "next/head";
import Link from "next/link";
import { FileQuestion, ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Tiktokenizer</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center">
        <div className="mx-auto max-w-[1200px] px-8 py-12 w-full">
          <div className="text-center">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-200 blur-xl opacity-50 rounded-full"></div>
                <div className="relative bg-blue-100 rounded-full p-6">
                  <FileQuestion size={64} className="text-blue-600" />
                </div>
              </div>
            </div>

            {/* Error Code */}
            <h1 className="text-9xl font-bold text-slate-200 mb-4">404</h1>

            {/* Error Message */}
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Oops! Page Not Found
            </h2>

            <p className="text-xl text-slate-600 max-w-md mx-auto mb-8">
              Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
              Let us help you find what you&apos;re looking for.
            </p>

            {/* Quick Links */}
            <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Home size={20} />
                Go Home
              </Link>
              <Link
                href="/blog"
                className="flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <span>Read Blog</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <span>Contact Us</span>
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Helpful Suggestions */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 max-w-2xl mx-auto mb-12">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Here are some helpful links:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Popular Pages</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-blue-600 hover:text-blue-700">
                        Tokenizer Tool
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-blue-600 hover:text-blue-700">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="text-blue-600 hover:text-blue-700">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Resources</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/contact" className="text-blue-600 hover:text-blue-700">
                        Get Help
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy" className="text-blue-600 hover:text-blue-700">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <a
                        href="https://github.com/huzhengnan/tiktokenizer"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Search Suggestion */}
            <p className="text-slate-600 mb-4">
              Did you mean to search for something?
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    window.location.href = `/?search=${(e.target as HTMLInputElement).value}`;
                  }
                }}
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
