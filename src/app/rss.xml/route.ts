import { NextResponse } from "next/server";

import { siteConfig } from "@/config/site";
import { getAllPosts } from "@/features/content";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts();
  const latestPostDate = posts.at(0)?.updatedAt ?? new Date().toISOString();
  const rss = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "<channel>",
    tag("title", siteConfig.name),
    tag("link", siteConfig.url),
    tag("description", "Evan Lee가 프론트엔드, 아키텍처, 프로젝트 경험을 기록하는 기술 블로그입니다."),
    tag("language", "ko-KR"),
    tag("lastBuildDate", toRssDate(latestPostDate)),
    `<atom:link href="${escapeXml(`${siteConfig.url}/rss.xml`)}" rel="self" type="application/rss+xml" />`,
    ...posts.map(toRssItem),
    "</channel>",
    "</rss>",
  ].join("");

  return new NextResponse(rss, {
    headers: {
      "Cache-Control": "public, max-age=0, must-revalidate",
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}

function toRssItem(post: ReturnType<typeof getAllPosts>[number]): string {
  const postUrl = `${siteConfig.url}/blog/${post.slug}`;
  const categories = [post.category.label, ...post.tags.map((tagItem) => tagItem.label)];

  return [
    "<item>",
    tag("title", post.title),
    tag("link", postUrl),
    tag("guid", postUrl),
    tag("description", post.description),
    tag("pubDate", toRssDate(post.date)),
    ...categories.map((category) => tag("category", category)),
    "</item>",
  ].join("");
}

function tag(name: string, value: string): string {
  return `<${name}>${escapeXml(value)}</${name}>`;
}

function toRssDate(value: string): string {
  return new Date(value).toUTCString();
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
