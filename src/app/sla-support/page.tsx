import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SLA & Support",
  description: "Service-level commitments and support for Enerzyz customers.",
  alternates: { canonical: "https://enerzyz.com/sla-support" },
};

export default function SLAAndSupport() {
  return (
  <main className="mx-auto max-w-5xl px-6 pt-28 pb-20 text-slate-100">
      <h1 className="mb-6 text-3xl font-semibold text-white">SLA &amp; Support</h1>
      <p className="mb-6 text-lg text-white/80">
        Enerzyz offers enterprise-grade service-level commitments and structured support for production
        deployments. The service levels and support offerings below describe availability targets, response
        timelines, and escalation procedures. Specific SLA terms are subject to the customer order form.
      </p>

      <section className="mt-8 space-y-6 text-white/80">
        <h2 className="text-2xl font-semibold">Service Level Objectives (SLOs)</h2>
        <p>
          Our standard target availability for the Enerzyz hosted Service is <strong>99.95% monthly uptime</strong> for
          production-tier services, measured as the percentage of time the Service is reachable and able to serve API
          requests during each monthly measurement period, excluding scheduled maintenance and permitted outages.
        </p>

        <h2 className="text-2xl font-semibold">Support Tiers &amp; Response Times</h2>
        <ul className="list-disc pl-6">
          <li>
            Critical / P1: Severity impacting production (e.g., loss of control signals across production assets) —
            initial response within 1 hour, 24x7 on-call escalation and continuous remediation updates.
          </li>
          <li>
            High / P2: Severe functional degradation — initial response within 4 business hours, prioritized
            engineering attention during business hours and follow-up plans.
          </li>
          <li>
            Normal / P3: Non-critical issues and general questions — initial response within one business day.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Incident Management &amp; Escalation</h2>
        <p>
          For critical incidents, Enerzyz will engage an incident commander, provide regular status updates,
          coordinate cross-functional response, and follow a documented post-incident review process. Customers may
          escalate via their support contact or the designated on-call channel defined in the order form.
        </p>

        <h2 className="text-2xl font-semibold">Service Credits &amp; Exclusions</h2>
        <p>
          If Enerzyz fails to meet the agreed SLA availability, customers may be eligible for service credits as set
          forth in the customer agreement. Service credits are the exclusive remedy for SLA failures. Exclusions
          include force majeure, customer-caused outages, scheduled maintenance, and third-party outages outside of
          Enerzyz control.
        </p>

        <h2 className="text-2xl font-semibold">Support Channels</h2>
        <p>
          Support is provided via the customer portal/ticketing system, email and for higher tiers via direct phone
          and a dedicated technical account manager. Access and contacts are defined in the onboarding documents.
        </p>

        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>For support inquiries and onboarding: support@enerzyz.com. For enterprise SLA negotiation: sales@enerzyz.com.</p>
      </section>
    </main>
  );
}
