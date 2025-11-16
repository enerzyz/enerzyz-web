import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Enerzyz",
  description:
    "How Enerzyz collects, uses, retains, and protects personal data for customers, partners and visitors.",
};

export default function PrivacyPolicy() {
  return (
  <main className="mx-auto max-w-5xl px-6 pt-28 pb-20 text-slate-100">
      <h1 className="mb-6 text-3xl font-semibold text-white">Privacy Policy</h1>

      <p className="mb-6 text-lg text-white/80">
        Enerzyz (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy and is committed to protecting your personal data.
        This Privacy Policy describes the personal data we process, the purposes for which we process it, our legal
        bases, third party recipients, retention, security measures, and the choices available to individuals.
      </p>

      <section className="mt-8 space-y-6 text-white/80">
        <h2 className="text-2xl font-semibold">1. Scope &amp; Applicability</h2>
        <p>
          This Policy applies to personal data processed by Enerzyz in connection with our website, marketing
          activities and provision of enterprise services. It does not govern processing by third party services
          you integrate with through Enerzyz or information that is subject to a separate enterprise agreement.
        </p>

        <h2 className="text-2xl font-semibold">2. Data We Collect</h2>
        <p className="font-semibold">Categories of data we collect include:</p>
        <ul className="list-disc pl-6">
          <li>Contact and identity data (name, email, company, job title) provided during demos, signups, or support requests.</li>
          <li>Account and billing data for customers (billing address, payment method, invoicing details).</li>
          <li>Transactional data (service usage metrics, logs, telemetry collected to operate and secure the service).</li>
          <li>Technical and device data (IP address, browser, User-Agent, cookies) collected from website visitors.</li>
          <li>Communications and support records (emails, tickets, meeting notes) to provide and improve support.</li>
        </ul>

        <h2 className="text-2xl font-semibold">3. Purposes &amp; Legal Bases</h2>
        <p>We process personal data for purposes including:</p>
        <ul className="list-disc pl-6">
          <li>Providing, maintaining, and improving Enerzyz products and services (performance of contract).</li>
          <li>Billing, payments and account administration (performance of contract and legitimate interest).</li>
          <li>Security, fraud prevention, abuse detection and incident response (legitimate interest).</li>
          <li>Customer support and professional services (performance of contract / consent where applicable).</li>
          <li>Marketing and communications (consent where required; otherwise legitimate interest with opt-out).</li>
          <li>Compliance with legal obligations (legal obligation).</li>
        </ul>

        <h2 className="text-2xl font-semibold">4. Sharing &amp; International Transfers</h2>
        <p>
          We may share personal data with subprocessors and service providers who perform services on our behalf,
          such as cloud hosting providers, analytics vendors, payment providers and security providers. We require
          contractual safeguards (including standard contractual clauses where relevant) for international data
          transfers and maintain a subprocessors list available to customers on request.
        </p>

        <h2 className="text-2xl font-semibold">5. Retention</h2>
        <p>
          We retain personal data as long as necessary to provide services, to comply with legal obligations, resolve
          disputes and enforce agreements. Specific retention periods depend on the category of data and contractual
          requirements; for enterprise customers retention is governed by the DPA and customer agreement.
        </p>

        <h2 className="text-2xl font-semibold">6. Security</h2>
        <p>
          Enerzyz implements appropriate technical and organizational measures to protect personal data, including
          encryption in transit, access controls, logging, vulnerability management, and periodic security reviews.
          For production security controls see our DPA; customers may request evidence via an audit or SOC report
          under contractual terms.
        </p>

        <h2 className="text-2xl font-semibold">7. Your Rights</h2>
        <p>
          Subject to local law, individuals may have rights to access, correct, port or delete their personal data,
          and to restrict or object to processing. To exercise these rights, contact privacy@enerzyz.com. We will
          process requests in accordance with applicable law and contractual obligations.
        </p>

        <h2 className="text-2xl font-semibold">8. Children</h2>
        <p>Our services are not intended for children. We do not knowingly collect personal data from children under 16.</p>

        <h2 className="text-2xl font-semibold">9. Changes to this Policy</h2>
        <p>We may update this policy from time to time. Material changes will be communicated via the website or direct notice to customers.</p>

        <h2 className="text-2xl font-semibold">10. Contact</h2>
        <p>Questions about privacy or data subject requests: privacy@enerzyz.com. Our Data Protection Officer for enterprise matters: dpo@enerzyz.com.</p>
      </section>
    </main>
  );
}
