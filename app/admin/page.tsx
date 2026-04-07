import Link from "next/link";
import { AdminShell } from "@/components/admin-shell";
import { dashboardStats, posts } from "@/lib/site-data";

export default function AdminPage() {
  return (
    <AdminShell title="Overview" description="Track publishing momentum, check editorial queues, and jump into the next task without hunting through tools.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((item) => (
          <div key={item.label} className="rounded-[1.75rem] border border-[var(--line)] bg-white p-5">
            <p className="text-sm text-[var(--muted)]">{item.label}</p>
            <div className="mt-3 font-[family-name:var(--font-display)] text-4xl">{item.value}</div>
            <div className="mt-2 text-sm text-[var(--accent)]">{item.delta}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-[var(--line)] bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-[family-name:var(--font-display)] text-3xl">Recent posts</h2>
            <Link href="/admin/posts" className="text-sm underline underline-offset-4">
              Manage posts
            </Link>
          </div>
          {posts.length > 0 ? (
            <div className="mt-5 space-y-4">
              {posts.slice(0, 3).map((post) => (
                <div key={post.slug} className="rounded-[1.5rem] bg-[var(--paper)] p-4">
                  <div className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">{post.category}</div>
                  <div className="mt-2 text-xl">{post.title}</div>
                  <div className="mt-2 text-sm text-[var(--muted-strong)]">{post.excerpt}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-[1.5rem] border border-dashed border-[var(--line)] bg-[var(--paper)] p-5 text-sm leading-7 text-[var(--muted-strong)]">
              No posts yet. Start from the posts screen and add your first article.
            </div>
          )}
        </div>
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--ink)] p-6 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Today&apos;s focus</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl">Set up your workflow, then publish your first post.</h2>
          <div className="mt-6 space-y-3 text-sm leading-7 text-white/75">
            <p>Create a first article structure.</p>
            <p>Add your real links and metadata.</p>
            <p>Connect a persistent data source when ready.</p>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
