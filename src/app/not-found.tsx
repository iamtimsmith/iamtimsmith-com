import { Container } from "../components/Container";
import { Grid } from "../components/Grid";
import { Heading } from "../components/Heading";
import { InlineText } from "../components/InlineText";
import { Layout } from "../components/Layout";
import { Link } from "../components/Link";
import { getLatestPosts } from "../helpers/getLatestPosts";
import { getMetadata } from "../helpers/getMetadata";

export const generateMetadata = () => getMetadata("not-found");

const NotFoundPage = async () => {
  const posts = getLatestPosts();

  return (
    <Layout>
      <Container>
        <h1>
          <InlineText variant="bold">404</InlineText> Page Not Found
        </h1>
        <span
          style={{
            display: `block`,
            fontSize: `var(--font-size-lg)`,
            margin: `2rem 0 7rem`,
          }}
        >
          Uh-oh! It looks like the page you're looking for doesn't exist. Head
          back <Link href="/">Home</Link> to try again or take a look at some of
          my <Link href="/blog">latest blog posts</Link>.
        </span>
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

export default NotFoundPage;
