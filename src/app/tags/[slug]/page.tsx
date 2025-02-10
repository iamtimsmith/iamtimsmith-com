import { Container } from "../../../components/Container";
import { Content } from "../../../components/Content";
import { Grid } from "../../../components/Grid";
import { Layout } from "../../../components/Layout";
import { getContentBySlug } from "../../../helpers/getContentBySlug";
import { getLatestPosts } from "../../../helpers/getLatestPosts";
import { getMetadata } from "../../../helpers/getMetadata";

export const generateMetadata = ({ params }) =>
  getMetadata(`tags/${params.slug}`);

export interface TagPageProps {
  params: Promise<{ slug: string }>;
  searchParams: URLSearchParams;
}

const TagPage = async ({ params }: TagPageProps) => {
  const { slug } = await params;
  const { frontmatter, content } = getContentBySlug(`tags/${slug}`);
  const posts = getLatestPosts(-1, { key: "tags", value: slug }) || [];

  return (
    <Layout>
      <Container>
        <h1>{frontmatter.title}</h1>
        <Content>{content}</Content>
      </Container>
      <Container variant="wide">
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

export default TagPage;
