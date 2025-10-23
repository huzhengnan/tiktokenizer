import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  rating: number;
}

interface TestimonialsProps {
  items: Testimonial[];
  title?: string;
}

export const Testimonials = ({ items, title = "What Users Say" }: TestimonialsProps) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{title}</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow"
          >
            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Content */}
            <p className="text-slate-700 mb-6 leading-relaxed italic">
              &quot;{testimonial.content}&quot;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
              {testimonial.avatar && (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600"
                />
              )}
              <div>
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-600">
                  {testimonial.role}
                  {testimonial.company && ` at ${testimonial.company}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
