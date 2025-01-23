import { MDXRemote } from "next-mdx-remote/rsc";
import { FC, HTMLAttributes } from "react";
import { Summary } from "../components/Summary";
import { getContentBySlug } from "../helpers/getContentBySlug";
import { getLatestPosts } from "../helpers/getLatestPosts/getLatestPosts";

export interface HomePageProps extends HTMLAttributes<HTMLDivElement> {
  searchParams: URLSearchParams;
}

const HomePage: FC<HomePageProps> = async ({
  className,
  searchParams,
  ...props
}) => {
  const page = await getContentBySlug("home");
  const posts = await getLatestPosts();

  return (
    <main {...props}>
      <MDXRemote source={page.content} />
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

export default HomePage;
