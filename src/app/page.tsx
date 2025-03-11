import { Author } from "../components/Author";
import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { Grid } from "../components/Grid";
import { Heading } from "../components/Heading";
import { Layout } from "../components/Layout";
import { getContentBySlug } from "../helpers/getContentBySlug";
import { getLatestPosts } from "../helpers/getLatestPosts";
import { getMetadata } from "../helpers/getMetadata";

export const generateMetadata = () => getMetadata("home");

const HomePage = () => {
  const page = getContentBySlug("home");
  const posts = getLatestPosts();

  return (
    <Layout>
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
            isPublished: frontmatter.published,
            meta: frontmatter.tags,
            slug,
          }))}
        />
      </Container>
    </Layout>
  );
};

export default HomePage;
