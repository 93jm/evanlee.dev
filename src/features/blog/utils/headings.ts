import GithubSlugger from "github-slugger";

export interface TableOfContentsItem {
  id: string;
  text: string;
  depth: 2 | 3;
}

const HEADING_PATTERN = /^(#{2,3})\s+(.+)$/gm;

export function extractTableOfContents(markdown: string): TableOfContentsItem[] {
  const slugger = new GithubSlugger();
  const markdownWithoutCode = removeFencedCodeBlocks(markdown);
  const headings: TableOfContentsItem[] = [];

  for (const match of markdownWithoutCode.matchAll(HEADING_PATTERN)) {
    const marker = match[1];
    const rawText = match[2];

    if (!marker || !rawText) {
      continue;
    }

    const text = stripMarkdownInlineSyntax(rawText);

    if (text.length === 0) {
      continue;
    }

    headings.push({
      id: slugger.slug(text),
      text,
      depth: marker.length as 2 | 3,
    });
  }

  return headings;
}

function removeFencedCodeBlocks(markdown: string): string {
  return markdown.replace(/```[\s\S]*?```/g, "");
}

function stripMarkdownInlineSyntax(value: string): string {
  return value
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_~]/g, "")
    .replace(/\s+#*$/g, "")
    .trim();
}
