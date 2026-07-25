import type { MetadataRoute } from "next";
import { siteUrl } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-07-25T00:00:00+09:00"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
