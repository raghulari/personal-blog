import Link from "next/link";

const adminNav = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/posts", label: "Posts" },
  { href: "/admin/media", label: "Media" },
  { href: "/admin/comments", label: "Comments" },
  { href: "/admin/settings", label: "Settings" },
];

export function AdminShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[240px_minmax(0,1fr)]">
      <aside className="rounded-[2rem] border border-[var(--line)] bg-white p-5">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Admin</p>
        <div className="mt-2 font-[family-name:var(--font-display)] text-3xl">Control room</div>
        <nav className="mt-6 space-y-2">
          {adminNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-2xl px-4 py-3 text-sm transition hover:bg-[var(--sand)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <section className="space-y-6">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-5xl leading-none">{title}</h1>
          <p className="mt-3 max-w-2xl text-lg text-[var(--muted-strong)]">{description}</p>
        </div>
        {children}
      </section>
    </div>
  );
}
