import { posts, site } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/utils";

export async function GET() {
  const items = posts
    .map(
      (post) => `
        <item>
          <title>${post.title}</title>
          <link>${absoluteUrl(`/blog/${post.slug}`)}</link>
          <description>${post.excerpt}</description>
          <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
        </item>`,
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${site.name}</title>
        <link>${absoluteUrl()}</link>
        <description>${site.description}</description>
        ${items}
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
