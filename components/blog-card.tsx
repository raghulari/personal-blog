import Link from "next/link";
import type { Post } from "@/lib/site-data";
import { formatDate, readingTime } from "@/lib/utils";

export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="group rounded-[2rem] border border-[var(--line)] bg-white p-6 shadow-[0_16px_50px_rgba(17,17,17,0.05)] transition hover:-translate-y-1">
      <div className="rounded-[1.5rem] bg-[var(--accent-soft)] p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">{post.cover}</p>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
        <span>{post.category}</span>
        <span>{formatDate(post.publishedAt)}</span>
        <span>{readingTime(post.readMinutes)}</span>
      </div>
      <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-tight">
        <Link href={`/blog/${post.slug}`} className="group-hover:underline">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 text-base leading-7 text-[var(--muted-strong)]">{post.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${tag.toLowerCase()}`}
            className="rounded-full bg-[var(--sand)] px-3 py-1 text-sm text-[var(--muted-strong)]"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </article>
  );
}
