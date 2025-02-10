import { readFileSync } from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import path from "path";

export const getContentBySlug = (slug = "") => {
  console.log("GET CONTENT BY SLUG", slug);
  if (slug.includes(".ico.mdx")) return;

  try {
    if (slug.includes("home")) {
      console.log("GET CONTENT BY SLUG", "START TRY", path.join(process.cwd()));
    }
    const file = readFileSync(path.join(process.cwd(), `content/${slug}.mdx`));
    const frontmatter = matter(file);

    return {
      frontmatter: frontmatter.data,
      content: frontmatter.content,
      slug: slug.replace("posts/", "/blog/").replace("pages/", "/"),
    };
  } catch (error) {
    console.log("GET CONTENT BY SLUG FILE ERROR", slug, error);
    // return notFound();
    // Handle 404 error
    if (error.code === "ENOENT") {
      return notFound();
    }
    throw error;
  }
};
