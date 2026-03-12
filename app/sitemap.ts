import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://euroworkmatch.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://euroworkmatch.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://euroworkmatch.com/terms",
      lastModified: new Date("2026-03-09"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://euroworkmatch.com/privacy",
      lastModified: new Date("2026-03-09"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
