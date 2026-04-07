import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog-card";
import { getPostsByCategory } from "@/lib/site-data";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryPosts = getPostsByCategory(slug);

  if (categoryPosts.length === 0) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Category</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-6xl">{categoryPosts[0].category}</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {categoryPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
