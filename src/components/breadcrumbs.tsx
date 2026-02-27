import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-6xl px-6 pt-24 lg:px-8 lg:pt-28"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-white/40">
        <li>
          <Link href="/" className="transition hover:text-white/70">
            Home
          </Link>
        </li>
        {items.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span aria-hidden>/</span>
            {crumb.href ? (
              <Link href={crumb.href} className="transition hover:text-white/70">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-white/60">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
