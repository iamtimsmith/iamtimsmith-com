import { Metadata } from "next";
import { siteName } from "../../constants";
import { getContentBySlug } from "../getContentBySlug";

export const getMetadata = (slug: string): Metadata => {
  const post = getContentBySlug(slug);
  const title =
    slug === "home"
      ? `${post.frontmatter.title} | ${siteName}`
      : post.frontmatter.title;

  return {
    title,
    description: post.frontmatter.excerpt,
    openGraph: {
      images: [post.frontmatter.featuredImage],
    },
  };
};
