import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">404</p>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl">Page not found</h1>
      <p className="mt-4 text-lg text-[var(--muted-strong)]">The route exists in neither the archive nor the admin system.</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-[var(--ink)] px-6 py-3 text-white">
        Return home
      </Link>
    </div>
  );
}
