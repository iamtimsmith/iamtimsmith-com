import { baseUrl, siteName } from "../../constants";
import { getContentBySlug } from "../getContentBySlug";
import { getMetadata } from "./getMetadata";

describe("getMetadata()", () => {
  it("should return the correct metadata for the homepage", () => {
    const page = getContentBySlug("home");
    const metadata = getMetadata("home");
    const title = `${page.frontmatter.title} | ${siteName}`;

    expect(metadata).toEqual({
      title,
      description: page.frontmatter.excerpt,
      openGraph: {
        title,
        description: page.frontmatter.excerpt,
        url: `${baseUrl}/${page.slug}`,
        siteName,
        type: "website",
        images: [
          {
            url: page.frontmatter.featuredImage,
            width: 1200,
            height: 630,
            alt: page.frontmatter.title,
          },
        ],
      },
    });
  });

  it("should return the correct metadata for a blog post", () => {
    const slug = "posts/first-post";
    const post = getContentBySlug(slug);
    const metadata = getMetadata(slug);

    expect(metadata).toEqual({
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      openGraph: {
        title: post.frontmatter.title,
        description: post.frontmatter.excerpt,
        url: `${baseUrl}/${post.slug}`,
        siteName,
        type: "website",
        images: [
          {
            url: post.frontmatter.featuredImage,
            width: 1200,
            height: 630,
            alt: post.frontmatter.title,
          },
        ],
      },
    });
  });
});
