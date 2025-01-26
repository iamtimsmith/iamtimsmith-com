import { MDXRemote } from "next-mdx-remote/rsc";
import { FC } from "react";
import { getContentBySlug } from "../../helpers/getContentBySlug";
import { getMetadata } from "../../helpers/getMetadata";
import { PageProps } from "../../types";

export const generateMetadata = ({ params, searchParams }) =>
  getMetadata(params.slug);

interface DynamicPageProps extends PageProps {
  className?: string;
}

const DynamicPage: FC<DynamicPageProps> = async ({
  className,
  params,
  searchParams,
  ...props
}) => {
  const slug = (await params).slug;

  if (slug === "favicon.ico") return;

  const post = await getContentBySlug(slug);

  return (
    <main {...props}>
      <h1>{post.frontmatter.title}</h1>
      <MDXRemote source={post.content} />
    </main>
  );
};

export default DynamicPage;
