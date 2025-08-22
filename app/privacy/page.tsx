export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <p className="text-sm text-gray-600 mb-8">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            <br />
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Jinniu District Xindatong Electronic Products Business Department (operating as "Axonode") is committed to
              protecting your privacy and personal data. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our websites www.axonodesolution.com and
              page.axonodesolution.com (collectively, the "Services").
            </p>
            <p className="text-gray-700">
              This policy complies with applicable data protection laws, including the EU General Data Protection
              Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Contact Information</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Data Controller:</strong> Jinniu District Xindatong Electronic Products Business Department
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> Chengdu City, Jinniu District, No. 116 Yujuan East Road, 7th Floor, No. 3,
                Unit 57
              </p>
              <p className="text-gray-700">
                <strong>Privacy Contact:</strong> privacy@axonode.com
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Information You Provide</h3>
            <p className="text-gray-700 mb-4">When you submit inquiries through our contact form, we collect:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                <strong>Name:</strong> To personalize our communication
              </li>
              <li>
                <strong>Email Address:</strong> To respond to your inquiry and send relevant information
              </li>
              <li>
                <strong>Company Name:</strong> To understand your business context
              </li>
              <li>
                <strong>Phone Number:</strong> For direct communication when necessary
              </li>
              <li>
                <strong>Message/Inquiry:</strong> To understand your specific needs
              </li>
              <li>
                <strong>Interested Product Category:</strong> To provide relevant product information
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              We use Google Analytics to collect aggregated, anonymized website usage statistics. We do not collect IP
              addresses, browser information, or use cookies beyond those required by Google Analytics.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Legal Basis for Processing (GDPR)</h2>
            <p className="text-gray-700 mb-4">We process your personal data based on:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                <strong>Legitimate Interest:</strong> Customer development and business cooperation
              </li>
              <li>
                <strong>Consent:</strong> Marketing communications (where applicable)
              </li>
              <li>
                <strong>Contract Performance:</strong> Responding to your inquiries and providing requested information
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use collected information for:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Responding to your inquiries and providing customer support</li>
              <li>Customer development and business cooperation activities</li>
              <li>Sending relevant marketing communications (with appropriate consent)</li>
              <li>Improving our website and services through analytics</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information. We may share information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                <strong>Service Providers:</strong> Gmail (Google) for email communications, Aliyun for website hosting
              </li>
              <li>
                <strong>Analytics:</strong> Google Analytics for website performance analysis
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect our rights
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              We do not share your data with business partners or suppliers for their independent use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. International Data Transfers</h2>
            <p className="text-gray-700">
              Your data may be transferred to and processed in countries outside your residence, including China (our
              primary operations) and the United States (Google services). We ensure appropriate safeguards are in place
              for such transfers in compliance with applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Retention</h2>
            <p className="text-gray-700">
              We retain customer inquiry data indefinitely to maintain our business relationships and provide ongoing
              support. You may request deletion of your data at any time by contacting privacy@axonode.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Your Rights</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">9.1 GDPR Rights (EU Residents)</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                <strong>Access:</strong> Request copies of your personal data
              </li>
              <li>
                <strong>Rectification:</strong> Request correction of inaccurate data
              </li>
              <li>
                <strong>Erasure:</strong> Request deletion of your data
              </li>
              <li>
                <strong>Portability:</strong> Request transfer of your data
              </li>
              <li>
                <strong>Objection:</strong> Object to processing based on legitimate interests
              </li>
              <li>
                <strong>Restriction:</strong> Request limitation of processing
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">9.2 CCPA Rights (California Residents)</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                <strong>Know:</strong> Right to know what personal information is collected
              </li>
              <li>
                <strong>Delete:</strong> Right to request deletion of personal information
              </li>
              <li>
                <strong>Opt-Out:</strong> Right to opt-out of sale (we do not sell personal information)
              </li>
              <li>
                <strong>Non-Discrimination:</strong> Right to equal service regardless of privacy choices
              </li>
            </ul>

            <p className="text-gray-700">
              To exercise your rights, contact us at privacy@axonode.com. We will respond within the timeframes required
              by applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Age Restrictions</h2>
            <p className="text-gray-700">
              Our services are intended for business use and individuals 16 years of age or older. We do not knowingly
              collect personal information from children under 16.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Security</h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to protect your personal data against
              unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is
              completely secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically. We will notify you of material changes by posting the
              updated policy on our website with a new effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> privacy@axonode.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Company:</strong> Jinniu District Xindatong Electronic Products Business Department
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> Chengdu City, Jinniu District, No. 116 Yujuan East Road, 7th Floor, No. 3,
                Unit 57
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
