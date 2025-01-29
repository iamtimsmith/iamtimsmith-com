import { FC } from "react";
import { Container } from "../../components/Container";
import { SummaryGrid } from "../../components/SummaryGrid";
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
      <Container variant="wide">
        <h1>Blog</h1>
      </Container>
      <SummaryGrid title="" />
    </main>
  );
};

export const revalidate = 60; // Revalidate this page every 60 seconds

export default BlogPage;
