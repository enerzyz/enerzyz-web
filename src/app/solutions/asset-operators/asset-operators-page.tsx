"use client";

import { SolutionPageLayout } from "@/components/solution-page-layout";
import {
  TruckIcon,
  SearchIcon,
  BarChartIcon,
  UserIcon,
  WalletIcon,
  LinkChainIcon,
} from "@/components/icons";

export function AssetOperatorsPage() {
  return (
    <SolutionPageLayout
      /* ─── Hero ─── */
      eyebrow="For Asset Operators &amp; Contractors"
      headline="Every technician becomes a super-engineer."
      subheadline="HVAC contractors, facility management firms, and electromechanical service companies lose hours on reactive truck rolls, misdiagnosed faults, and manual reporting. Enerzyz OS gives your field teams AI-powered X-ray vision into every asset before they even arrive on site."
      heroStats={[
        { value: "60%+", label: "Fewer truck rolls" },
        { value: "3×", label: "Faster fault resolution" },
        { value: "45%", label: "Higher first-time fix rate" },
      ]}

      /* ─── Pain Points ─── */
      painSectionTitle="Why the best operators still struggle"
      painSectionSubtitle="The service industry runs on tight margins and tighter timelines. These are the bottlenecks killing your profitability."
      painPoints={[
        {
          icon: <TruckIcon className="h-5 w-5" />,
          title: "Unnecessary truck rolls",
          description:
            "Industry data shows 25–40% of dispatched service calls are for issues that could be diagnosed or resolved remotely. Each unnecessary truck roll costs $150–$500 in labor, fuel, and scheduling overhead — and delays the jobs that actually need hands-on attention.",
        },
        {
          icon: <SearchIcon className="h-5 w-5" />,
          title: "Blind fault diagnosis",
          description:
            "Technicians arrive at a site with minimal context. They spend 30–60 minutes just re-discovering the problem: checking sensors, reading BMS logs, and calling the office for history. Meanwhile, the client is frustrated and the clock is ticking.",
        },
        {
          icon: <BarChartIcon className="h-5 w-5" />,
          title: "Manual reporting & compliance burden",
          description:
            "Service reports, maintenance logs, warranty documentation, and compliance filings eat 15–20% of a senior technician's productive time. Errors in documentation lead to contract disputes, SLA penalties, and lost renewals.",
        },
        {
          icon: <UserIcon className="h-5 w-5" />,
          title: "Skilled labor shortage",
          description:
            "The HVAC and facilities industry faces a 30%+ skilled technician shortage globally. Senior engineers are retiring faster than apprentices can be trained. You need to multiply the impact of every person you have.",
        },
        {
          icon: <WalletIcon className="h-5 w-5" />,
          title: "Thin margins on service contracts",
          description:
            "Fixed-price maintenance contracts leave no room for surprises. One major unplanned failure can wipe out an entire year's profit on a service agreement. Without predictive intelligence, you're pricing contracts on guesswork.",
        },
        {
          icon: <LinkChainIcon className="h-5 w-5" />,
          title: "Fragmented tool stack",
          description:
            "Your teams juggle separate platforms for CMMS, dispatch, BMS access, inventory tracking, and customer communication. Context gets lost between systems, and no one has a unified view of asset health across their portfolio of managed sites.",
        },
      ]}

      /* ─── Capabilities ─── */
      capSectionEyebrow="How Enerzyz transforms operations"
      capSectionTitle="AI co-pilot for every technician, every job."
      capabilities={[
        {
          eyebrow: "Remote diagnostics",
          title: "Know the root cause before you dispatch",
          description:
            "Enerzyz continuously monitors connected assets across all your managed sites. When an anomaly is detected, the AI performs automated fault detection and diagnostics (AFDD) — identifying not just symptoms but root causes. Your dispatch team sees a prioritized, context-rich ticket with probable cause, affected equipment, historical patterns, and recommended parts before a single truck leaves the depot.",
          metric: "Root cause identified in <5 minutes",
        },
        {
          eyebrow: "Predictive maintenance",
          title: "Fix equipment weeks before it fails",
          description:
            "Machine learning models trained on millions of hours of equipment telemetry predict bearing wear, refrigerant leaks, compressor degradation, belt slippage, and electrical faults 2–6 weeks before failure. Auto-generated work orders include severity scores, estimated remaining useful life (RUL), and optimal intervention windows — letting you schedule proactively, not reactively.",
          metric: "2–6 week advance warning",
        },
        {
          eyebrow: "Agentic optimization",
          title: "AI that takes action in real-time, with human oversight",
          description:
            "Go beyond monitoring. Enerzyz agents autonomously adjust setpoints, balance chiller staging, modulate VFD speeds, and coordinate multi-system schedules across your managed buildings — every 60 seconds. Every action carries a justification trail and can be overridden instantly. Your engineers supervise, not babysit.",
          metric: "Human-in-the-loop always",
        },
        {
          eyebrow: "Super-engineer dashboard",
          title: "Manage multiple facilities from one screen",
          description:
            "Enerzyz OS lets you manage multiple facilities from a single unified console — aggregating asset health, alarm priority queues, energy performance, and SLA status across your entire contract portfolio. Technicians get guided troubleshooting workflows. Managers get real-time utilization and profitability metrics per site and per technician, all without switching between tools or logins.",
          metric: "Portfolio-wide visibility",
        },
        {
          eyebrow: "Automated reporting",
          title: "Compliance and client reports that write themselves",
          description:
            "Enerzyz auto-generates maintenance logs, service reports, SLA compliance documentation, and energy-savings summaries. Branded PDF reports are scheduled and delivered to your clients automatically — proving your value and eliminating hours of administrative work per technician per week.",
          metric: "Zero manual report writing",
        },
        {
          eyebrow: "Knowledge amplifier",
          title: "Accelerate junior technicians to senior-level competence",
          description:
            "Guided diagnostic flows, interactive equipment charts, historical fault pattern databases, and AI-generated repair recommendations turn every field technician into an expert. Reduce training time from years to months and improve first-time fix rates across the board.",
          metric: "50% faster onboarding",
        },
      ]}

      /* ─── Use Cases ─── */
      useCaseTitle="Purpose-built for the operators who keep the world running."
      useCases={[
        {
          vertical: "HVAC Contractors",
          painPoint: "30% of service calls are wasted on misdiagnosed or non-critical issues.",
          outcome: "AI-powered remote triage reduces unnecessary dispatches by 60%, increases first-time fix rates to 85%+, and lets technicians handle 40% more jobs per week.",
        },
        {
          vertical: "Facility Management Companies",
          painPoint: "Managing 50+ buildings with different BMS vendors and no unified data layer.",
          outcome: "Enerzyz normalizes all protocols into a single control plane. Portfolio-wide energy benchmarking, centralized alarm management, and automated SLA tracking from one dashboard.",
        },
        {
          vertical: "Chiller & Refrigeration Specialists",
          painPoint: "Compressor failures cost $20K–$80K and are only caught after the breakdown.",
          outcome: "Continuous vibration, pressure, and current analysis predicts compressor issues 30+ days ahead. Automated parts ordering and scheduled intervention windows eliminate emergency calls.",
        },
        {
          vertical: "Electrical & Power Contractors",
          painPoint: "Transformer, UPS, and switchgear maintenance is scheduled on calendar, not condition.",
          outcome: "Condition-based maintenance powered by real-time thermal imaging, partial discharge monitoring, and load analysis. 35% reduction in maintenance costs with zero decrease in reliability.",
        },
        {
          vertical: "Utility & Energy Service Companies",
          painPoint: "Performance contracts require guaranteed savings but measurement is manual and disputed.",
          outcome: "Enerzyz provides IPMVP-compliant measurement and verification, real-time savings dashboards, and automated variance explanations — protecting your guarantee and your margin.",
        },
        {
          vertical: "Building Automation Integrators",
          painPoint: "Clients want AI optimization but your team doesn't have data science resources.",
          outcome: "White-label Enerzyz as your AI layer. Connect via existing BACnet/Niagara/Modbus infrastructure and offer predictive analytics as a premium service tier — no ML team required.",
        },
      ]}

      /* ─── Outcome stats ─── */
      outcomeSectionTitle="Transform your service business"
      outcomeSectionSubtitle="Operators using Enerzyz deliver measurably better outcomes — and their clients notice."
      outcomeStats={[
        { value: "60%", label: "Fewer truck rolls" },
        { value: "85%+", label: "First-time fix rate" },
        { value: "3×", label: "Faster resolution" },
        { value: "40%", label: "More jobs per tech" },
      ]}

      /* ─── CTA ─── */
      ctaHeadline="Give your team superpowers"
      ctaDescription="See how Enerzyz transforms your service operations with a live demo tailored to your managed portfolio. We'll connect to your existing BMS and show results in real time."
    />
  );
}
