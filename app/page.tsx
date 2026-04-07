import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { posts, site, stats } from "@/lib/site-data";

const featuredPosts = posts.filter((post) => post.featured);

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <section className="grid gap-8 rounded-[2.5rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(232,221,207,0.9))] p-8 shadow-[0_25px_80px_rgba(24,20,18,0.08)] lg:grid-cols-[1.3fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">Personal publishing system</p>
          <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-6xl leading-none md:text-7xl">
            A complete personal blog with editorial depth and a modern admin dashboard.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-strong)]">{site.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="rounded-full border border-[var(--line)] bg-white px-6 py-3 text-sm text-[var(--ink)] transition hover:bg-[var(--paper)]"
            >
              Read the journal
            </Link>
            <Link href="/admin" className="rounded-full border border-[var(--ink)] px-6 py-3 text-sm transition hover:bg-white">
              Open admin dashboard
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="rounded-[2rem] bg-[var(--ink)] p-6 text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Editorial note</p>
            <p className="mt-4 font-[family-name:var(--font-display)] text-3xl">
              A site that feels authored, not assembled.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/72">
              Built for essays, notes, categories, tags, newsletters, and an admin view that actually helps you run the publication.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-[var(--line)] bg-white p-5">
                <div className="font-[family-name:var(--font-display)] text-4xl">{stat.value}</div>
                <div className="mt-2 text-sm text-[var(--muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Featured writing</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl">Recent highlights</h2>
          </div>
          <Link href="/blog" className="text-sm underline underline-offset-4">
            Browse all posts
          </Link>
        </div>
        {featuredPosts.length > 0 ? (
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-[2rem] border border-dashed border-[var(--line)] bg-white/70 p-8">
            <p className="font-[family-name:var(--font-display)] text-3xl">No published posts yet.</p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted-strong)]">
              Use the admin dashboard to create your first post. This section will automatically show featured articles once you add them to your data source.
            </p>
          </div>
        )}
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Newsletter</p>
          <h3 className="mt-3 font-[family-name:var(--font-display)] text-4xl">Field notes for curious builders.</h3>
          <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted-strong)]">
            Weekly essays, references, and behind-the-scenes writing notes delivered in a compact editorial format.
          </p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="min-w-0 flex-1 rounded-full border border-[var(--line)] bg-[var(--paper)] px-5 py-3 outline-none"
            />
            <button className="rounded-full bg-[var(--accent)] px-6 py-3 text-white">Subscribe</button>
          </form>
        </div>
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--paper-deep)] p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">What this includes</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Responsive homepage and blog archive",
              "Single post pages with category and tag discovery",
              "Admin dashboard with posts, media, comments, settings",
              "SEO metadata, sitemap, robots, and RSS feed",
            ].map((item) => (
              <div key={item} className="rounded-[1.5rem] bg-white px-5 py-4 text-sm leading-6">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
