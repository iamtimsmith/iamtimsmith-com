import { MDXRemote } from "next-mdx-remote/rsc";
import { FC, HTMLAttributes } from "react";
import { getContentBySlug } from "../../../helpers/getContentBySlug";

export interface PostPageProps extends HTMLAttributes<HTMLDivElement> {
  params: Promise<{ slug: string }>;
  searchParams: URLSearchParams;
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
      <h1>Title</h1>
      <MDXRemote source={post.content} />
    </main>
  );
};

export default PostPage;
