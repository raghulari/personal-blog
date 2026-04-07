import { BlogCard } from "@/components/blog-card";
import { posts } from "@/lib/site-data";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Archive</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-6xl leading-none">The journal</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted-strong)]">
          Essays, design thinking, project notes, and field logs arranged as a durable personal archive.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {posts.length > 0 ? (
          posts.map((post) => <BlogCard key={post.slug} post={post} />)
        ) : (
          <div className="rounded-[2rem] border border-dashed border-[var(--line)] bg-white p-8 lg:col-span-2">
            <p className="font-[family-name:var(--font-display)] text-3xl">No posts in the archive yet.</p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted-strong)]">
              This archive is ready for your own content. Create posts from the admin area and connect the data layer you want to use.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
