import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Tiktokenizer</title>
        <meta name="description" content="Privacy Policy for Tiktokenizer" />
        <link rel="canonical" href="https://tiktokenizer.app/privacy" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-[1200px] px-8 py-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

          <div className="prose prose-slate max-w-none bg-white rounded-lg p-8 shadow-sm border border-slate-200">
            <p className="text-sm text-slate-600 mb-8">
              Last updated: October 2024
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-slate-700 mb-4">
              Tiktokenizer ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-slate-700 mb-4">
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li><strong>Personal Data:</strong> Email address, name, and other similar information if you choose to contact us</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, including your IP address, browser type, access times, and the pages you have viewed</li>
              <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number) that we may collect when you purchase, order, return, exchange, or request information about our services</li>
              <li><strong>Data From Contests, Giveaways, and Surveys:</strong> Personal and other information you may provide when entering contests or giveaways and/or responding to surveys</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Use of Your Information</h2>
            <p className="text-slate-700 mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li>Generate a personal profile about you so that future visits to the Site will be personalized</li>
              <li>Increase the efficiency and operation of the Site</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site</li>
              <li>Notify you of important changes to the Site</li>
              <li>Offer new products, services, and/or recommendations to you</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Disclosure of Your Information</h2>
            <p className="text-slate-700 mb-4">
              We may share information we have collected about you in certain situations:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information is necessary to comply with the law</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our Site and conducting our business</li>
              <li><strong>Marketing Communications:</strong> With your consent, we may share your information with third parties for marketing purposes</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Security of Your Information</h2>
            <p className="text-slate-700 mb-4">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Contact Us</h2>
            <p className="text-slate-700 mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="text-slate-700">
              Email: <a href="mailto:huzhengnan@foxmail.com" className="text-blue-600 hover:underline">huzhengnan@foxmail.com</a>
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-slate-700 mb-4">
              We reserve the right to modify this Privacy Policy at any time. Changes and clarifications will take effect immediately upon their posting to the Site. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
