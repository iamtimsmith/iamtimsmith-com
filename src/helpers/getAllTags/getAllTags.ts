import fs from "fs";
import path from "path";
import { getContentBySlug } from "../getContentBySlug";
import { getLatestPosts } from "../getLatestPosts";

export const getAllTags = () => {
  // Determine the environment
  const isDev = process.env.NODE_ENV === "development";
  // Collect all of the MDX files in the pages directory, using fs.readdirSync.
  const files = fs.readdirSync(path.join(process.cwd(), "content/tags"));
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));
  const posts = getLatestPosts(-1);

  // Load the frontmatter and transform content for each post.
  const tags = mdxFiles.map((file) => {
    // Get the tag from the slug
    const tag = getContentBySlug(`tags/${file.replace(".mdx", "")}`);
    // Get all of the posts that have the tag in their frontmatter.
    const postsWithTag =
      posts.filter(({ frontmatter }) =>
        frontmatter.tags?.includes(tag.frontmatter.title.toLowerCase())
      ) || [];

    return {
      title: tag.frontmatter.title,
      description: tag.frontmatter.excerpt,
      slug: tag.slug,
      count: postsWithTag.length,
    };
  });

  // Sort all of the blog posts by publishedOn date.
  tags.sort((a, b) => (a.title > b.title ? 1 : -1));

  return tags;
};
