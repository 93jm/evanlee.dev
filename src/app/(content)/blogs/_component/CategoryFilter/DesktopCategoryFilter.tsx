"use client";

import * as styles from "./CategoryFilter.css";

interface DesktopCategoryFilterProps {
  categories: { category: string; count: number }[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export default function DesktopCategoryFilter({
  categories,
  selectedCategory,
  onCategorySelect,
}: DesktopCategoryFilterProps) {
  const totalCount = categories.reduce((sum, c) => sum + c.count, 0);

  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.filterTitle}>Categories</h3>
      <div className={styles.categoryList}>
        {/* ALL 버튼 */}
        <button
          onClick={() => onCategorySelect(null)}
          className={`${styles.categoryChip} ${
            !selectedCategory ? styles.categoryChipActive : ""
          }`}
        >
          <span
            className={`${styles.categoryName} ${
              !selectedCategory ? styles.categoryColorActive : ""
            }`}
          >
            ALL
          </span>
          <span
            className={`${styles.categoryCount} ${
              !selectedCategory ? styles.categoryColorActive : ""
            } ${!selectedCategory ? styles.categoryBgColorActive : ""} `}
          >
            {totalCount}
          </span>
        </button>

        {/* 카테고리 칩들 */}
        {categories.map(({ category, count }) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => onCategorySelect(category)}
              className={`${styles.categoryChip} ${
                isActive ? styles.categoryChipActive : ""
              }`}
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
