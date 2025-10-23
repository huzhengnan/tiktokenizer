import Head from "next/head";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - Tiktokenizer</title>
        <meta name="description" content="Terms of Service for Tiktokenizer" />
        <link rel="canonical" href="https://tiktokenizer.app/terms" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-[1200px] px-8 py-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>

          <div className="prose prose-slate max-w-none bg-white rounded-lg p-8 shadow-sm border border-slate-200">
            <p className="text-sm text-slate-600 mb-8">
              Last updated: October 2024
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-700 mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Use License</h2>
            <p className="text-slate-700 mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Tiktokenizer's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Disclaimer</h2>
            <p className="text-slate-700 mb-4">
              The materials on Tiktokenizer's website are provided "as is". Tiktokenizer makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Limitations</h2>
            <p className="text-slate-700 mb-4">
              In no event shall Tiktokenizer or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Tiktokenizer's website, even if Tiktokenizer or a Tiktokenizer authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Accuracy of Materials</h2>
            <p className="text-slate-700 mb-4">
              The materials appearing on Tiktokenizer's website could include technical, typographical, or photographic errors. Tiktokenizer does not warrant that any of the materials on the website are accurate, complete, or current. Tiktokenizer may make changes to the materials contained on the website at any time without notice.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Links</h2>
            <p className="text-slate-700 mb-4">
              Tiktokenizer has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Tiktokenizer of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Modifications</h2>
            <p className="text-slate-700 mb-4">
              Tiktokenizer may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Governing Law</h2>
            <p className="text-slate-700 mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Tiktokenizer is located, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Contact Information</h2>
            <p className="text-slate-700 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-slate-700">
              Email: <a href="mailto:huzhengnan@foxmail.com" className="text-blue-600 hover:underline">huzhengnan@foxmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
