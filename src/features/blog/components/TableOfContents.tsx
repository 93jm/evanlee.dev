import type { TableOfContentsItem } from "../utils/headings";
import * as css from "../styles/blog.css";

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav className={css.toc} aria-label="글 목차">
      <h2>Contents</h2>
      <ol>
        {items.map((item) => (
          <li key={item.id} className={item.depth === 3 ? css.tocDepthThree : undefined}>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
