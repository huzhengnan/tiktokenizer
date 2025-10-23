import { Twitter, Github, Mail } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-[1200px] px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Tiktokenizer</h3>
            <p className="text-sm text-slate-600 mb-4">
              A free visualization tool for understanding how large language models tokenize text.
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com/intent/tweet?text=Check%20out%20Tiktokenizer%20-%20a%20visualization%20tool%20for%20LLM%20tokenization&url=https://tiktokenizer.app"
                target="_blank"
                rel="noreferrer"
                aria-label="Share on Twitter"
                className="text-slate-500 hover:text-blue-500 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://github.com/huzhengnan/tiktokenizer"
                target="_blank"
                rel="noreferrer"
                aria-label="View on GitHub"
                className="text-slate-500 hover:text-slate-900 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:huzhengnan@foxmail.com"
                aria-label="Contact us"
                className="text-slate-500 hover:text-red-500 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://platform.openai.com/docs/guides/tokens"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  OpenAI Docs
                </a>
              </li>
              <li>
                <a
                  href="https://huggingface.co/docs/transformers/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  HuggingFace Docs
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/huzhengnan/tiktokenizer"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600">
            © {currentYear} Tiktokenizer. Built by{" "}
            <a
              href="https://1000ai.ai"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              1000ai
            </a>
            . All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Made with care for developers and AI enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};
