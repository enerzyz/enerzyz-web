import { BookDemoForm } from "@/components/book-demo-form";

export const metadata = {
  title: "Book a Demo | Enerzyz",
  description:
    "Connect with Enerzyz engineers for a tailored walkthrough of the energy asset optimization OS.",
};

export default function BookADemoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_60%)]" aria-hidden />
      <div className="relative mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center px-6 py-20 lg:px-12">
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.05] p-10 shadow-[0_32px_80px_rgba(2,6,23,0.6)] backdrop-blur">
          <BookDemoForm
            heading="Let our engineers chart the path"
            description="Share your details and we’ll assemble a live control room demo that mirrors your asset stack."
            submitLabel="Submit"
            className="space-y-0"
          />
        </div>
        <p className="text-center text-xs uppercase tracking-[0.28em] text-white/40">
          Enerzyz unifies energy asset management to make your facility sentient
        </p>
      </div>
    </main>
  );
}
