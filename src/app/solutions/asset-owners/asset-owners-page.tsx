"use client";

import { SolutionPageLayout } from "@/components/solution-page-layout";
import {
  FlameIcon,
  CogIcon,
  TrendDownIcon,
  GridIcon,
  ClipboardIcon,
  BuildingIcon,
} from "@/components/icons";

export function AssetOwnersPage() {
  return (
    <SolutionPageLayout
      /* ─── Hero ─── */
      eyebrow="For Asset Owners &amp; Facility Leaders"
      headline="Turn energy assets into high-performing, appreciating investments."
      subheadline="Commercial buildings waste up to 50% on their operational expenses in managing the assets. Enerzyz OS turns your electro-mechanical assets into a self-optimizing fleet slashing opex, extending equipment life, and lifting Net Operating Income from day one."
      heroStats={[
        { value: "30%+", label: "Energy waste eliminated" },
        { value: "25%+", label: "Asset life extended" },
        { value: "2–5×", label: "ROI within 12 months" },
      ]}
      breadcrumbLabel="Asset Owners"

      /* ─── Pain Points ─── */
      painSectionTitle="The hidden cost of reactive asset management"
      painSectionSubtitle="Every facility leader faces these challenges. Enerzyz was built to eliminate them."
      painPoints={[
        {
          icon: <FlameIcon className="h-5 w-5" />,
          title: "Runaway energy costs",
          description:
            "HVAC and other electrical systems account for 40–60% of a commercial building's operating budget. Without real-time optimization, you're burning cash around the clock — overpaying for demand peaks, running equipment at suboptimal load, and missing tariff arbitrage windows.",
        },
        {
          icon: <CogIcon className="h-5 w-5" />,
          title: "Premature equipment failure",
          description:
            "Reactive maintenance shortens the useful life of million-dollar chillers, generators, and UPS systems by 30–40%. Every unplanned failure triggers cascading costs: emergency contractor markups, occupant disruption, insurance claims, and accelerated depreciation.",
        },
        {
          icon: <TrendDownIcon className="h-5 w-5" />,
          title: "Declining Net Operating Income",
          description:
            "Rising utility rates, increasing compliance mandates (LEED, ENERGY STAR, Local Law 97, NABERS), and deferred maintenance erode the bottom line. Investors and appraisers now discount assets with poor energy ratings, directly hurting cap rates and valuations.",
        },
        {
          icon: <GridIcon className="h-5 w-5" />,
          title: "Siloed BMS & SCADA systems",
          description:
            "Your building probably runs 3–5 disconnected control systems across HVAC, electrical, fire, and access. Without a unified brain layer, you can't see the full picture — let alone optimize across assets in real time.",
        },
        {
          icon: <ClipboardIcon className="h-5 w-5" />,
          title: "ESG & compliance pressure",
          description:
            "Tenants, investors, and regulators demand transparent carbon reporting, net-zero roadmaps, and audit-ready data. Manual tracking in spreadsheets is error-prone, costly, and won't scale across a growing portfolio.",
        },
        {
          icon: <BuildingIcon className="h-5 w-5" />,
          title: "Multi-site blind spots",
          description:
            "Managing a portfolio of offices, retail locations, or hotel properties means inconsistent performance, no benchmarking, and no way to replicate best-performing site configurations across the fleet.",
        },
      ]}

      /* ─── Capabilities ─── */
      capSectionEyebrow="What Enerzyz delivers"
      capSectionTitle="Autonomous orchestration for every asset you own."
      capabilities={[
        {
          eyebrow: "Predictive optimization",
          title: "AI that runs your facility better than any BMS alone",
          description:
            "Enerzyz ingests telemetry from BMS, SCADA, IoT sensors, weather feeds, tariff schedules, and occupancy data. It predicts thermal loads, electrical demand, and equipment degradation curves — then autonomously adjusts setpoints, staging, and schedules every 60 seconds to find global optima across your entire asset stack.",
          metric: "99.6% prediction accuracy",
        },
        {
          eyebrow: "Asset longevity engine",
          title: "Extend equipment life by 25%+ and defer CapEx",
          description:
            "Continuously monitors vibration, pressure differentials, refrigerant levels, motor current, and bearing temperatures. Detects anomalies weeks before failure, auto-generates work orders, and optimally load-balances equipment to equalize wear — stretching chiller, pump, and AHU service life well past manufacturer warranties.",
          metric: "40% fewer unplanned breakdowns",
        },
        {
          eyebrow: "Financial intelligence",
          title: "See the dollar impact of every operational decision",
          description:
            "Real-time dashboards show energy cost avoidance, maintenance savings, carbon credit potential, and NOI impact. Generate investor-grade ESG reports, ENERGY STAR benchmarking data, and compliance documentation automatically — no consultants required.",
          metric: "Automated audit-ready reporting",
        },
        {
          eyebrow: "Unified control plane",
          title: "Manage multiple facilities from a single OS",
          description:
            "Bridge legacy BACnet, Modbus, OPC-UA, MQTT, and REST APIs into a single digital twin. Enerzyz OS lets you manage multiple facilities — offices in New York, data centers in Singapore, hotels in Dubai — from one unified dashboard with normalized KPIs, cross-site benchmarking, and remote command authority across your entire portfolio.",
          metric: "Protocol-agnostic integration",
        },
        {
          eyebrow: "Demand response & grid services",
          title: "Monetize flexibility and cut peak charges",
          description:
            "Automatically participates in demand response programs, shifts loads to off-peak periods, coordinates battery storage dispatch, and pre-cools buildings before peak tariff windows. Turns your facility from a passive load into a revenue-generating grid asset.",
          metric: "15–20% peak demand reduction",
        },
        {
          eyebrow: "Digital twin simulation",
          title: "Test changes before they touch real equipment",
          description:
            "Run what-if scenarios — retrofit evaluations, chiller replacement ROI, solar + storage sizing, occupancy schedule changes — in a physics-informed digital twin. See the predicted energy, cost, and carbon impact before committing capital.",
          metric: "1-hour forward simulation horizon",
        },
      ]}

      /* ─── Use Cases ─── */
      useCaseTitle="Built for every building, every industry."
      useCases={[
        {
          vertical: "Commercial Offices",
          painPoint: "HVAC & lighting consume 70% of operating cost with minimal visibility.",
          outcome: "Enerzyz cuts energy spend 25–30%, reduces tenant comfort complaints by 60%, and delivers LEED-ready analytics for leasing advantage.",
        },
        {
          vertical: "Data Centers",
          painPoint: "PUE above 1.5 wastes millions and threatens uptime SLAs.",
          outcome: "AI-optimized cooling loops drive PUE toward 1.2, predict UPS/generator failures 30 days ahead, and ensure Tier III+ reliability.",
        },
        {
          vertical: "Hotels & Hospitality",
          painPoint: "Guest comfort vs. energy efficiency feels like a zero-sum tradeoff.",
          outcome: "Room-level HVAC orchestration maintains guest satisfaction scores while cutting energy bills 35%. Automated ESG reports attract eco-conscious group bookings.",
        },
        {
          vertical: "Hospitals & Healthcare",
          painPoint: "Critical equipment downtime risks patient safety and regulatory violations.",
          outcome: "24/7 predictive monitoring for chillers, AHUs, and backup generators. Auto-escalation protocols and compliance-grade audit trails keep JCAHO and CMS auditors satisfied.",
        },
        {
          vertical: "Retail Chains & Malls",
          painPoint: "200+ locations each running different BMS brands with zero portfolio benchmarking.",
          outcome: "Unified multi-site dashboard normalizes KPIs, replicates best-store configurations fleet-wide, and generates location-level P&L impact reports.",
        },
        {
          vertical: "Industrial Facilities",
          painPoint: "Process heat, compressed air, and cooling towers waste 20–40% of energy in manufacturing plants.",
          outcome: "Enerzyz coordinates production scheduling with energy procurement, optimizes compressor staging, and extends heavy-asset life through condition-based maintenance.",
        },
      ]}

      /* ─── Outcome stats ─── */
      outcomeSectionTitle="Measurable impact on your balance sheet"
      outcomeSectionSubtitle="Enerzyz customers see returns within the first quarter. Here's what the numbers look like."
      outcomeStats={[
        { value: "30%+", label: "Energy cost reduction" },
        { value: "25%+", label: "Equipment life extension" },
        { value: "40%", label: "Fewer unplanned outages" },
        { value: "2–5×", label: "First-year ROI" },
      ]}

      /* ─── CTA ─── */
      ctaHeadline="See the ROI for your portfolio"
      ctaDescription="Share a few details about your facilities and our engineers will model the projected savings, asset-life extension, and NOI uplift before the demo even starts."
    />
  );
}
