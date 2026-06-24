import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "Rules and prohibited activities for using Enerzyz services.",
  alternates: { canonical: "https://enerzyz.com/acceptable-use-policy" },
};

export default function AcceptableUsePolicy() {
  return (
  <main className="mx-auto max-w-5xl px-6 pt-28 pb-20 text-slate-100">
      <h1 className="mb-6 text-3xl font-semibold text-white">Acceptable Use Policy</h1>
      <p className="mb-6 text-lg text-white/80">
        Enerzyz provides critical control and optimization services for energy assets. To preserve platform
        integrity, security and customer trust, this Acceptable Use Policy (&quot;AUP&quot;) describes prohibited and
        restricted activities for use of Enerzyz services.
      </p>

      <section className="mt-8 space-y-6 text-white/80">
        <h2 className="text-2xl font-semibold">Prohibited Activities</h2>
        <p>The following activities are strictly prohibited when using Enerzyz services:</p>
        <ul className="list-disc pl-6">
          <li>Unauthorized access, tampering, or interference with the service, including attempts to access other
          customers&apos; accounts, telemetry or control planes.</li>
          <li>Introducing malware, ransomware, cryptominers, or any code intended to degrade, disrupt or seize control
          of systems.</li>
          <li>Using the service to transmit spam, phishing messages, or to facilitate fraud, harassment or illegal activity.</li>
          <li>Reverse engineering, decompiling, or extracting proprietary models, algorithms, code or confidential data.</li>
          <li>Conducting denial of service attacks or any activity that would materially degrade the availability of
          Enerzyz infrastructure or other customers&apos; service.</li>
          <li>Using the service to store or transmit sanctioned goods, restricted data without the appropriate
          contractual and legal safeguards.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Acceptable Use Guidance</h2>
        <p>
          Customers are responsible for the content they submit and must ensure proper authorization is obtained for
          any control actions performed through the platform. For safety-critical integrations (e.g., direct control
          of grid assets), customers must implement human-in-the-loop safeguards and follow Enerzyz operational
          recommendations documented in the integration guide.
        </p>

        <h2 className="text-2xl font-semibold">Enforcement &amp; Remedies</h2>
        <p>
          Violations of this AUP may result in suspension or termination of service, removal of content, and civil or
          criminal prosecution where applicable. Enerzyz will investigate suspected violations and may involve law
          enforcement, provide remediation guidance, and seek recovery of damages.
        </p>
      </section>
    </main>
  );
}
