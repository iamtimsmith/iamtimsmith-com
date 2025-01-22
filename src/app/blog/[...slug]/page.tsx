import { FC, HTMLAttributes } from "react";
import { getContentBySlug } from "../../../helpers/getContentBySlug";

export interface PostPageProps extends HTMLAttributes<HTMLDivElement> {}

const PostPage: FC<PostPageProps> = async ({ className, params, ...props }) => {
  const slug = (await params).slug;
  const post = await getContentBySlug(`posts/${slug}`);

  return (
    <>
      <h1>Title</h1>
      {post.content}
    </>
  );
};

export default PostPage;
