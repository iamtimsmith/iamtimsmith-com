import { FC, HTMLAttributes } from "react";
import { Link } from "../components/Link";
import { getLatestPosts } from "../helpers/getLatestPosts";

export interface BlogPageProps extends HTMLAttributes<HTMLDivElement> {
  posts: any[];
}

const BlogPage: FC<BlogPageProps> = ({ posts, ...props }) => {
  return (
    <div {...props}>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link url={post.slug}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = await getLatestPosts();

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
