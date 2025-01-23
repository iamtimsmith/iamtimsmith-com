import { MDXRemote } from "next-mdx-remote/rsc";
import { FC } from "react";
import { Author } from "../components/Author";
import { Link } from "../components/Link";
import { Summary } from "../components/Summary";
import { getContentBySlug } from "../helpers/getContentBySlug";
import { getLatestPosts } from "../helpers/getLatestPosts/getLatestPosts";
import { getMetadata } from "../helpers/getMetadata";
import { PageProps } from "../types";

export const generateMetadata = () => getMetadata("home");

export interface HomePageProps extends PageProps {
  className?: string;
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
      <Author />
      <h2>Latest Posts</h2>
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
      <Link url="/blog">View more posts →</Link>
    </main>
  );
};

export default HomePage;
