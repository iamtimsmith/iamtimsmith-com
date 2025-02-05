import { FC } from "react";
import { Container } from "../../components/Container";
import { Grid } from "../../components/Grid";
import { Layout } from "../../components/Layout";
import { getLatestPosts } from "../../helpers/getLatestPosts";

export const metadata = {
  title: "Blog",
  description: "Read the latest posts from the blog.",
};

export interface BlogPageProps {
  searchParams: URLSearchParams;
}

const BlogPage: FC<BlogPageProps> = () => {
  // This will need to change once pagination is implemented
  const posts = getLatestPosts(-1);

  return (
    <Layout>
      <Container>
        <h1>Blog</h1>
      </Container>
      <Container variant="wide">
        <Grid
          items={posts.map(({ frontmatter, slug }) => ({
            title: frontmatter.title,
            isPublished: frontmatter.published,
            description: frontmatter.excerpt,
            meta: frontmatter.tags,
            slug,
          }))}
        />
      </Container>
    </Layout>
  );
};

export const revalidate = 60; // Revalidate this page every 60 seconds

export default BlogPage;
