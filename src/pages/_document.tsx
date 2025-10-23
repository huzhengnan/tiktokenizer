import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Tiktokenizer" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="https://cdn.1000ai.ai/kiro/2025-10-23/icon_TT_logo_favicon_Blu_20251023_111131.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="https://cdn.1000ai.ai/kiro/2025-10-23/icon_TT_logo_favicon_Blu_20251023_111131.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.1000ai.ai/kiro/2025-10-23/icon_TT_logo_favicon_Blu_20251023_111138.png" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="preconnect" href="https://cdn.1000ai.ai" />

        {/* Google AdSense 脚本 */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4602201282246605"
          crossOrigin="anonymous"
        />

        {/* Microsoft Clarity 追踪脚本 */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "tugpwdwq8g");
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}