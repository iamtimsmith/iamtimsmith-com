import { FC } from "react";
import { Content } from "../../components/Content";
import { getContentBySlug } from "../../helpers/getContentBySlug";
import { getLatestPosts } from "../../helpers/getLatestPosts";
import { getMetadata } from "../../helpers/getMetadata";

export const generateMetadata = ({ params }) => getMetadata(params.slug);

interface DynamicPageProps {
  params: Promise<{ slug: string }>;
  searchParams: URLSearchParams;
}

const DynamicPage: FC<DynamicPageProps> = async ({ params }) => {
  const { slug } = await params;

  if (slug === "favicon.ico") return;

  const post = getContentBySlug(slug);

  return (
    <main>
      <h1>{post.frontmatter.title}</h1>
      <Content>{post.content}</Content>
    </main>
  );
};

export default DynamicPage;

export const generateStaticParams = async () => {
  const posts = getLatestPosts(-1);

  return posts.map((post) => ({
    slug: post.slug,
  }));
};
