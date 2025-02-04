import fs from "fs";
import path from "path";
import { postsPerPage } from "../../constants";
import { getContentBySlug } from "../getContentBySlug/getContentBySlug";

export const getLatestPosts = (
  limit = postsPerPage,
  filter?: { key: string; value: string }
) => {
  // Determine the environment
  const isDev = process.env.NODE_ENV === "development";
  // Collect all of the MDX files in the pages directory, using fs.readdirSync.
  const files = fs.readdirSync(path.join(process.cwd(), "content/posts"));
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  // Load the frontmatter and transform content for each post.
  const posts = mdxFiles.map((file) => {
    // Get the post by from the slug
    const post = getContentBySlug(`posts/${file.replace(".mdx", "")}`);
    // Convert the date to a string
    post.frontmatter.date = new Date(
      post.frontmatter.date
    ).toLocaleDateString();

    return post;
  });

  // Filter out any unpublished posts (ones where isPublished is not set to true).
  const publishedPosts = !isDev
    ? posts.filter((post) => post.frontmatter.published === true)
    : posts;

  // Sort all of the blog posts by publishedOn date.
  publishedPosts.sort((a, b) =>
    new Date(a.frontmatter.date) > new Date(b.frontmatter.date) ? -1 : 1
  );
  // Filter the posts by the filter object.
  if (filter) {
    console.log("FILTER", filter);
    return publishedPosts.filter((post) => {
      if (!post.frontmatter[filter.key]) return false;
      if (Array.isArray(post.frontmatter[filter.key])) {
        return post.frontmatter[filter.key].includes(filter.value);
      }
    });
  }

  // Limit the number of posts and return them.
  if (limit < 0) return publishedPosts;
  return publishedPosts.slice(0, limit);
};
