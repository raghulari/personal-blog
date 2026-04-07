import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/site-data";
import { absoluteUrl, formatDate, readingTime } from "@/lib/utils";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.seoDescription,
    alternates: { canonical: absoluteUrl(`/blog/${post.slug}`) },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl px-6 py-10">
      <div className="rounded-[2.5rem] border border-[var(--line)] bg-white p-8 shadow-[0_20px_80px_rgba(24,20,18,0.05)]">
        <div className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
          <Link href={`/categories/${post.category.toLowerCase()}`} className="hover:underline">
            {post.category}
          </Link>
          <span className="mx-3">/</span>
          <span>{formatDate(post.publishedAt)}</span>
          <span className="mx-3">/</span>
          <span>{readingTime(post.readMinutes)}</span>
        </div>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-6xl leading-none">{post.title}</h1>
        <p className="mt-5 max-w-3xl text-xl leading-9 text-[var(--muted-strong)]">{post.excerpt}</p>
        <figure className="mt-8 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--paper)]">
          <Image
            src={post.coverImage.src}
            alt={post.coverImage.alt}
            width={1600}
            height={900}
            className="h-auto w-full"
            priority
          />
          <figcaption className="border-t border-[var(--line)] px-6 py-4 text-sm leading-6 text-[var(--muted)]">
            {post.coverImage.caption}
          </figcaption>
        </figure>
        <div className="mt-10 space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-[family-name:var(--font-display)] text-4xl">{section.heading}</h2>
              <div className="mt-4 space-y-5 text-lg leading-8 text-[var(--muted-strong)]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <section className="mt-10 rounded-[2rem] bg-[var(--paper)] p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Related links</p>
          <div className="mt-5 grid gap-4">
            {post.links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-[var(--line)] bg-white p-5 transition hover:-translate-y-0.5"
              >
                <div className="text-lg">{item.title}</div>
                <div className="mt-2 break-all text-sm text-[var(--accent)]">{item.href}</div>
                <p className="mt-3 text-sm leading-6 text-[var(--muted-strong)]">{item.description}</p>
              </a>
            ))}
          </div>
        </section>
        <div className="mt-10 flex flex-wrap gap-3">
          {post.tags.map((tag) => (
            <Link key={tag} href={`/tags/${tag.toLowerCase()}`} className="rounded-full bg-[var(--sand)] px-4 py-2 text-sm">
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
