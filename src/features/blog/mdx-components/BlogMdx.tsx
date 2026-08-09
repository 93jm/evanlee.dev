import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { createBlogMdxComponents } from "./components";

interface BlogMdxProps {
  postSlug: string;
  source: string;
}

export function BlogMdx({ postSlug, source }: BlogMdxProps) {
  return (
    <MDXRemote
      source={source}
      components={createBlogMdxComponents(postSlug)}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypePrettyCode,
              {
                theme: {
                  light: "github-light",
                  dark: "github-dark",
                },
                keepBackground: false,
              },
            ],
          ],
        },
      }}
    />
  );
}
