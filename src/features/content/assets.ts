import path from "path";
import fs from "fs";

export type ContentAssetType = "blog" | "project";

export interface ContentAssetInput {
  src: string;
  alt: string;
}

export interface ContentAsset extends ContentAssetInput {
  contentPath: string;
  sourcePath: string;
}

interface ResolveContentAssetParams {
  type: ContentAssetType;
  slug: string;
  asset: ContentAssetInput;
}

const CONTENT_ROOT = path.join(process.cwd(), "content");

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
    sourcePath: path.join(process.cwd(), contentPath),
  };
}

export function getContentAssetPath(
  type: ContentAssetType,
  slug: string,
  assetSrc: string,
): string {
  const contentDirectory =
    type === "blog"
      ? path.join("content", "blog", "posts", slug)
      : path.join("content", "projects", slug);

  return path.join(contentDirectory, assetSrc).replaceAll(path.sep, "/");
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
  if (path.isAbsolute(value) || value.startsWith("http://") || value.startsWith("https://")) {
    throw new Error(`Invalid ${fieldName}: expected a relative content asset path.`);
  }

  const normalizedPath = path.normalize(value);

  if (normalizedPath.startsWith("..")) {
    throw new Error(`Invalid ${fieldName}: parent directory traversal is not allowed.`);
  }
}
