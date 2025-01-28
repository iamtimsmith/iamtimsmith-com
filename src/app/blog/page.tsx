import { FC } from "react";
import { Summary } from "../../components/Summary";
import { getLatestPosts } from "../../helpers/getLatestPosts";
import { PageProps } from "../../types";

export const metadata = {
  title: "Blog",
  description: "Read the latest posts from the blog.",
};

export interface BlogPageProps extends PageProps {
  params: Promise<{ slug: string }>;
  className?: string;
}

const BlogPage: FC<BlogPageProps> = async ({
  params,
  searchParams,
  ...props
}) => {
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

export const revalidate = 60; // Revalidate this page every 60 seconds

export default BlogPage;
