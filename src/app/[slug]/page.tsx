import { MDXRemote } from "next-mdx-remote/rsc";
import { FC } from "react";
import { getContentBySlug } from "../../helpers/getContentBySlug";
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
      <MDXRemote source={post.content} />
    </main>
  );
};

export default DynamicPage;
