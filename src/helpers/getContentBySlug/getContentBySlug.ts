import { readFileSync } from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";

export const getContentBySlug = (slug = "") => {
  console.log("GET CONTENT BY SLUG", slug);
  if (slug.includes(".ico.mdx")) return;

  try {
    console.log("GET CONTENT BY SLUG", "START TRY");
    const file = readFileSync(`content/${slug}.mdx`);
    console.log("GET CONTENT BY SLUG FILE", file);
    const frontmatter = matter(file);

    return {
      frontmatter: frontmatter.data,
      content: frontmatter.content,
      slug: slug.replace("posts/", "/blog/"),
    };
  } catch (error) {
    console.log("GET CONTENT BY SLUG FILE ERROR", error);
    return notFound();
    // Handle 404 error
    if (error.code === "ENOENT") {
      return notFound();
    }
    throw error;
  }
};
