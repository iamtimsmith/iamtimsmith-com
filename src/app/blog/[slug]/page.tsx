import { notFound } from "next/navigation";
import { Author } from "../../../components/Author";
import { Container } from "../../../components/Container";
import { Content } from "../../../components/Content";
import { Grid } from "../../../components/Grid";
import { Heading } from "../../../components/Heading";
import { Layout } from "../../../components/Layout";
import { Tags } from "../../../components/Tags";
import { getContentBySlug } from "../../../helpers/getContentBySlug";
import { getLatestPosts } from "../../../helpers/getLatestPosts";
import { getMetadata } from "../../../helpers/getMetadata";
import styles from "./styles.module.css";

export const generateMetadata = ({ params }) =>
  getMetadata(`posts/${params.slug}`);

export interface PostPageProps {
  params: Promise<{ slug: string }>;
  searchParams: URLSearchParams;
}

const PostPage = async ({ params }: PostPageProps) => {
  const { slug } = await params;
  const isDev = process.env.NODE_ENV === "development";
  const post = getContentBySlug(`posts/${slug}`);

  // If not in dev mode and post is not published, return 404
  if (!isDev && !post.frontmatter.published) return notFound();

  const posts = getLatestPosts();

  return (
    <Layout content={post.content}>
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <Tags
          tags={[
            ...(!post.frontmatter.published ? ["Unpublished"] : []),
            ...post.frontmatter.tags.map((tag) => tag),
          ]}
        />
        <Content>{post.content}</Content>
        <Author />
      </Container>
      <Container variant="wide">
        <Heading className={styles.heading} href="/blog">
          Recent Posts
        </Heading>
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
      {/* <Sharebar
        title={post.frontmatter.title}
        excerpt={post.frontmatter.excerpt}
        featuredImage={post.frontmatter.featuredImage}
        slug={post.slug}
      /> */}
    </Layout>
  );
};

export default PostPage;
