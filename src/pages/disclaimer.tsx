import Head from "next/head";

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer - Tiktokenizer</title>
        <meta name="description" content="Disclaimer for Tiktokenizer" />
        <link rel="canonical" href="https://tiktokenizer.app/disclaimer" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-[1200px] px-8 py-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Disclaimer</h1>

          <div className="prose prose-slate max-w-none bg-white rounded-lg p-8 shadow-sm border border-slate-200">
            <p className="text-sm text-slate-600 mb-8">
              Last updated: October 2024
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. General Disclaimer</h2>
            <p className="text-slate-700 mb-4">
              The information provided on Tiktokenizer is for informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on the website.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Tokenization Results</h2>
            <p className="text-slate-700 mb-4">
              Tiktokenizer is a visualization tool designed to help understand how different language models tokenize text. The results provided by Tiktokenizer are based on the tokenizer implementations for the respective models. Please note:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li>Tokenization results may vary depending on the model version and implementation</li>
              <li>Actual API usage and costs may differ from Tiktokenizer estimations</li>
              <li>Results are provided "as-is" without any guarantee of accuracy for production use</li>
              <li>Always verify results with the official model documentation or API</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. No Warranty</h2>
            <p className="text-slate-700 mb-4">
              Tiktokenizer is provided "as is" and "as available" without warranty of any kind, either expressed or implied. We specifically disclaim any warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Limitation of Liability</h2>
            <p className="text-slate-700 mb-4">
              In no event shall Tiktokenizer, its creators, or contributors be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising out of your use of or inability to use Tiktokenizer or its content.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Third-Party Content</h2>
            <p className="text-slate-700 mb-4">
              Tiktokenizer may include references to third-party models, libraries, and services. We do not endorse, control, or take responsibility for the content of third-party websites, services, or products. Your use of these external resources is at your own risk and is governed by their respective terms and conditions.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Model Attribution</h2>
            <p className="text-slate-700 mb-4">
              Tiktokenizer uses tokenizers from various sources including:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li><strong>OpenAI:</strong> Tiktoken library and model documentation</li>
              <li><strong>Hugging Face:</strong> Transformers library and model hub</li>
              <li><strong>Meta:</strong> Llama and related model implementations</li>
              <li><strong>Other organizations:</strong> Various open-source models and libraries</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Changes to Service</h2>
            <p className="text-slate-700 mb-4">
              We reserve the right to modify, suspend, or discontinue Tiktokenizer at any time without notice. We shall not be liable to you or to any third party for any modification, suspension, or discontinuation of Tiktokenizer.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Accuracy of Information</h2>
            <p className="text-slate-700 mb-4">
              While we make efforts to keep information current and accurate, tokenization methods and model implementations may change. We recommend:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li>Always verifying results with official documentation</li>
              <li>Testing with actual APIs in production environments</li>
              <li>Keeping track of model version changes</li>
              <li>Consulting with official support channels for critical applications</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Legal Compliance</h2>
            <p className="text-slate-700 mb-4">
              Users of Tiktokenizer are responsible for ensuring their use complies with all applicable laws, regulations, and third-party rights. This includes but is not limited to:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li>Intellectual property rights</li>
              <li>Terms of service of third-party APIs and models</li>
              <li>Data privacy and protection regulations</li>
              <li>Any applicable export control regulations</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">10. Contact for Issues</h2>
            <p className="text-slate-700 mb-4">
              If you have concerns about the accuracy of information or the functionality of Tiktokenizer, please contact us at:
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
