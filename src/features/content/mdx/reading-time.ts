export const ARTICLE_READING_WORDS_PER_MINUTE = 220;

const CJK_CHARACTERS_PER_WORD = 2;
const MINIMUM_READING_TIME_MINUTES = 1;

export function calculateReadingTime(markdown: string): number {
  const plainText = stripMarkdownSyntax(markdown);
  const latinWordCount = plainText.match(/[A-Za-z0-9]+(?:[-'][A-Za-z0-9]+)?/g)?.length ?? 0;
  const cjkCharacterCount = plainText.match(/[\u3131-\uD79D]/g)?.length ?? 0;
  const estimatedWordCount = latinWordCount + cjkCharacterCount / CJK_CHARACTERS_PER_WORD;

  return Math.max(
    MINIMUM_READING_TIME_MINUTES,
    Math.ceil(estimatedWordCount / ARTICLE_READING_WORDS_PER_MINUTE),
  );
}

function stripMarkdownSyntax(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[[^\]]+\]\([^)]+\)/g, " ")
    .replace(/[#>*_\-~|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
