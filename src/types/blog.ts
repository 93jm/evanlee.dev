export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string; // YYYY-MM-DD format
  thumbnail: string; // 썸네일 이미지 경로
  category: string; // 카테고리 (폴더명)
  tags?: string[]; // 태그 배열 (선택적)
  author?: string;
  draft?: boolean; // 임시저장 여부
}

export interface BlogPost {
  slug: string; // 파일명에서 추출한 slug
  category: string; // 카테고리 (폴더명에서 자동 추출)
  frontmatter: BlogFrontmatter;
  content: string; // MDX 컨텐츠
  readingTime?: number; // 읽는 시간 (분)
}

export interface BlogListItem {
  slug: string;
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  category: string; // 카테고리
  tags?: string[]; // 태그
  readingTime?: number; // 읽는 시간 (분)
}
