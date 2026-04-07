import Link from "next/link";
import { site } from "@/lib/site-data";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/admin", label: "Dashboard" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <header className="border-b border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
          <Link href="/" className="max-w-xs">
            <div className="font-[family-name:var(--font-display)] text-2xl tracking-tight">{site.name}</div>
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">{site.tagline}</div>
          </Link>
          <nav className="flex flex-wrap items-center gap-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-transparent px-4 py-2 transition hover:border-[var(--line)] hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-[var(--line)] bg-white/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.3fr_0.8fr_0.8fr]">
          <div>
            <p className="font-[family-name:var(--font-display)] text-3xl leading-tight">
              Essays, field notes, and thoughtful internet construction.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Explore</p>
            <div className="mt-3 space-y-2 text-sm">
              <Link href="/blog" className="block hover:underline">
                All posts
              </Link>
              <Link href="/about" className="block hover:underline">
                About the author
              </Link>
              <Link href="/admin" className="block hover:underline">
                Admin dashboard
              </Link>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Contact</p>
            <div className="mt-3 space-y-2 text-sm">
              <p>{site.email}</p>
              <p>{site.location}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
