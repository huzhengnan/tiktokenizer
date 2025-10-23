import Head from "next/head";
import { Mail, MessageSquare, Github } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This is a placeholder - in production, you'd send this to your backend or email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Head>
        <title>Contact Us - Tiktokenizer</title>
        <meta name="description" content="Get in touch with Tiktokenizer. Send us your feedback, suggestions, or questions." />
        <link rel="canonical" href="https://tiktokenizer.app/contact" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-[1200px] px-8 py-12">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
            <p className="text-xl text-slate-600">
              Have questions, suggestions, or want to collaborate? We'd love to hear from you.
            </p>
          </div>

          {/* Contact Methods & Form */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <div className="flex items-start gap-4">
                  <Mail className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600 mb-2">Send us an email directly:</p>
                    <a
                      href="mailto:huzhengnan@foxmail.com"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      huzhengnan@foxmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <div className="flex items-start gap-4">
                  <Github className="text-slate-700 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">GitHub</h3>
                    <p className="text-slate-600 mb-2">Found a bug or have a feature request?</p>
                    <a
                      href="https://github.com/huzhengnan/tiktokenizer"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Open an Issue
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <div className="flex items-start gap-4">
                  <MessageSquare className="text-indigo-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Feedback</h3>
                    <p className="text-slate-600 mb-2">Help us improve by sharing your feedback:</p>
                    <p className="text-sm text-slate-500">
                      Use the form on the right or reach out directly via email.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>

              {submitted && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 font-medium">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-900 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>

              <p className="text-xs text-slate-500 mt-4">
                We typically respond to inquiries within 24-48 hours.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">How can I add a new model?</h3>
                <p className="text-slate-700">
                  You can open an issue on our GitHub repository with a feature request for new model support. We're always looking to expand our model library!
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Is Tiktokenizer free?</h3>
                <p className="text-slate-700">
                  Yes, Tiktokenizer is completely free and open-source. We believe in making tokenization visualization accessible to everyone.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Can I use Tiktokenizer offline?</h3>
                <p className="text-slate-700">
                  Since we're open-source, you can clone our GitHub repository and run it locally. Check out the README for setup instructions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Do you collect my data?</h3>
                <p className="text-slate-700">
                  We use Google Analytics for general usage statistics, but we don't store or analyze the text you input. See our Privacy Policy for more details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
