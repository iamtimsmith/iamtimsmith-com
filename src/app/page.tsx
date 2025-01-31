import { FC } from "react";
import { getMetadata } from "../helpers/getMetadata";

export const generateMetadata = () => getMetadata("home");

export interface HomePageProps {
  params: Promise<{ slug: string }>;
  searchParams: URLSearchParams;
}

const HomePage: FC<HomePageProps> = () => {
  return (
    <main>
      <h1>Site Under Maintenance!</h1>
      <p>Please pardon the mess!</p>
    </main>
  );
  // const page = getContentBySlug("home");
  // const posts = getLatestPosts();

  // return (
  //   <main>
  //     <Container>
  //       <MDXRemote source={page.content} />
  //       <Author />
  //     </Container>
  //     <Container variant="wide">
  //       <Heading href="/blog">Recent Posts</Heading>
  //       <Grid
  //         items={posts.map(({ frontmatter, slug }) => ({
  //           title: frontmatter.title,
  //           description: frontmatter.excerpt,
  //           meta: frontmatter.tags,
  //           slug,
  //         }))}
  //       />
  //     </Container>
  //   </main>
  // );
};

export const revalidate = 60; // Revalidate this page every 60 seconds

export default HomePage;
