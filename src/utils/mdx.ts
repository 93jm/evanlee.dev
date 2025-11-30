import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, BlogFrontmatter, BlogListItem } from "@/types/blog";

const BLOG_DIRECTORY = path.join(process.cwd(), "content/blogs");

/**
 * 모든 카테고리 목록을 가져옵니다
 */
export function getAllCategories(): string[] {
  try {
    const items = fs.readdirSync(BLOG_DIRECTORY);
    return items.filter((item) => {
      // _ 로 시작하는 폴더는 제외 (예: _templates, _example)
      if (item.startsWith("_")) {
        return false;
      }
      const itemPath = path.join(BLOG_DIRECTORY, item);
      return fs.statSync(itemPath).isDirectory();
    });
  } catch (error) {
    console.error("Error reading categories:", error);
    return [];
  }
}

/**
 * 모든 블로그 포스트의 {category, slug} 목록을 가져옵니다
 */
export function getAllBlogSlugs(): Array<{ category: string; slug: string }> {
  try {
    const categories = getAllCategories();
    const allPosts: Array<{ category: string; slug: string }> = [];

    categories.forEach((category) => {
      const categoryPath = path.join(BLOG_DIRECTORY, category);
      const files = fs.readdirSync(categoryPath);

      files
        .filter((file) => file.endsWith(".mdx"))
        .forEach((file) => {
          allPosts.push({
            category,
            slug: file.replace(/\.mdx$/, ""),
          });
        });
    });

    return allPosts;
  } catch (error) {
    console.error("Error reading blog directory:", error);
    return [];
  }
}

/**
 * slug로 블로그 포스트를 가져옵니다 (모든 카테고리에서 검색)
 */
export function getBlogBySlug(slug: string): BlogPost | null {
  try {
    const categories = getAllCategories();

    for (const category of categories) {
      const fullPath = path.join(BLOG_DIRECTORY, category, `${slug}.mdx`);

      if (fs.existsSync(fullPath)) {
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        const frontmatter = data as BlogFrontmatter;

        // 읽는 시간 계산 (대략 200 단어/분)
        const wordCount = content.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200);

        return {
          slug,
          category,
          frontmatter,
          content,
          readingTime,
        };
      }
    }

    return null;
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

/**
 * 모든 블로그 포스트 목록을 가져옵니다 (최신순 정렬)
 */
export function getAllBlogs(): BlogListItem[] {
  const slugsWithCategories = getAllBlogSlugs();
  const blogs = slugsWithCategories
    .map(({ category, slug }) => {
      const post = getBlogBySlug(slug);
      if (!post || post.frontmatter.draft) {
        return null;
      }

      const blogItem: BlogListItem = {
        slug: post.slug,
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        date: post.frontmatter.date,
        thumbnail: post.frontmatter.thumbnail,
        category: post.category,
        readingTime: post.readingTime,
      };

      // tags가 있는 경우에만 추가
      if (post.frontmatter.tags) {
        blogItem.tags = post.frontmatter.tags;
      }

      return blogItem;
    })
    .filter((post): post is BlogListItem => post !== null)
    .sort((a, b) => {
      // 날짜 최신순 정렬
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return blogs;
}

/**
 * 특정 카테고리로 블로그 포스트 필터링
 */
export function getBlogsByCategory(category: string): BlogListItem[] {
  const allBlogs = getAllBlogs();
  return allBlogs.filter((blog) => blog.category === category);
}

/**
 * 모든 카테고리와 각 카테고리에 속한 글의 개수를 반환합니다
 */
export function getAllCategoriesWithCount(): {
  category: string;
  count: number;
}[] {
  const allBlogs = getAllBlogs();
  const categoryMap = new Map<string, number>();

  allBlogs.forEach((blog) => {
    const count = categoryMap.get(blog.category) || 0;
    categoryMap.set(blog.category, count + 1);
  });

  // 카테고리 순서 정의
  const categoryOrder = [
    "프론트엔드",
    "백엔드",
    "모바일",
    "알고리즘",
    "북리뷰",
    "돌아보기",
  ];

  // 정의된 순서대로 정렬
  return categoryOrder
    .filter((category) => categoryMap.has(category))
    .map((category) => ({
      category,
      count: categoryMap.get(category) || 0,
    }));
}

/**
 * 날짜를 읽기 쉬운 형식으로 변환 (YYYY-MM-DD -> YYYY년 MM월 DD일)
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}년 ${month}월 ${day}일`;
}
