import { site } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">About</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-6xl leading-none">{site.author}</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted-strong)]">
          Writer, builder, and obsessive editor of digital spaces that should feel calm, useful, and unmistakably human.
        </p>
      </div>
      <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--paper-deep)] p-8">
        <div className="space-y-5 text-lg leading-8 text-[var(--muted-strong)]">
          <p>
            SRK Blog is the personal publishing home for essays on craft, product thinking, writing systems, and the practical details of building a focused online presence.
          </p>
          <p>
            The site is now set up as a clean starting point, ready for the real posts, links, and metadata you choose to create.
          </p>
          <p>
            If you want the second version of this project to be fully production-ready, the next step is replacing the mocked data layer with PostgreSQL, Prisma, and a real auth provider.
          </p>
        </div>
      </div>
    </div>
  );
}
