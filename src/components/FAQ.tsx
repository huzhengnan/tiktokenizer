import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export const FAQ = ({ items, title = "Frequently Asked Questions" }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">{title}</h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-slate-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors text-left"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-slate-900 text-lg">
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className={`text-slate-600 transition-transform flex-shrink-0 ml-2 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-6 py-4 bg-white border-t border-slate-200">
                <p className="text-slate-700 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
