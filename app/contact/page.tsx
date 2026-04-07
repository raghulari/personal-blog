import { site } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Contact</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-6xl leading-none">Let&apos;s talk</h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted-strong)]">
          Reach out for collaborations, speaking, freelance editorial work, or product writing engagements.
        </p>
      </div>
      <form className="rounded-[2rem] border border-[var(--line)] bg-white p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <input className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3" placeholder="Name" />
          <input className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3" placeholder="Email" />
        </div>
        <input className="mt-4 w-full rounded-2xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3" placeholder="Subject" />
        <textarea
          className="mt-4 min-h-48 w-full rounded-[1.5rem] border border-[var(--line)] bg-[var(--paper)] px-4 py-3"
          placeholder={`Hello ${site.author},`}
        />
        <button className="mt-4 rounded-full bg-[var(--ink)] px-6 py-3 text-white">Send inquiry</button>
      </form>
    </div>
  );
}
