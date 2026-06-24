import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Processing Addendum",
  description:
    "Enerzyz Data Processing Addendum (DPA) — the terms under which Enerzyz processes personal data on behalf of customers in connection with the Enerzyz Platform.",
  alternates: { canonical: "https://enerzyz.com/data-processing-addendum" },
};

const sections = [
  {
    id: "scope",
    title: "1. Scope and Roles",
    content: [
      "This Data Processing Addendum (\"DPA\") applies where Enerzyz processes personal data on behalf of a Customer in the course of providing the Enerzyz Platform (\"Services\"). This DPA forms part of, and is incorporated by reference into, the applicable subscription or licence agreement between the parties (\"Principal Agreement\").",
      "The Customer is the data controller (or equivalent) in respect of Customer Account Data and operational telemetry collected from its environment. Enerzyz acts as a data processor on the Customer's documented instructions. Enerzyz acts as an independent controller only for the limited internal purposes of platform security, platform operations, service monitoring, and generating de-identified aggregated analytics.",
      "As between the parties, the Customer retains ownership of all Customer Data. Nothing in this DPA transfers ownership of Customer Data to Enerzyz.",
    ],
  },
  {
    id: "what-we-process",
    title: "2. What Enerzyz Processes",
    content: [
      "The Enerzyz Platform is designed to ingest equipment telemetry — not personal information. The principal categories of data processed are:",
    ],
    list: [
      "Customer Account Data: names, business email addresses, user identifiers, role assignments, authentication identifiers, and access-log metadata for Authorised Users.",
      "Operational telemetry: temperatures, pressures, electrical currents, vibration, runtime hours, equipment state changes, weather signals, and tariff data from the Customer's energy assets.",
      "Aggregate occupancy counts: zone-level presence counts used solely to drive HVAC and energy optimisation. Enerzyz does not ingest individual guest or occupant identities, PMS or GRMS records, or any data that identifies a building occupant or hotel guest.",
    ],
    footer: "Enerzyz does not process special categories of personal data, payment-card data, clinical or patient records, government identifiers, or children's data. The Services are not configured to receive such data.",
  },
  {
    id: "processor-obligations",
    title: "3. Processor Obligations",
    content: [
      "Enerzyz will process Customer Data only on the Customer's documented instructions as set out in this DPA and the Principal Agreement. Enerzyz will ensure that personnel authorised to access Customer Data are bound by appropriate confidentiality obligations. Enerzyz will implement and maintain the technical and organisational security measures described in Section 5.",
      "If Enerzyz is required by applicable law to process Customer Data in a manner inconsistent with the Customer's instructions, Enerzyz will notify the Customer before doing so unless prohibited by law.",
    ],
  },
  {
    id: "data-use",
    title: "4. Use of Data and Model Training",
    content: [
      "Enerzyz uses Customer Data only to provide and support the Services. Enerzyz does not use a Customer's identifiable operational data or telemetry to train or improve its machine-learning models for the benefit of other customers. Model improvement relies solely on de-identified, aggregated data that cannot identify the Customer, any site, or any individual.",
      "Enterprise customers may opt out of contributing to model-improvement activities entirely — including de-identified training datasets — by written notice or through Platform controls. This election does not affect the quality or availability of the Services.",
      "Enerzyz owns and retains all right, title and interest in the Platform Intelligence (models, model weights, parameters, and de-identified aggregated learnings). Platform Intelligence does not include Customer Data.",
    ],
  },
  {
    id: "security",
    title: "5. Security",
    content: [
      "Enerzyz maintains an information-security programme aligned to ISO/IEC 27001:2022, IEC 62443, the NIST Cybersecurity Framework 2.0, and the SOC 2 Trust Services Criteria. Key controls include:",
    ],
    list: [
      "Outbound-only, mutually-authenticated integration — no inbound attack surface on the Customer's network.",
      "Mutual TLS 1.2/1.3 in transit; encryption at rest; HSM-backed key management.",
      "Customer SSO via SAML 2.0/OIDC with MFA; role-based access control.",
      "Zero standing access for Enerzyz engineering staff to Customer telemetry — just-in-time elevation with dual approval, time-bounded grants, and full audit logging.",
      "Per-device X.509 certificates with annual rotation and OCSP revocation.",
    ],
    footer: "Enerzyz's ISO/IEC 27001:2022 certification is in progress. Enerzyz's SOC 2 report is available to Customers on request under a confidentiality undertaking. A Security and Data Protection White Paper with architecture diagrams, data-flow descriptions, and control summaries is available to support vendor assurance.",
  },
  {
    id: "subprocessors",
    title: "6. Sub-processors",
    content: [
      "The Customer provides general authorisation for Enerzyz to engage sub-processors, including Enerzyz Affiliates and the infrastructure providers listed below. Enerzyz imposes data-protection obligations no less protective than this DPA on each sub-processor and remains responsible for their performance.",
    ],
    table: {
      headers: ["Sub-processor", "Service", "Hosting region"],
      rows: [
        ["Amazon Web Services", "Cloud infrastructure and storage", "Customer's selected region (default: AWS Asia Pacific — Singapore; US East — N. Virginia)"],
        ["Google Cloud", "Cloud infrastructure and managed data services", "Customer's selected region"],
        ["Enerzyz Affiliates", "Engineering, support, and customer success", "Singapore and jurisdictions where Enerzyz operates"],
        ["Global M2M connectivity provider", "Cellular (4G) fallback for edge devices", "Per network coverage"],
      ],
    },
    footer: "Enerzyz will notify the Customer at least 30 days before adding a new sub-processor. The Customer may object on reasonable data-protection grounds within that period.",
  },
  {
    id: "transfers",
    title: "7. International Data Transfers",
    content: [
      "Where Enerzyz transfers personal data across borders, it does so only where a valid transfer mechanism is in place under applicable data protection law. Mechanisms used include EU Standard Contractual Clauses (including Module Two for controller-to-processor transfers), the UK International Data Transfer Addendum, the EU–U.S. Data Privacy Framework, and equivalent safeguards for other jurisdictions including Singapore, India, Australia, the UAE, Saudi Arabia, and others.",
      "This DPA is designed to satisfy the requirements of data protection laws in all material markets where Enerzyz operates, including the EU GDPR, UK GDPR, PDPA (Singapore), DPDP Act 2023 (India), PIPL (China), PDPA (Thailand/Malaysia), Privacy Act (Australia), LGPD (Brazil), POPIA (South Africa), Saudi PDPL, and U.S. State Privacy Laws. Customers with jurisdiction-specific requirements may request supplementary terms.",
    ],
  },
  {
    id: "data-subject-rights",
    title: "8. Data Subject Rights",
    content: [
      "Enerzyz will provide reasonable technical and organisational assistance to help the Customer respond to data subject requests under applicable law in respect of Customer Account Data.",
      "Where Enerzyz receives a data subject request relating to data for which the Customer is the controller, Enerzyz will, unless legally prohibited, redirect the request to the Customer and notify the Customer promptly.",
    ],
  },
  {
    id: "breach",
    title: "9. Security Incidents and Breach Notification",
    content: [
      "Enerzyz will notify the Customer without undue delay — and in any event within 72 hours of confirming the breach — following a personal data breach affecting the Customer's personal data. Initial notification will include, to the extent known: the nature and approximate scope of the breach, categories and number of records affected, likely consequences, and measures taken or planned.",
      "Enerzyz documents all personal data breaches and will cooperate with the Customer and competent supervisory authorities. A notification does not constitute an admission of fault or liability.",
    ],
  },
  {
    id: "retention",
    title: "10. Retention and Deletion",
    content: [
      "On expiry or termination of the Principal Agreement, Enerzyz will, at the Customer's election, return or delete Customer Data within 90 days, except where retention is required by applicable law.",
      "Deletion of Customer Data does not require deletion of generalised, de-identified Platform Intelligence (model learnings, aggregated analytics) that cannot identify the Customer, any site, or any individual. Customers who have opted out of model-training contributions under Section 4 will also have their data excluded from retained de-identified learnings.",
      "Enerzyz Edge devices buffer telemetry locally only on a transient basis. On termination or decommissioning, Enerzyz performs cryptographic erasure of device keys (rendering residual encrypted data unrecoverable), revokes the device's operational certificate, and provides a certificate of data sanitisation on request.",
    ],
  },
  {
    id: "audits",
    title: "11. Audits and Compliance",
    content: [
      "Enerzyz will make available information reasonably necessary to demonstrate compliance with this DPA, primarily through third-party certifications, audit reports, and security documentation. Upon request and subject to a confidentiality undertaking, Enerzyz will provide its SOC 2 report and ISO/IEC 27001 certification status.",
      "Where documentation is insufficient to demonstrate compliance, the Customer (or an independent auditor that is not a competitor of Enerzyz) may conduct an audit no more than once per 12-month period, on reasonable prior written notice and in a manner that does not disrupt Enerzyz's operations.",
    ],
  },
  {
    id: "enterprise",
    title: "12. Enterprise DPA",
    content: [
      "Enterprise customers requiring a countersigned DPA, data residency elections, additional jurisdiction-specific schedules, or custom security assessments should contact their Enerzyz account team or write to legal@enerzyz.com.",
    ],
  },
];

