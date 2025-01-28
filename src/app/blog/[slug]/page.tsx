import { FC } from "react";
import { Author } from "../../../components/Author";
import { Container } from "../../../components/Container";
import { Content } from "../../../components/Content";
import { Sharebar } from "../../../components/Sharebar";
import { SummaryGrid } from "../../../components/SummaryGrid";
import { getContentBySlug } from "../../../helpers/getContentBySlug";
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
  const slug = (await params).slug;
  const post = getContentBySlug(`posts/${slug}`);

  return (
    <main {...props}>
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <Content>{post.content}</Content>
        <Author />
      </Container>
      <SummaryGrid />
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
