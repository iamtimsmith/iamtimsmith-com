import { FC } from "react";
import { Container } from "../../components/Container";
import { Grid } from "../../components/Grid";
import { getLatestPosts } from "../../helpers/getLatestPosts";
import { PageProps } from "../../types";

export const metadata = {
  title: "Blog",
  description: "Read the latest posts from the blog.",
};

export interface BlogPageProps extends PageProps {
  params: { slug: string };
  className?: string;
}

const BlogPage: FC<BlogPageProps> = ({ params, searchParams, ...props }) => {
  // This will need to change once pagination is implemented
  const posts = getLatestPosts(-1);

  return (
    <main {...props}>
      <Container>
        <h1>Blog</h1>
      </Container>
      <Container variant="wide">
        <Grid
          items={posts.map(({ frontmatter, slug }) => ({
            title: frontmatter.title,
            description: frontmatter.excerpt,
            meta: frontmatter.tags,
            slug,
          }))}
        />
      </Container>
    </main>
  );
};

export const revalidate = 60; // Revalidate this page every 60 seconds

export default BlogPage;
