import { FC } from "react";
import { Author } from "../../../components/Author";
import { Container } from "../../../components/Container";
import { Content } from "../../../components/Content";
import { Grid } from "../../../components/Grid";
import { Heading } from "../../../components/Heading";
import { Sharebar } from "../../../components/Sharebar";
import { Tags } from "../../../components/Tags";
import { getContentBySlug } from "../../../helpers/getContentBySlug";
import { getLatestPosts } from "../../../helpers/getLatestPosts";
import { getMetadata } from "../../../helpers/getMetadata";
import { PageProps } from "../../../types";

export const generateMetadata = ({ params }) =>
  getMetadata(`posts/${params.slug}`);

export interface PostPageProps extends PageProps {
  params: Promise<{ slug: string }>;
  className?: string;
}

const PostPage: FC<PostPageProps> = async ({
  className,
  params,
  searchParams,
  ...props
}) => {
  const { slug } = await params;
  const post = getContentBySlug(`posts/${slug}`);
  const posts = getLatestPosts();

  return (
    <main {...props}>
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <Tags tags={post.frontmatter.tags} size="md" />
        <Content>{post.content}</Content>
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
      <Sharebar
        title={post.frontmatter.title}
        excerpt={post.frontmatter.excerpt}
        featuredImage={post.frontmatter.featuredImage}
        slug={post.slug}
      />
    </main>
  );
};

export default PostPage;
