import Link from "next/link";
import Image from "next/image";
import { BlogListItem } from "@/types/blog";
import { formatDate } from "@/utils/date";
import * as styles from "./BlogCard.css";

interface BlogCardProps {
  blog: BlogListItem;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blogs/${blog.slug}`} className={styles.cardContainer}>
      <div className={styles.thumbnailWrapper}>
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          fill
          className={styles.thumbnail}
          sizes="(max-width: 1199px) 100vw, (max-width: 1600px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{blog.title}</h3>
        <p className={styles.cardDescription}>{blog.description}</p>
        <div className={styles.cardFooter}>
          <p className={styles.cardDate}>{formatDate(blog.date)}</p>
          <div className={styles.keywordsContainer}>
            <span className={styles.keywordBadge}>#{blog.category}</span>
            {blog.tags?.map((tag) => (
              <span key={tag} className={styles.keywordBadge}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
