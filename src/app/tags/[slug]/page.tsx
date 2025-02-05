import { Container } from "../../../components/Container";
import { Grid } from "../../../components/Grid";
import { Layout } from "../../../components/Layout";
import { getLatestPosts } from "../../../helpers/getLatestPosts";

// export const generateMetadata = ({ params }) =>
//   getMetadata(`tags/${params.slug}`);

export const metadata = {
  title: "Tags",
};

export interface TagPageProps {
  params: Promise<{ slug: string }>;
  searchParams: URLSearchParams;
}

const TagPage = async ({ params }: TagPageProps) => {
  const { slug } = await params;
  const posts = getLatestPosts(-1, { key: "tags", value: slug }) || [];
  const title = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <Layout>
      <Container>
        <h1>{title}</h1>
        <p>A list of all the posts tagged with {slug}</p>
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
