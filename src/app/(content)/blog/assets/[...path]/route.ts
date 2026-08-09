import fs from "fs/promises";
import path from "path";

import { NextResponse } from "next/server";

import { assertContentSlug } from "@/features/content";

type AssetCollection = "posts" | "projects";

interface BlogAssetRouteProps {
  params: Promise<{
    path: string[];
  }>;
}

const CONTENT_ROOT = path.join(process.cwd(), "content");
const IMAGE_CONTENT_TYPES = new Map([
  [".avif", "image/avif"],
  [".gif", "image/gif"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
]);

export async function GET(_request: Request, { params }: BlogAssetRouteProps) {
  const { path: routePath } = await params;
  const resolvedAsset = resolveContentAssetRoute(routePath);

  if (!resolvedAsset) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    const file = await fs.readFile(resolvedAsset.sourcePath);

    return new NextResponse(file, {
      headers: {
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        "Content-Type": resolvedAsset.contentType,
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}

function resolveContentAssetRoute(routePath: string[] | undefined) {
  if (!routePath || routePath.length < 3) {
    return null;
  }

  const [collection, slug, ...assetSegments] = routePath;

  if (!isAssetCollection(collection) || !isSafeSlug(slug)) {
    return null;
  }

  if (!assetSegments.every(isSafeAssetSegment)) {
    return null;
  }

  const extension = path.extname(assetSegments.at(-1) ?? "").toLowerCase();
  const contentType = IMAGE_CONTENT_TYPES.get(extension);

  if (!contentType) {
    return null;
  }

  const baseDirectory = getAssetBaseDirectory(collection, slug);
  const sourcePath = path.resolve(baseDirectory, ...assetSegments);

  if (!isInsideDirectory(sourcePath, baseDirectory)) {
    return null;
  }

  return {
    contentType,
    sourcePath,
  };
}

function isAssetCollection(value: string): value is AssetCollection {
  return value === "posts" || value === "projects";
}

function isSafeSlug(value: string): boolean {
  try {
    assertContentSlug(value, "asset slug");
    return true;
  } catch {
    return false;
  }
}

function isSafeAssetSegment(value: string): boolean {
  return (
    value !== "" &&
    value !== "." &&
    value !== ".." &&
    !value.includes("/") &&
    !value.includes("\\")
  );
}

function getAssetBaseDirectory(collection: AssetCollection, slug: string): string {
  if (collection === "posts") {
    return path.join(CONTENT_ROOT, "blog", "posts", slug);
  }

  return path.join(CONTENT_ROOT, "projects", slug);
}

function isInsideDirectory(sourcePath: string, baseDirectory: string): boolean {
  const relativePath = path.relative(baseDirectory, sourcePath);

  return relativePath !== "" && !relativePath.startsWith("..") && !path.isAbsolute(relativePath);
}
