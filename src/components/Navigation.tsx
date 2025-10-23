import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export const Navigation = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return router.pathname === path ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-blue-600";
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/tools", label: "Tools" },
    { href: "/blog", label: "Blog" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="https://cdn.1000ai.ai/kiro/2025-10-23/icon_Professional_TT_logo_20251023_111118.png"
              alt="Tiktokenizer Logo"
              width={32}
              height={32}
              priority
              className="rounded-lg"
            />
            <span className="font-bold text-lg text-slate-900 hidden sm:inline">Tiktokenizer</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors text-sm font-medium ${isActive(link.href)}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-slate-900" />
            ) : (
              <Menu size={24} className="text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-slate-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 rounded-md transition-colors text-sm font-medium ${isActive(link.href)} ${
                  router.pathname === link.href ? "bg-blue-50" : "hover:bg-slate-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
