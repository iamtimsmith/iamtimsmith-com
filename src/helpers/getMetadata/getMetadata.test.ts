import { siteName } from "../../constants";
import { getContentBySlug } from "../getContentBySlug";
import { getMetadata } from "./getMetadata";

describe("getMetadata()", () => {
  it("should return the correct metadata for the homepage", () => {
    const page = getContentBySlug("home");
    const metadata = getMetadata("home");

    expect(metadata).toEqual({
      title: `${page.frontmatter.title} | ${siteName}`,
      description: page.frontmatter.excerpt,
      openGraph: {
        images: [page.frontmatter.featuredImage],
      },
    });
  });

  it("should return the correct metadata for a blog post", () => {
    const post = getContentBySlug("posts/first-post");
    const metadata = getMetadata("posts/first-post");

    expect(metadata).toEqual({
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      openGraph: {
        images: [post.frontmatter.featuredImage],
      },
    });
  });
});
