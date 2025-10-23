import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Cookie } from "lucide-react";

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    } else {
      setConsentGiven(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
    setConsentGiven(true);

    // Load analytics after consent
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowConsent(false);
  };

  if (!showConsent || consentGiven) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 sm:p-6 z-50 shadow-lg">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Message */}
          <div className="flex items-start gap-3 flex-1">
            <Cookie size={24} className="text-yellow-400 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-white mb-1">We use cookies</h3>
              <p className="text-sm text-slate-300">
                We use cookies to improve your experience, serve personalized content, and analyze traffic. By clicking &quot;Accept All,&quot; you consent to our use of cookies.{" "}
                <Link href="/privacy" className="text-blue-400 hover:underline">
                  Learn more
                </Link>
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={handleReject}
              className="flex-1 sm:flex-initial px-4 py-2 border border-slate-400 rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-initial px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm font-medium"
            >
              Accept All
            </button>
            <button
              onClick={handleReject}
              className="hidden sm:flex items-center justify-center p-2 hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Declare gtag on window for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
