import { MetadataRoute } from "next";

const MAIN_URL = "https://evanlee-dev.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects", "/resume"].map((route) => ({
    url: `${MAIN_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return routes;
}
