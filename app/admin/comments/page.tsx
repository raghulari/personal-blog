import { AdminShell } from "@/components/admin-shell";
import { comments } from "@/lib/site-data";

export default function CommentsPage() {
  return (
    <AdminShell title="Comments" description="Moderate incoming discussion and keep the conversation clean and useful.">
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={`${comment.author}-${comment.excerpt}`} className="rounded-[1.75rem] border border-[var(--line)] bg-white p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="text-lg">{comment.author}</div>
                <div className="rounded-full bg-[var(--paper)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  {comment.status}
                </div>
              </div>
              <p className="mt-3 text-[var(--muted-strong)]">{comment.excerpt}</p>
            </div>
          ))
        ) : (
          <div className="rounded-[1.75rem] border border-dashed border-[var(--line)] bg-white p-6">
            <p className="font-[family-name:var(--font-display)] text-3xl">No comments yet.</p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted-strong)]">
              Comment moderation will start working once your posts are live and you add a comment system.
            </p>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
