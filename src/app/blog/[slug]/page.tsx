import { MDXRemote } from "next-mdx-remote/rsc";
import { FC } from "react";
import { getContentBySlug } from "../../../helpers/getContentBySlug";
import { getMetadata } from "../../../helpers/getMetadata";
import { PageProps } from "../../../types";

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
  const post = await getContentBySlug(`posts/${slug}`);

  return (
    <main {...props}>
      <h1>{post.frontmatter.title}</h1>
      <MDXRemote source={post.content} />
    </main>
  );
};

export default PostPage;
