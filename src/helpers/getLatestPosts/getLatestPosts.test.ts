import { readdir } from "fs";
import { postsPerPage } from "../../constants";
import { getContentBySlug } from "../getContentBySlug";
import { getLatestPosts } from "./getLatestPosts";

describe("getLatestPosts()", () => {
  const ORIGINAL_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...ORIGINAL_ENV };
  });

  afterAll(() => {
    process.env = ORIGINAL_ENV;
  });

  it("should return some posts", () => {
    const posts = getLatestPosts(2);
    expect(posts).toHaveLength(2);
  });

  it("should return all posts in dev environment", () => {
    readdir("content/posts", (err, files) => {
      process.env = { NODE_ENV: "development" };

      const totalPosts = files.length;
      const posts = getLatestPosts(-1);
      expect(posts).toHaveLength(totalPosts);
    });
  });

  it("should return published posts in prod environment", () => {
    readdir("content/posts", (err, files) => {
      process.env = { NODE_ENV: "production" };

      const publishedPosts = files.filter((file) => {
        const post = getContentBySlug(`posts/${file.replace(".mdx", "")}`);
        return post.frontmatter.published === true;
      });
      const posts = getLatestPosts(-1);
      expect(posts).toHaveLength(publishedPosts.length);
    });
  });

  it(`should return ${postsPerPage} posts by default`, () => {
    const posts = getLatestPosts();
    expect(posts).toHaveLength(postsPerPage);
  });

  it("should return a custom number of posts", () => {
    const count = 5;
    const posts = getLatestPosts(count);
    expect(posts).toHaveLength(count);
  });

  it("should return the title for each post", () => {
    const posts = getLatestPosts(1);
    const post = posts[0];
    expect(post.frontmatter).toHaveProperty("title");
  });

  it("should return the date for each post", () => {
    const posts = getLatestPosts(1);
    const post = posts[0];
    expect(post.frontmatter).toHaveProperty("date");
  });

  it("should return the excerpt for each post", () => {
    const posts = getLatestPosts(1);
    const post = posts[0];
    expect(post.frontmatter).toHaveProperty("excerpt");
  });

  it("should return the slug for each post", () => {
    const posts = getLatestPosts(1);
    const post = posts[0];
    expect(post).toHaveProperty("slug");
  });

  it("should return the posts in descending order", () => {
    const posts = getLatestPosts();
    const dates = posts.map((post) => new Date(post.frontmatter.date));
    expect(dates).toEqual(dates.sort((a, b) => (a > b ? -1 : 1)));
  });
});
