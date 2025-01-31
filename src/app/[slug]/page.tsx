import { FC } from "react";
import { Content } from "../../components/Content";
import { getContentBySlug } from "../../helpers/getContentBySlug";
import { getMetadata } from "../../helpers/getMetadata";

export const generateMetadata = ({ params }) => {
  if (params.slug.includes(/\.ico/i)) getMetadata(params.slug);
};

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
