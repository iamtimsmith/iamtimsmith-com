import { FC } from "react";
import { PageProps } from "../../../../.next/types/app/blog/[slug]/page";
import { Author } from "../../../components/Author";
import { Content } from "../../../components/Content";
import { Sharebar } from "../../../components/Sharebar";
import { getContentBySlug } from "../../../helpers/getContentBySlug";
import { getMetadata } from "../../../helpers/getMetadata";

export const generateMetadata = ({ params }) =>
  getMetadata(`posts/${params.slug}`);

export interface PostPageProps extends PageProps {
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
      <h1>{post.frontmatter.title}</h1>
      <Content>{post.content}</Content>
      <Author />
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
