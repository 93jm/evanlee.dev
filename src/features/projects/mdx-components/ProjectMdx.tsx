import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { createProjectMdxComponents } from "./components";

interface ProjectMdxProps {
  projectSlug: string;
  source: string;
}

export function ProjectMdx({ projectSlug, source }: ProjectMdxProps) {
  return (
    <MDXRemote
      source={source}
      components={createProjectMdxComponents(projectSlug)}
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
