import { FC } from "react";
import { Author } from "../components/Author";
import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { Grid } from "../components/Grid";
import { Heading } from "../components/Heading";
import { getContentBySlug } from "../helpers/getContentBySlug";
import { getLatestPosts } from "../helpers/getLatestPosts";

// export const generateMetadata = () => getMetadata("home");

export const metadata = {
  title: "Home",
};

export interface HomePageProps {
  params: Promise<{ slug: string }>;
  searchParams: URLSearchParams;
}

const HomePage: FC<HomePageProps> = () => {
  const page = getContentBySlug("home");
  const posts = getLatestPosts();

  return (
    <main>
      <Container>
        <Content>{page.content}</Content>
        <Author />
      </Container>
      <Container variant="wide">
        <Heading href="/blog">Recent Posts</Heading>
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

// export const revalidate = 60; // Revalidate this page every 60 seconds

export default HomePage;
