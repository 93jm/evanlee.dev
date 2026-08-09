import Image from "next/image";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";

import { getContentAssetPublicUrl } from "@/features/content";

import * as css from "../styles/projects.css";

type HeadingTag = "h1" | "h2" | "h3" | "h4";
type ContentImageProps = Omit<ComponentPropsWithoutRef<"img">, "alt" | "height" | "src" | "width"> & {
  alt?: string;
  projectSlug: string;
  src?: string;
};

type HeadingProps = ComponentPropsWithoutRef<HeadingTag> & {
  level: HeadingTag;
};

const DEFAULT_MDX_IMAGE_WIDTH = 1200;
const DEFAULT_MDX_IMAGE_HEIGHT = 630;

function Heading({ level, id, children, ...props }: HeadingProps) {
  const Component = level;

  return (
    <Component id={id} className={css.articleHeading} {...props}>
      {id ? (
        <a href={`#${id}`} className={css.headingAnchor} aria-label={`${plainText(children)} 섹션`}>
          {children}
        </a>
      ) : (
        children
      )}
    </Component>
  );
}

function ArticleLink({ href = "", children, ...props }: ComponentPropsWithoutRef<"a">) {
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={css.articleLink} {...props}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("http://") || href.startsWith("https://")) {
    return (
      <a href={href} className={css.articleLink} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={css.articleLink} {...props}>
      {children}
    </a>
  );
}

function InlineCode({ children, ...props }: ComponentPropsWithoutRef<"code">) {
  return (
    <code className={css.inlineCode} {...props}>
      {children}
    </code>
  );
}

function ContentImage({ projectSlug, src, alt, ...props }: ContentImageProps) {
  const caption = alt || toDisplayText(src) || "Content image";
  const imageSource = resolveMdxImageSource(projectSlug, src);

  return (
    <figure className={css.articleFigure}>
      <Image
        src={imageSource}
        alt={alt ?? ""}
        className={css.articleImage}
        width={DEFAULT_MDX_IMAGE_WIDTH}
        height={DEFAULT_MDX_IMAGE_HEIGHT}
        sizes="(max-width: 800px) 100vw, 760px"
        unoptimized
        {...props}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function Callout({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className={css.callout}>
      {title && <strong>{title}</strong>}
      <div>{children}</div>
    </aside>
  );
}

function plainText(value: ReactNode): string {
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(plainText).join("");
  }

  return "본문";
}

function toDisplayText(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function resolveMdxImageSource(projectSlug: string, src: unknown): string {
  if (typeof src !== "string") {
    return "";
  }

  if (
    src.startsWith("/") ||
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:")
  ) {
    return src;
  }

  return getContentAssetPublicUrl("project", projectSlug, src);
}

export function createProjectMdxComponents(projectSlug: string): MDXRemoteProps["components"] {
  return {
    h1: (props) => <Heading level="h2" {...props} />,
    h2: (props) => <Heading level="h2" {...props} />,
    h3: (props) => <Heading level="h3" {...props} />,
    h4: (props) => <Heading level="h4" {...props} />,
    p: (props) => <p className={css.articleParagraph} {...props} />,
    a: ArticleLink,
    ul: (props) => <ul className={css.articleList} {...props} />,
    ol: (props) => <ol className={css.articleList} {...props} />,
    li: (props) => <li className={css.articleListItem} {...props} />,
    blockquote: (props) => <blockquote className={css.blockquote} {...props} />,
    code: InlineCode,
    pre: (props) => <pre className={css.codeBlock} {...props} />,
    table: (props) => (
      <div className={css.tableScrollArea}>
        <table className={css.articleTable} {...props} />
      </div>
    ),
    img: (props) => <ContentImage projectSlug={projectSlug} {...props} />,
    Callout,
  };
}
