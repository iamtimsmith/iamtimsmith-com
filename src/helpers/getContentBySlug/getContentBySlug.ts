import { readFileSync } from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import path from "path";

export const getContentBySlug = (slug = "") => {
  try {
    const file = readFileSync(path.join(process.cwd(), `content/${slug}.mdx`));
    const frontmatter = matter(file);

    return {
      frontmatter: frontmatter.data,
      content: frontmatter.content,
      slug: slug
        .replace("posts/", "/blog/")
        .replace("pages/", "/")
        .replace("/home", "/"),
    };
  } catch (error) {
    // Log the slug and error if not in test environment
    if (process.env.NODE_ENV !== "test") console.log("ERROR", slug, error);
    // Handle 404 error
    if (error.code === "ENOENT") {
      return notFound();
    }
    throw error;
  }
};
