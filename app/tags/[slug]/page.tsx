import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog-card";
import { getPostsByTag } from "@/lib/site-data";

export default async function TagPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tagPosts = getPostsByTag(slug);

  if (tagPosts.length === 0) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Tag</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-6xl">#{decodeURIComponent(slug)}</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {tagPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
