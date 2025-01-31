import { FC } from "react";
import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { Grid } from "../components/Grid";
import { Heading } from "../components/Heading";
import { getContentBySlug } from "../helpers/getContentBySlug";
import { getLatestPosts } from "../helpers/getLatestPosts";
import { getMetadata } from "../helpers/getMetadata";
import { PageProps } from "../types";

export const generateMetadata = () => getMetadata("not-found");

interface NotFoundPageProps extends PageProps {
  params: { slug: string };
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({
  className,
  params,
  searchParams,
  ...props
}) => {
  const post = getContentBySlug("not-found");
  const posts = getLatestPosts();

  return (
    <main {...props}>
      <Container>
        <Content>{post.content}</Content>
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

export default NotFoundPage;
