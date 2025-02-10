import { notFound } from "next/navigation";
import { getContentBySlug } from "../getContentBySlug";

jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

describe("getContentBySlug()", () => {
  it("should return the title for the homepage", () => {
    const page = getContentBySlug("pages/home");
    const hasTitle = "title" in page.frontmatter;
    expect(hasTitle).toBe(true);
  });

  it("should return the excerpt for the homepage", () => {
    const page = getContentBySlug("pages/home");
    const hasTitle = "excerpt" in page.frontmatter;
    expect(hasTitle).toBe(true);
  });

  it("should return the featured image for the homepage", () => {
    const page = getContentBySlug("pages/home");
    const hasTitle = "featuredImage" in page.frontmatter;
    expect(hasTitle).toBe(true);
  });

  it("should return the published status for the homepage", () => {
    const page = getContentBySlug("pages/home");
    const hasTitle = "published" in page.frontmatter;
    expect(hasTitle).toBe(true);
  });

  it("should return the content for the homepage", () => {
    const page = getContentBySlug("pages/home");
    const hasTitle = "content" in page;
    expect(hasTitle).toBe(true);
  });

  it("should return the correct slug for the homepage", () => {
    const page = getContentBySlug("pages/home");
    expect(page.slug).toEqual("/");
  });

  it("should return the correct slug for a blog post", () => {
    const page = getContentBySlug("posts/first-post");
    expect(page.slug).toEqual("/blog/first-post");
  });

  it("should return 404 page for an invalid slug", () => {
    getContentBySlug("abouts");
    expect(notFound).toHaveBeenCalled();
  });
});
