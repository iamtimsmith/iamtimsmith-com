import { FC, HTMLAttributes } from "react";

export interface BlogPageProps extends HTMLAttributes<HTMLDivElement> {}

const BlogPage: FC<BlogPageProps> = ({ className, ...props }) => {
  return (
    <div {...props}>
      <h1>Blog</h1>
    </div>
  );
};

export default BlogPage;
