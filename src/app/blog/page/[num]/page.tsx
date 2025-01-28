import { FC } from "react";
import { Summary } from "../../../../components/Summary";
import { getContentBySlug } from "../../../../helpers/getContentBySlug";
import { getLatestPosts } from "../../../../helpers/getLatestPosts";
import { PageProps } from "../../../../types";

export const generateMetadata = async () => {
  const page = await getContentBySlug("home");
  return {
    title: page.frontmatter.title,
  };
};

interface PaginatedPageProps extends PageProps {
  params: Promise<{ num: string }>;
}

const PaginatedPage: FC<PaginatedPageProps> = async ({ params }) => {
  const pageNum = parseInt((await params).num);

  const posts = getLatestPosts(-1);

  return (
    <>
      <h1>Blog</h1>
      {posts.map((post) => (
        <Summary
          title={post.frontmatter.title}
          excerpt={post.frontmatter.excerpt}
          url={`/${post.slug}`}
          key={post.slug}
        />
      ))}
      {/* <Pagination
        page={page}
        hasPreviousPage={true}
        hasNextPage={posts.length === site.postsPerPage}
        baseUrl="/blog"
      /> */}
    </>
  );
};

export const revalidate = 60; // Revalidate this page every 60 seconds

export default PaginatedPage;
