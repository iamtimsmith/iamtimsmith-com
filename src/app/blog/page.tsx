import { FC, HTMLAttributes } from "react";
import { Summary } from "../../components/Summary";
import { getLatestPosts } from "../../helpers/getLatestPosts";

export interface BlogPageProps extends HTMLAttributes<HTMLDivElement> {}

const BlogPage: FC<BlogPageProps> = async ({ className, ...props }) => {
  const posts = await getLatestPosts();

  return (
    <main {...props}>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Summary
              title={post.frontmatter.title}
              excerpt={post.frontmatter.excerpt}
              url={post.slug}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default BlogPage;
