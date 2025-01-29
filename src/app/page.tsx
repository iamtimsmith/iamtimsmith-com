import { MDXRemote } from "next-mdx-remote/rsc";
import { FC } from "react";
import { Author } from "../components/Author";
import { Container } from "../components/Container";
import { Grid } from "../components/Grid";
import { Heading } from "../components/Heading";
import { getContentBySlug } from "../helpers/getContentBySlug";
import { getLatestPosts } from "../helpers/getLatestPosts";
import { getMetadata } from "../helpers/getMetadata";
import { PageProps } from "../types";

export const generateMetadata = () => getMetadata("home");

export interface HomePageProps extends PageProps {
  className?: string;
}

const HomePage: FC<HomePageProps> = ({ className, searchParams, ...props }) => {
  const page = getContentBySlug("home");
  const posts = getLatestPosts();

  return (
    <main {...props}>
      <Container>
        <MDXRemote source={page.content} />
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
      {/* <SummaryGrid titleHref="/blog" /> */}
    </main>
  );
};

export const revalidate = 60; // Revalidate this page every 60 seconds

export default HomePage;
