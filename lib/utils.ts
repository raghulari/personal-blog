export function absoluteUrl(path = "/") {
  return `https://srk-blog.example${path}`;
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export function readingTime(minutes: number) {
  return `${minutes} min read`;
}
