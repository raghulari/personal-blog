import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin-shell";
import { getPost } from "@/lib/site-data";

export default async function EditPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <AdminShell title="Edit post" description="Refine editorial metadata, body copy, and publication controls.">
      <div className="rounded-[2rem] border border-[var(--line)] bg-white p-6">
        <input className="w-full rounded-2xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3" defaultValue={post.title} />
        <textarea className="mt-4 min-h-32 w-full rounded-[1.5rem] border border-[var(--line)] bg-[var(--paper)] px-4 py-3" defaultValue={post.excerpt} />
        <textarea
          className="mt-4 min-h-96 w-full rounded-[1.5rem] border border-[var(--line)] bg-[var(--paper)] px-4 py-3"
          defaultValue={post.sections.map((section) => `${section.heading}\n\n${section.body.join("\n\n")}`).join("\n\n")}
        />
        <div className="mt-4 rounded-[1.75rem] border border-[var(--line)] bg-[var(--paper)] p-5">
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Link section</div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <input
              className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3"
              defaultValue="Reference link"
            />
            <input
              className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3"
              defaultValue={`https://atelier-journal.example/blog/${post.slug}`}
            />
          </div>
          <textarea
            className="mt-4 min-h-28 w-full rounded-[1.5rem] border border-[var(--line)] bg-white px-4 py-3"
            defaultValue="Use this section for references, source material, or related reading attached to the post."
          />
        </div>
        <div className="mt-4 flex gap-3">
          <button className="rounded-full bg-[var(--accent)] px-5 py-3 text-white">Update post</button>
          <button className="rounded-full border border-[var(--ink)] px-5 py-3">Unpublish</button>
        </div>
      </div>
    </AdminShell>
  );
}
