import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { Grid } from "../components/Grid";
import { Heading } from "../components/Heading";
import { Layout } from "../components/Layout";
import { getContentBySlug } from "../helpers/getContentBySlug";
import { getLatestPosts } from "../helpers/getLatestPosts";
import { getMetadata } from "../helpers/getMetadata";

export const generateMetadata = () => getMetadata("not-found");

const NotFoundPage = async () => {
  const post = getContentBySlug("not-found");
  const posts = getLatestPosts();

  return (
    <Layout>
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
    </Layout>
  );
};

export default NotFoundPage;
