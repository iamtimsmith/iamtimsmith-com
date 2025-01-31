import { readFileSync } from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";

export const getContentBySlug = (slug = "") => {
  if (slug.includes(".ico.mdx")) return;

  console.log("GETTING HERE");

  try {
    const file = readFileSync(`content/${slug}.mdx`);
    const frontmatter = matter(file);

    return {
      frontmatter: frontmatter.data,
      content: frontmatter.content,
      slug: slug.replace("posts/", "/blog/"),
    };
  } catch (error) {
    // Handle 404 error
    if (error.code === "ENOENT") {
      return notFound();
    }
    throw error;
  }
};
