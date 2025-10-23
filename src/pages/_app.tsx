import { type AppType } from "next/app";

import { api } from "~/utils/api";
import { Analytics } from "@vercel/analytics/react";
import { Navigation } from "~/components/Navigation";
import { Footer } from "~/components/Footer";
import { CookieConsent } from "~/components/CookieConsent";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
      <CookieConsent />
      <Analytics />
    </div>
  );
};

export default api.withTRPC(MyApp);
