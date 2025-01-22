import fs from "fs";
import path from "path";
import { postsPerPage } from "../constants";
import { getContentBySlug } from "./getContentBySlug/getContentBySlug";

export const getLatestPosts = async (limit = postsPerPage) => {
  // Collect all of the MDX files in the pages directory, using fs.readdirSync.
  const files = fs.readdirSync(path.join(process.cwd(), "src/pages/blog"));
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  // Load the frontmatter and transform content for each post.
  const posts = mdxFiles.map((file) => {
    // Get the post by from the slug
    const post = getContentBySlug(`blog/${file.replace(".mdx", "")}`);
    // Convert the date to a string
    post.frontmatter.date = post.frontmatter.date.toString();

    return post;
  });

  // Filter out any unpublished posts (ones where isPublished is not set to true).
  const publishedPosts = posts.filter(
    (post) => post.frontmatter.isPublished === true
  );

  // Sort all of the blog posts by publishedOn date.
  publishedPosts.sort((a, b) =>
    a.frontmatter.date > b.frontmatter.date ? -1 : 1
  );
  // Limit the number of posts returned.
  publishedPosts.slice(0, limit - 1);

  //Return the data.
  return publishedPosts;
};
