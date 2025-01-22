import { readFileSync } from "fs";
import matter from "gray-matter";

export const getContentBySlug = (slug: string) => {
  const file = readFileSync(`src/pages/${slug}.mdx`);
  const frontmatter = matter(file);

  return {
    frontmatter: frontmatter.data,
    content: frontmatter.content,
    slug,
  };
};
