import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Enerzyz",
  description: "Details about cookies and tracking used on the Enerzyz website.",
};

export default function CookiePolicy() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 text-slate-100">
      <h1 className="mb-6 text-3xl font-semibold text-white">Cookie Policy</h1>
      <p className="mb-6 text-lg text-white/80">
        This Cookie Policy explains how Enerzyz and our partners use cookies, pixels and similar technologies on
        the website and in connection with our services. Cookies help us deliver functionality, measure performance,
        secure the platform, and personalize experience.
      </p>

      <section className="mt-8 space-y-6 text-white/80">
        <h2 className="text-2xl font-semibold">What are cookies?</h2>
        <p>Cookies are small text files placed on your device by websites you visit. They enable the website to
        recognize your device and store preferences or other information.</p>

        <h2 className="text-2xl font-semibold">Types of cookies we use</h2>
        <ul className="list-disc pl-6">
          <li>
            <strong>Necessary cookies</strong> — Required for core site functionality (login, security, load balancing).
          </li>
          <li>
            <strong>Functional cookies</strong> — Remember preferences and enhance usability (language, display settings).
          </li>
          <li>
            <strong>Performance &amp; analytics cookies</strong> — Aggregate usage metrics to help us improve site
            performance and product features; these cookies are typically anonymized.
          </li>
          <li>
            <strong>Advertising &amp; targeting cookies</strong> — Used to deliver relevant marketing, measure campaign
            effectiveness, and support remarketing; may be set by third parties.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Managing cookies &amp; consent</h2>
        <p>
          You can control cookie settings via the cookie banner and your browser preferences. Necessary cookies are
          always active to ensure the site functions correctly. To disable third-party cookies, adjust your browser
          settings or use the Manage link on the cookie banner. For enterprise deployments we support cookie
          configuration via customer settings and consent tooling.
        </p>

        <h2 className="text-2xl font-semibold">Third-party cookies</h2>
        <p>
          Some cookies are set by third parties (analytics providers, CDN, marketing platforms). These third parties
          may process data under their privacy policies; Enerzyz has contractual relationships with major subprocessors
          to limit use to service delivery and analytics.
        </p>

        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>For cookie or tracking inquiries: privacy@enerzyz.com.</p>
      </section>
    </main>
  );
}
