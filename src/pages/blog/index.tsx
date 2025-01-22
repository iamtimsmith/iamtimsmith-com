import { FC, HTMLAttributes } from "react";

export interface indexProps extends HTMLAttributes<HTMLDivElement> {}

const BlogPage: FC<indexProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <h1>Blog</h1>
    </div>
  );
};

export default BlogPage;
