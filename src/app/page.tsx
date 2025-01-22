import { FC, HTMLAttributes } from "react";
import { Summary } from "../components/Summary";
import { getLatestPosts } from "../helpers/getLatestPosts";

export interface HomePageProps extends HTMLAttributes<HTMLDivElement> {
  searchParams: URLSearchParams;
}

const HomePage: FC<HomePageProps> = async ({
  className,
  searchParams,
  ...props
}) => {
  const posts = await getLatestPosts();

  return (
    <div {...props}>
      <h1>Home</h1>
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
    </div>
  );
};

export default HomePage;
