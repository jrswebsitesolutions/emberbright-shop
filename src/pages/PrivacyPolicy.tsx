import { Shield, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Shield className="w-16 h-16 mx-auto mb-6 text-orange-500" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              How EmberBright Solutions collects, uses, and protects your personal information
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 pb-8 border-b border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> January 2025
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Information We Collect
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  EmberBright Solutions collects personal information necessary to provide you with high-quality permanent LED lighting services. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Contact details including names, phone numbers, email addresses, and mailing addresses</li>
                  <li>Property information such as address, property type, and project specifications</li>
                  <li>Financial information required to process payments and complete transactions</li>
                  <li>Technical data including IP address, browser type, and device characteristics collected automatically when you visit our website</li>
                  <li>Communication preferences and interaction history with our services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information collected to deliver exceptional service and improve your experience:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide and deliver our permanent LED lighting installation services</li>
                  <li>Process estimates, quotes, and billing transactions</li>
                  <li>Communicate with you regarding your project, appointments, and service updates</li>
                  <li>Send marketing communications about new services, promotions, and company updates</li>
                  <li>Respond to your inquiries, questions, and support requests</li>
                  <li>Analyze usage patterns to improve our website and services</li>
                  <li>Maintain records for business operations and quality assurance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Information Sharing
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  EmberBright Solutions respects your privacy and limits information sharing to necessary circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Service Providers:</strong> We share information with trusted contractors and service partners who assist in delivering our lighting installation services
                  </li>
                  <li>
                    <strong>Business Partners:</strong> Information may be shared with suppliers and business partners essential to our operations
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We do not sell your personal information to third parties for their marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. While we strive to protect your data, no method of transmission over the internet or electronic storage is completely secure. We continuously review and update our security practices to maintain the highest standards of data protection.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Data Retention
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your personal information only as long as necessary to fulfill the purposes outlined in this privacy policy, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, it is securely deleted or anonymized.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Rights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have important rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Access:</strong> Request a copy of the personal information we hold about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Request corrections to inaccurate or incomplete information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal information, subject to legal requirements
                  </li>
                  <li>
                    <strong>Withdraw Consent:</strong> Withdraw consent for processing your information where consent was the basis
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time
                  </li>
                  <li>
                    <strong>Data Portability:</strong> Request your information in a structured, machine-readable format
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Marketing Communications
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may send you marketing communications about our services, promotions, and updates. You can opt out of these communications at any time by clicking the unsubscribe link in our emails or contacting us directly. Please note that even if you opt out of marketing messages, you will still receive transactional communications related to your service requests and projects.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user behavior. You can control cookie preferences through your browser settings, though disabling certain cookies may affect website functionality.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Third-Party Links
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  EmberBright Solutions may update this privacy policy periodically to reflect changes in our practices or legal requirements. We will post the updated policy on our website with a revised date. We encourage you to review this policy regularly to stay informed about how we protect your information.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Mail className="w-6 h-6 text-orange-600 mr-3" />
                  Contact Us About Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions or concerns about this privacy policy, wish to exercise your rights, or need to submit a data access request, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-900 font-semibold">EmberBright Solutions Inc.</p>
                  <p className="text-gray-700">
                    Email:{' '}
                    <a href="mailto:info@emberbright.ca" className="text-orange-600 hover:text-orange-700 font-semibold">
                      info@emberbright.ca
                    </a>
                  </p>
                  <p className="text-gray-700">
                    Phone:{' '}
                    <a href="tel:4036715625" className="text-orange-600 hover:text-orange-700 font-semibold">
                      (403) 671-5625
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
