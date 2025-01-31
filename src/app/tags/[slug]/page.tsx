import { FC } from "react";
import { Container } from "../../../components/Container";
import { Grid } from "../../../components/Grid";
import { getContentBySlug } from "../../../helpers/getContentBySlug";
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

const TagPage: FC<TagPageProps> = async ({ params }) => {
  const { slug } = await params;
  const tag = getContentBySlug(`tags/${slug}`);
  const posts = getLatestPosts(-1, { key: "tags", value: slug }) || [];

  return (
    <main>
      <Container>
        <h1>{tag.frontmatter.title}</h1>
        <p>{tag.frontmatter.excerpt}</p>
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
export default TagPage;
