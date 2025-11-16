import Image from "next/image";

export function Affiliations() {
  const logos: { src: string; alt: string }[] = [
    { src: "/logos/stanford.svg", alt: "Stanford University" },
    { src: "/logos/nvidia.svg", alt: "NVIDIA" },
    { src: "/logos/world-bank-group.svg", alt: "World Bank Group" },
    { src: "/logos/ashrae.svg", alt: "ASHRAE" },
    { src: "/logos/antler.svg", alt: "Antler" },
  ];

  return (
    <section className="mx-auto mt-16 max-w-6xl px-6 text-white/90 lg:px-8">
      <h2 className="mb-4 text-center text-2xl font-semibold text-white">Collaborating with</h2>
      <p className="mx-auto mb-6 max-w-2xl text-center text-sm text-white/60">
        We are collaborating with leading academic institutions, AI technology leaders, sustainability enablers, industry associations and most importantly energy asset manufacturers to accelerate
        secure, trustworthy energy asset lifecycle innovation.
      </p>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-5 items-center justify-items-center">
        {logos.map((logo) => (
          <div key={logo.src} className="flex items-center justify-center p-2">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={320}
              height={96}
              className="h-24 w-auto object-contain opacity-90"
              priority={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Affiliations;
