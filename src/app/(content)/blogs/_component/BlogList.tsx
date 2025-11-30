"use client";

import { useState, useMemo } from "react";
import { BlogListItem } from "@/types/blog";
import BlogCard from "./BlogCard";
import * as styles from "./BlogList.css";
import DesktopCategoryFilter from "./CategoryFilter/DesktopCategoryFilter";
import MobileCategoryFilter from "./CategoryFilter/MobileCategoryFilter";

interface BlogListProps {
  blogs: BlogListItem[];
  categories: { category: string; count: number }[];
}

export default function BlogList({ blogs, categories }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 선택된 카테고리로 필터링
  const filteredBlogs = useMemo(() => {
    if (!selectedCategory) {
      return blogs;
    }

    return blogs.filter((blog) => blog.category === selectedCategory);
  }, [selectedCategory, blogs]);

  return (
    <div className={styles.blogsContainer}>
      <div className={styles.blogsLayout}>
        {/* 모바일용 가로 스크롤 필터 */}
        <MobileCategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        {/* 메인 컨텐츠 영역 */}
        <div className={styles.blogsMainContent}>
          {/* 블로그 그리드 */}
          {filteredBlogs.length === 0 ? (
            <div className={styles.emptyState}>
              <p>
                {selectedCategory
                  ? `"${selectedCategory}" 카테고리에 해당하는 글이 없습니다.`
                  : "아직 작성된 블로그 포스트가 없습니다."}
              </p>
            </div>
          ) : (
            <div className={styles.blogsGrid}>
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>
          )}
        </div>
        {/* 데스크톱용 사이드바 (우측) */}
        <DesktopCategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
      </div>
    </div>
  );
}
