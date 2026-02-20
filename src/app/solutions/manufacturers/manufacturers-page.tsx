"use client";

import { SolutionPageLayout } from "@/components/solution-page-layout";
import {
  PackageIcon,
  WrenchIcon,
  EyeOffIcon,
  TagIcon,
  GlobeIcon,
  HandshakeIcon,
} from "@/components/icons";

export function ManufacturersPage() {
  return (
    <SolutionPageLayout
      /* ─── Hero ─── */
      eyebrow="For Equipment Manufacturers"
      headline="Your equipment, perpetually intelligent."
      subheadline="Chiller, HVAC, inverter, BESS, pump, generator, and engine manufacturers compete on specs but customers choose on outcomes. Enerzyz OS lets you embed a predictive AI brain into every unit you ship, transforming one-time hardware sales into recurring, data-driven revenue streams."
      heroStats={[
        { value: "40%", label: "Warranty cost reduction" },
        { value: "5–10×", label: "Lifetime customer value" },
        { value: "100%", label: "Field visibility" },
      ]}

      /* ─── Pain Points ─── */
      painSectionTitle="The manufacturer's dilemma"
      painSectionSubtitle="The equipment industry is changing. These challenges are reshaping who wins and who gets commoditized."
      painPoints={[
        {
          icon: <PackageIcon className="h-5 w-5" />,
          title: "Sell-and-forget revenue model",
          description:
            "Traditional manufacturing is a one-time transactional business. Once the chiller or generator ships, you lose visibility into how it's used, how it performs, and when it needs service — until a warranty claim arrives. You're leaving 5–10× the equipment sale price on the table in lifetime services and parts revenue.",
        },
        {
          icon: <WrenchIcon className="h-5 w-5" />,
          title: "Warranty & recall exposure",
          description:
            "Field failures are expensive. Each warranty repair costs 3–8× the price of a planned service intervention. Without real-time field performance data, you can't distinguish between manufacturing defects, installation errors, and abuse — leading to overly broad recalls and inflated warranty reserves.",
        },
        {
          icon: <EyeOffIcon className="h-5 w-5" />,
          title: "No field performance data",
          description:
            "You design equipment based on lab testing and assumed operating conditions. But 60%+ of field installations deviate from design parameters — incorrect piping, oversizing, poor maintenance. Without continuous field telemetry, your R&D team is designing the next generation blind.",
        },
        {
          icon: <TagIcon className="h-5 w-5" />,
          title: "Commoditization pressure",
          description:
            "Competing on COP ratings, EER numbers, and nameplate specs is a race to the bottom. Low-cost manufacturers from emerging markets match your hardware specs at 40–60% of your price. Without software differentiation, your premium brand becomes indefensible.",
        },
        {
          icon: <GlobeIcon className="h-5 w-5" />,
          title: "Regulatory & compliance complexity",
          description:
            "EU F-Gas regulations, EPA SNAP rules, Department of Energy efficiency standards, and emerging carbon border adjustments require documented proof of field performance. Without automated compliance reporting, every market entry requires expensive manual certification processes.",
        },
        {
          icon: <HandshakeIcon className="h-5 w-5" />,
          title: "Channel partner misalignment",
          description:
            "Your authorized dealers, system integrators, and service partners are the face of your brand in the field. But you have zero visibility into installation quality, commissioning accuracy, or service performance — until customer complaints surface.",
        },
      ]}

      /* ─── Capabilities ─── */
      capSectionEyebrow="What Enerzyz unlocks for OEMs"
      capSectionTitle="Embed intelligence. Own the lifecycle."
      capabilities={[
        {
          eyebrow: "Connected product platform",
          title: "Turn every unit into a smart, connected asset",
          description:
            "Enerzyz provides embeddable firmware agents and cloud APIs that connect any equipment — chillers, VRFs, heat pumps, inverters, battery systems, gensets, pumps, AHUs — to a unified digital platform. Stream real-time telemetry (temperatures, pressures, currents, vibration, runtime hours) from the field and visualize fleet-wide performance from a single OEM dashboard.",
          metric: "Plug-and-play IoT integration",
        },
        {
          eyebrow: "Predictive warranty engine",
          title: "Slash warranty costs 40% with early fault intelligence",
          description:
            "Machine learning models trained on your equipment's operational signatures detect degradation patterns — compressor wear, bearing failure, refrigerant leaks, capacitor aging, winding insulation breakdown — weeks before catastrophic failure. Auto-classify failures as manufacturing defects, installation errors, or misuse. Reduce false warranty claims, target recalls precisely, and rightsize your warranty reserve.",
          metric: "30-day advance failure prediction",
        },
        {
          eyebrow: "Recurring revenue layer",
          title: "Launch equipment-as-a-service and premium monitoring tiers",
          description:
            "White-label the Enerzyz platform as your OEM customer portal. Offer tiered subscriptions: basic monitoring, advanced analytics, predictive maintenance alerts, and autonomous optimization. Transform a $50K one-time equipment sale into a $50K + $500/month recurring relationship. Your installed base becomes an annuity business.",
          metric: "Software-powered revenue streams",
        },
        {
          eyebrow: "R&D intelligence loop",
          title: "Design better products with real field performance data",
          description:
            "Aggregate anonymized field telemetry across your entire installed fleet: actual vs. rated efficiency under real conditions, common failure modes by region/climate/load profile, and operational patterns your lab testing never anticipated. Feed these insights directly into your product development cycle to close the lab-to-field performance gap.",
          metric: "Millions of field operating hours",
        },
        {
          eyebrow: "Channel partner visibility",
          title: "Monitor installation quality and service performance",
          description:
            "Track commissioning accuracy, first-year performance benchmarks, and service response times across your dealer and integrator network. Identify top-performing partners, flag under-performers before customers complain, and use data-driven incentives to align channel behavior with your brand promise.",
          metric: "Dealer performance scorecards",
        },
        {
          eyebrow: "Compliance automation",
          title: "Automated regulatory reporting for every market",
          description:
            "Generate field-performance documentation for DOE, EU Ecodesign, ASHRAE 90.1, and Title 24 compliance automatically. Prove real-world efficiency claims, support carbon offset programs, and pre-certify equipment for green building rating systems (LEED, BREEAM, Green Star) — accelerating market access and premium positioning.",
          metric: "Audit-ready from day one",
        },
      ]}

      /* ─── Use Cases ─── */
      useCaseTitle="For every asset class, a smarter product strategy."
      useCases={[
        {
          vertical: "Chiller Manufacturers",
          painPoint: "Field COP is 15–25% below rated COP, but you only learn this from warranty claims.",
          outcome: "Enerzyz monitors real-time COP, condenser fouling, and refrigerant charge across the installed fleet. Proactive alerts reduce warranty costs 40% and provide R&D with the data to close the lab-to-field gap.",
        },
        {
          vertical: "HVAC & VRF OEMs",
          painPoint: "Dealer installation quality varies wildly and drives disproportionate support costs.",
          outcome: "Automated commissioning verification flags incorrect piping, charge levels, and airflow at startup. Dealer scorecards drive accountability. Result: 30% fewer year-one service calls.",
        },
        {
          vertical: "Inverter & Solar Manufacturers",
          painPoint: "String-level underperformance goes undetected for months, eroding customer trust.",
          outcome: "Real-time yield monitoring, degradation detection, and automated O&M dispatching per inverter. OEM-branded portal increases customer retention and opens premium monitoring subscriptions.",
        },
        {
          vertical: "BESS Manufacturers",
          painPoint: "Battery degradation varies by 2–3× based on cycling patterns, but you have no field visibility.",
          outcome: "Cell-level state-of-health tracking, thermal management optimization, and warranty-claim classification (cycling abuse vs. manufacturing defect) protect margins and inform next-gen chemistry decisions.",
        },
        {
          vertical: "Pump & Compressor OEMs",
          painPoint: "Pumps are oversized in 60% of installations, reducing efficiency and accelerating wear.",
          outcome: "Enerzyz detects oversizing from flow/pressure telemetry, recommends VFD retrofits, and provides the OEM with demand-right sizing data for future product lines and quoting.",
        },
        {
          vertical: "Generator & Engine Manufacturers",
          painPoint: "Standby generators run <100 hours/year but fail when needed most.",
          outcome: "Continuous readiness monitoring: fuel quality, battery health, coolant levels, block heater status. Predictive alerts ensure 99.9% starting reliability and transform the service model from calendar-based to condition-based.",
        },
      ]}

      /* ─── Outcome stats ─── */
      outcomeSectionTitle="Quantified value for your product line"
      outcomeSectionSubtitle="OEMs embedding Enerzyz see measurable improvements across the entire product lifecycle."
      outcomeStats={[
        { value: "40%", label: "Warranty cost reduction" },
        { value: "5–10×", label: "Customer lifetime value" },
        { value: "100%", label: "Fleet visibility" },
        { value: "30%", label: "Fewer year-one failures" },
      ]}

      /* ─── CTA ─── */
      ctaHeadline="Make your next product line intelligent"
      ctaDescription="Let our team show you how Enerzyz embeds into your equipment platform — from firmware to cloud dashboard. We'll model the recurring revenue opportunity and warranty savings for your product portfolio."
    />
  );
}
