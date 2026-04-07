import { AdminShell } from "@/components/admin-shell";

export default function NewPostPage() {
  return (
    <AdminShell title="New post" description="Draft a new article with headline, metadata, and structured body content.">
      <div className="rounded-[2rem] border border-[var(--line)] bg-white p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <input className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3" placeholder="Post title" />
          <input className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3" placeholder="Slug" />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <input className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3" placeholder="Category" />
          <input className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3" placeholder="Tags" />
          <select className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3">
            <option>Draft</option>
            <option>Published</option>
            <option>Scheduled</option>
          </select>
        </div>
        <textarea className="mt-4 min-h-40 w-full rounded-[1.5rem] border border-[var(--line)] bg-[var(--paper)] px-4 py-3" placeholder="Excerpt" />
        <textarea className="mt-4 min-h-80 w-full rounded-[1.5rem] border border-[var(--line)] bg-[var(--paper)] px-4 py-3" placeholder="Write the post body here..." />
        <div className="mt-4 rounded-[1.75rem] border border-[var(--line)] bg-[var(--paper)] p-5">
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Link section</div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <input
              className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3"
              placeholder="Link title"
            />
            <input
              className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3"
              placeholder="https://example.com"
            />
          </div>
          <textarea
            className="mt-4 min-h-28 w-full rounded-[1.5rem] border border-[var(--line)] bg-white px-4 py-3"
            placeholder="Why this link matters or how it should appear in the post"
          />
        </div>
        <div className="mt-4 flex gap-3">
          <button className="rounded-full bg-[var(--ink)] px-5 py-3 text-white">Save draft</button>
          <button className="rounded-full border border-[var(--ink)] px-5 py-3">Preview</button>
        </div>
      </div>
    </AdminShell>
  );
}
