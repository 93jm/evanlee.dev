import path from "path";
import fs from "fs";

export type ContentAssetType = "blog" | "project";

export interface ContentAssetInput {
  src: string;
  alt: string;
}

export interface ContentAsset extends ContentAssetInput {
  contentPath: string;
  publicUrl: string;
  sourcePath: string;
}

interface ResolveContentAssetParams {
  type: ContentAssetType;
  slug: string;
  asset: ContentAssetInput;
}

const CONTENT_ROOT = path.join(process.cwd(), "content");
const CONTENT_ASSET_ROUTE_PREFIX = "/blog/assets";

export function resolveContentAsset({
  type,
  slug,
  asset,
}: ResolveContentAssetParams): ContentAsset {
  assertRelativeContentAssetPath(asset.src, `${type}(${slug}).cover.src`);

  const contentPath = getContentAssetPath(type, slug, asset.src);

  return {
    ...asset,
    contentPath,
    publicUrl: getContentAssetPublicUrl(type, slug, asset.src),
    sourcePath: path.join(process.cwd(), contentPath),
  };
}

export function getContentAssetPath(
  type: ContentAssetType,
  slug: string,
  assetSrc: string,
): string {
  const normalizedAssetPath = normalizeRelativeContentAssetPath(assetSrc);
  const contentDirectory =
    type === "blog"
      ? path.join("content", "blog", "posts", slug)
      : path.join("content", "projects", slug);

  return path.join(contentDirectory, normalizedAssetPath).replaceAll(path.sep, "/");
}

export function getContentAssetPublicUrl(
  type: ContentAssetType,
  slug: string,
  assetSrc: string,
): string {
  const collection = type === "blog" ? "posts" : "projects";
  const encodedAssetPath = normalizeRelativeContentAssetPath(assetSrc)
    .split("/")
    .map(encodeURIComponent)
    .join("/");

  return `${CONTENT_ASSET_ROUTE_PREFIX}/${collection}/${encodeURIComponent(slug)}/${encodedAssetPath}`;
}

export function assertContentAssetExists(asset: ContentAsset): void {
  if (!asset.sourcePath.startsWith(CONTENT_ROOT)) {
    throw new Error(`Invalid content asset path outside content root: ${asset.contentPath}`);
  }

  if (!fs.existsSync(asset.sourcePath)) {
    throw new Error(`Missing content asset: ${asset.contentPath}`);
  }
}

function assertRelativeContentAssetPath(value: string, fieldName: string): void {
  normalizeRelativeContentAssetPath(value, fieldName);
}

function normalizeRelativeContentAssetPath(
  value: string,
  fieldName = "content asset path",
): string {
  if (path.isAbsolute(value) || value.startsWith("http://") || value.startsWith("https://")) {
    throw new Error(`Invalid ${fieldName}: expected a relative content asset path.`);
  }

  const normalizedPath = path.posix.normalize(value.replaceAll("\\", "/"));

  if (normalizedPath === "." || normalizedPath.startsWith("../") || normalizedPath === "..") {
    throw new Error(`Invalid ${fieldName}: parent directory traversal is not allowed.`);
  }

  return normalizedPath.replace(/^\.\//, "");
}
