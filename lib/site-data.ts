export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readMinutes: number;
  featured: boolean;
  cover: string;
  coverImage: {
    src: string;
    alt: string;
    caption: string;
  };
  seoDescription: string;
  sections: {
    heading: string;
    body: string[];
  }[];
  links: {
    title: string;
    href: string;
    description: string;
  }[];
};

export const site = {
  name: "SRK Blog",
  tagline: "A sharp personal blog for essays, experiments, and field notes.",
  description:
    "SRK Blog is a modern personal publishing site with long-form writing, curated notes, and a built-in admin workflow.",
  author: "S. R. Kumar",
  email: "raghularivalagan.cs@gmail.com",
  location: "Bengaluru, India",
};

export const posts: Post[] = [];

export const categories = [...new Set(posts.map((post) => post.category))];
export const tags = [...new Set(posts.flatMap((post) => post.tags))];

export const stats = [
  { label: "Published posts", value: "0" },
  { label: "Newsletter readers", value: "0" },
  { label: "Monthly visits", value: "0" },
  { label: "Avg. read depth", value: "0%" },
];

export const dashboardStats = [
  { label: "Views this month", value: "0", delta: "No traffic yet" },
  { label: "Subscribers", value: "0", delta: "No subscribers yet" },
  { label: "Drafts in review", value: "0", delta: "Start your first draft" },
  { label: "Comment queue", value: "0", delta: "No comments yet" },
];

export const mediaItems: { name: string; type: string; size: string; usedIn: string }[] = [];

export const comments: { author: string; excerpt: string; status: string }[] = [];

export const settings = [
  { label: "Site title", value: site.name },
  { label: "Primary domain", value: "srk-blog.example" },
  { label: "Newsletter sender", value: site.email },
  { label: "Timezone", value: "Asia/Kolkata" },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getPostsByCategory(slug: string) {
  return posts.filter((post) => post.category.toLowerCase() === decodeURIComponent(slug).toLowerCase());
}

export function getPostsByTag(slug: string) {
  return posts.filter((post) =>
    post.tags.some((tag) => tag.toLowerCase() === decodeURIComponent(slug).toLowerCase()),
  );
}
