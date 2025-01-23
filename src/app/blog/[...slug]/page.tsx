import { MDXRemote } from "next-mdx-remote/rsc";
import { FC } from "react";
import { PageProps } from "../../../../.next/types/app/page";
import { getContentBySlug } from "../../../helpers/getContentBySlug";

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
