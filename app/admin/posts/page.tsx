import Link from "next/link";
import { AdminShell } from "@/components/admin-shell";
import { posts } from "@/lib/site-data";
import { formatDate } from "@/lib/utils";

export default function AdminPostsPage() {
  return (
    <AdminShell title="Posts" description="Browse published work, review drafts, and open the editing interface for each article.">
      <div className="flex justify-end">
        <Link href="/admin/posts/new" className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm text-white">
          New post
        </Link>
      </div>
      <div className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white">
        {posts.length > 0 ? (
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--paper)] text-[var(--muted)]">
              <tr>
                <th className="px-5 py-4 font-medium">Title</th>
                <th className="px-5 py-4 font-medium">Category</th>
                <th className="px-5 py-4 font-medium">Published</th>
                <th className="px-5 py-4 font-medium">Status</th>
                <th className="px-5 py-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={post.slug} className={index < posts.length - 1 ? "border-t border-[var(--line)]" : ""}>
                  <td className="px-5 py-4">{post.title}</td>
                  <td className="px-5 py-4">{post.category}</td>
                  <td className="px-5 py-4">{formatDate(post.publishedAt)}</td>
                  <td className="px-5 py-4">{post.featured ? "Featured" : "Published"}</td>
                  <td className="px-5 py-4">
                    <Link href={`/admin/posts/${post.slug}/edit`} className="underline underline-offset-4">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-8">
            <p className="font-[family-name:var(--font-display)] text-3xl">No posts yet.</p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted-strong)]">
              This table will fill with your own posts once you connect the data layer or start saving content.
            </p>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
