import { getAllBlogs, getAllCategoriesWithCount } from "@/utils/mdx";
import BlogList from "./_component/BlogList";

export default function BlogsPage() {
  const blogs = getAllBlogs();
  const categories = getAllCategoriesWithCount();

  return <BlogList blogs={blogs} categories={categories} />;
}
