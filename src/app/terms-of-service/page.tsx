import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Enerzyz",
  description: "The terms governing use of Enerzyz services and website.",
};

export default function TermsOfService() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 text-slate-100">
      <h1 className="mb-6 text-3xl font-semibold text-white">Terms of Service</h1>

      <p className="mb-6 text-lg text-white/80">
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of Enerzyz products, services and website.
        By accessing or using the services you agree to be bound by these Terms and any applicable order form or
        service agreement. Enterprise customers are governed primarily by their signed customer agreement and
        statement of work; these Terms supplement such agreements where applicable.
      </p>

      <section className="mt-8 space-y-6 text-white/80">
        <h2 className="text-2xl font-semibold">1. Definitions</h2>
  <p>Key defined terms used in these Terms: &quot;Service&quot; means Enerzyz software and hosted services; &quot;Customer&quot;
  means the party ordering the Service; &quot;User&quot; means an individual authorized by Customer to use the Service.</p>

        <h2 className="text-2xl font-semibold">2. License &amp; Use Restrictions</h2>
        <p>
          Subject to these Terms and payment of applicable fees, Enerzyz grants Customer a limited, non-exclusive,
          non-transferable right to access and use the Service during the subscription term. Customer will not: (a)
          sublicense, resell or redistribute the Service; (b) attempt to access data or accounts of other customers; or
          (c) reverse engineer or otherwise attempt to discover source code or internal algorithms.
        </p>

        <h2 className="text-2xl font-semibold">3. Accounts, Security &amp; Confidentiality</h2>
        <p>
          Customer is responsible for all activity under its accounts and must maintain reasonable security
          controls (unique credentials, MFA for privileged users, and timely revocation of access). Each party will
          protect Confidential Information of the other using the same degree of care it uses for its own confidential
          information, but no less than reasonable care.
        </p>

        <h2 className="text-2xl font-semibold">4. Fees &amp; Payment</h2>
        <p>
          Fees are set forth in the applicable order form or invoice. Unless otherwise stated, fees are non-refundable.
          Customers shall pay all amounts in accordance with the invoicing terms. Late payments may incur interest and
          suspension of services.
        </p>

        <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
        <p>
          Enerzyz and its licensors retain ownership of the Service, underlying software, models, and all intellectual
          property rights. Customer retains ownership of Customer Data; Enerzyz acquires no rights in Customer Data
          except as permitted under the DPA and to provide the Service.
        </p>

        <h2 className="text-2xl font-semibold">6. Warranties, Disclaimers &amp; Limitations</h2>
        <p>
          Enerzyz warrants that it will provide the Service in a professional manner consistent with industry standards.
          EXCEPT AS EXPRESSLY SET FORTH, THE SERVICE IS PROVIDED &quot;AS IS&quot; AND ENERZYZ DISCLAIMS ALL OTHER WARRANTIES,
          EXPRESS OR IMPLIED, TO THE MAXIMUM EXTENT PERMITTED BY LAW. TO THE EXTENT PERMITTED BY LAW, ENERZYZ&apos;S
          TOTAL LIABILITY IS LIMITED TO AMOUNTS PAID BY CUSTOMER UNDER THE APPLICABLE ORDER FORM IN THE PRIOR 12 MONTHS.
        </p>

        <h2 className="text-2xl font-semibold">7. Termination</h2>
        <p>
          Either party may terminate for material breach if the breach is not cured within a specified period after
          notice. On termination, Enerzyz will, subject to applicable law and order form, provide Customer a
          mechanism to retrieve Customer Data for a limited period.
        </p>

        <h2 className="text-2xl font-semibold">8. Governing Law &amp; Dispute Resolution</h2>
        <p>
          These Terms are governed by the law specified in the order form or, absent an order form, the laws of the
          State of Delaware (or applicable jurisdiction). Disputes will be resolved by binding arbitration except as
          otherwise specified in an order form.
        </p>

        <h2 className="text-2xl font-semibold">9. Contact</h2>
        <p>For legal inquiries, please contact legal@enerzyz.com.</p>
      </section>
    </main>
  );
}
