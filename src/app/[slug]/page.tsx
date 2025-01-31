import { MDXRemote } from "next-mdx-remote/rsc";
import { FC } from "react";
import { getContentBySlug } from "../../helpers/getContentBySlug";
import { getMetadata } from "../../helpers/getMetadata";
import { PageProps } from "../../types";

export const generateMetadata = ({ params }) => getMetadata(params.slug);

interface DynamicPageProps extends PageProps {
  params: Promise<{ slug: string }>;
  className?: string;
}

const DynamicPage: FC<DynamicPageProps> = async ({
  className,
  params,
  searchParams,
  ...props
}) => {
  const { slug } = await params;

  if (slug === "favicon.ico") return;

  const post = getContentBySlug(slug);

  return (
    <main {...props}>
      <h1>{post.frontmatter.title}</h1>
      <MDXRemote source={post.content} />
    </main>
  );
};

export default DynamicPage;
