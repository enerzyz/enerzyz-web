import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Processing Addendum — Enerzyz",
  description: "DPA describing processing, subprocessors, and safeguards.",
};

export default function DataProcessingAddendum() {
  return (
  <main className="mx-auto max-w-5xl px-6 pt-28 pb-20 text-slate-100">
      <h1 className="mb-6 text-3xl font-semibold text-white">Data Processing Addendum (DPA)</h1>
      <p className="mb-6 text-lg text-white/80">
        This Data Processing Addendum (&quot;DPA&quot;) sets out the terms under which Enerzyz will process Personal Data
        on behalf of Customer in the provision of the Services. The DPA forms part of the Customer Agreement and
        reflects the parties&rsquo; commitments to comply with applicable data protection law.
      </p>

      <section className="mt-8 space-y-6 text-white/80">
        <h2 className="text-2xl font-semibold">1. Roles &amp; Responsibilities</h2>
        <p>
          As between the parties, Customer is the data controller (or equivalent) and Enerzyz acts as a data
          processor (or equivalent) with respect to Customer Data. Enerzyz will process Customer Data only on
          documented instructions from Customer, including the Agreement and this DPA.
        </p>

        <h2 className="text-2xl font-semibold">2. Processing Details</h2>
        <p>
          Types of data processed: contact, account, telemetry and event data; Categories of data subjects: Customer
          employees, contractors and end-users. Purposes: to provide, maintain and secure the Services, billing and
          support, and as otherwise instructed by Customer.
        </p>

        <h2 className="text-2xl font-semibold">3. Subprocessors &amp; Transfers</h2>
        <p>
          Enerzyz may engage subprocessors to perform processing activities on its behalf. Enerzyz maintains a list
          of current subprocessors and will notify Customer of additions. International transfers will be subject to
          appropriate safeguards such as Standard Contractual Clauses or other lawful mechanisms.
        </p>

        <h2 className="text-2xl font-semibold">4. Security Measures</h2>
        <p>
          Enerzyz applies technical and organizational measures appropriate to the risk, including network
          segmentation, encryption in transit, role-based access control, logging, monitoring, vulnerability
          management and incident response procedures. Detailed security measures are available under NDA or by
          request for enterprise customers.
        </p>

        <h2 className="text-2xl font-semibold">5. Incident Notification &amp; Cooperation</h2>
        <p>
          Enerzyz will notify Customer without undue delay after becoming aware of a Personal Data breach affecting
          Customer Data, provide information about the incident, and reasonably cooperate with Customer&rsquo;s
          investigation, remediation and regulatory reporting obligations.
        </p>

        <h2 className="text-2xl font-semibold">6. Audits &amp; Compliance</h2>
        <p>
          Upon reasonable notice and subject to confidentiality and security obligations, Enerzyz will provide
          information necessary to demonstrate compliance and permit audits or inspections under mutually agreed
          terms. Customers may rely on third-party audit reports (SOC2, ISO certification) where provided.
        </p>

        <h2 className="text-2xl font-semibold">7. Termination &amp; Data Return/Deletion</h2>
        <p>
          Upon termination or expiry of the Customer Agreement Enerzyz will, at Customer&rsquo;s option, return or delete
          Customer Data in accordance with the Agreement. Enerzyz may retain anonymized or aggregated data that does
          not identify individuals.
        </p>

        <h2 className="text-2xl font-semibold">8. Contact</h2>
        <p>For DPA, subprocessors or data protection inquiries: dpa@enerzyz.com.</p>
      </section>
    </main>
  );
}
