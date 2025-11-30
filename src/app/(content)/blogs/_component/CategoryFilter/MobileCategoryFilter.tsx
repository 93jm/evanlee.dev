"use client";

import { useRef, useState, MouseEvent } from "react";
import * as styles from "./CategoryFilter.css";

interface MobileCategoryFilterProps {
  categories: { category: string; count: number }[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export default function MobileCategoryFilter({
  categories,
  selectedCategory,
  onCategorySelect,
}: MobileCategoryFilterProps) {
  const totalCount = categories.reduce((sum, c) => sum + c.count, 0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조절 (2배)
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  };

  return (
    <div className={styles.filterContainerMobile}>
      <div
        ref={scrollRef}
        className={styles.mobileCategoryScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        style={{ cursor: "grab" }}
      >
        {/* 전체 보기 버튼 */}
        <button
          onClick={() => onCategorySelect(null)}
          className={`${styles.mobileCategoryChip} ${
            styles.mobileCategoryChipFirst
          } ${!selectedCategory ? styles.categoryChipActive : ""}`}
        >
          <span
            className={`${styles.categoryName} ${
              !selectedCategory ? styles.categoryColorActive : ""
            }`}
          >
            전체
          </span>
          <span
            className={`${styles.categoryCount} ${
              !selectedCategory ? styles.categoryColorActive : ""
            } ${!selectedCategory ? styles.categoryBgColorActive : ""}
                `}
          >
            {totalCount}
          </span>
        </button>

        {/* 카테고리 칩들 */}
        {categories.map(({ category, count }, index) => {
          const isActive = selectedCategory === category;
          const isLast = index === categories.length - 1;
          return (
            <button
              key={category}
              onClick={() => onCategorySelect(category)}
              className={`${styles.mobileCategoryChip} ${
                isLast ? styles.mobileCategoryChipLast : ""
              } ${isActive ? styles.categoryChipActive : ""}`}
            >
              <span
                className={`${styles.categoryName} ${
                  isActive ? styles.categoryColorActive : ""
                }`}
              >
                {category}
              </span>
              <span
                className={`${styles.categoryCount} ${
                  isActive ? styles.categoryColorActive : ""
                } ${isActive ? styles.categoryBgColorActive : ""}
                `}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
