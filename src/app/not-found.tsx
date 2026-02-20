import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Enerzyz",
  description: "The page you're looking for doesn't exist. Head back to the Enerzyz homepage.",
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_30%,rgba(56,189,248,0.12),transparent_60%)]" aria-hidden />
      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-300/80">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base text-white/60">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-400"
        >
          Back to Home
        </Link>
        <Link
          href="/book-a-demo"
          className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40 hover:text-white"
        >
          Book a Demo
        </Link>
      </div>
    </main>
  );
}