export default function DataProcessingAddendum() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">

      {/* Header */}
      <div className="mb-10 border-b border-white/10 pb-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-300/70">Enerzyz · Legal</p>
        <h1 className="mt-3 text-xl font-semibold text-white">Data Processing Addendum</h1>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] text-white/35">
          <span>Version 3.0</span>
          <span>·</span>
          <span>Effective June 2026</span>
          <span>·</span>
          <span>Global Edition</span>
        </div>
        <p className="mt-4 text-[12.5px] leading-relaxed text-white/55">
          This addendum sets out the terms under which Enerzyz processes personal data on behalf of customers.
          It applies automatically upon acceptance of the Principal Agreement. Enterprise customers may request
          a countersigned version — see Section 12.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 border-b border-white/[0.07] pb-2">
              {section.title}
            </h2>
            <div className="space-y-3 text-[12.5px] leading-[1.8] text-white/60">
              {section.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {"list" in section && section.list && (
                <ul className="my-2 space-y-1.5 pl-5">
                  {section.list.map((item) => (
                    <li key={item} className="list-disc marker:text-white/20">{item}</li>
                  ))}
                </ul>
              )}
              {"footer" in section && section.footer && (
                <p className="text-[11.5px] text-white/40 italic">{section.footer}</p>
              )}
              {"table" in section && section.table && (
                <div className="my-3 overflow-x-auto rounded-lg border border-white/[0.08]">
                  <table className="w-full text-[11.5px]">
                    <thead>
                      <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                        {section.table.headers.map((h) => (
                          <th key={h} className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, ri) => (
                        <tr key={ri} className="border-b border-white/[0.05] last:border-0">
                          {row.map((cell, ci) => (
                            <td key={ci} className="px-4 py-2.5 text-white/55 align-top leading-relaxed">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-14 border-t border-white/[0.06] pt-6 text-[11px] text-white/25">
        <p>© 2026 Enerzyz. All rights reserved. · For the full enterprise DPA or jurisdiction-specific schedules, contact <span className="text-white/40">legal@enerzyz.com</span></p>
      </div>
    </main>
  );
}
