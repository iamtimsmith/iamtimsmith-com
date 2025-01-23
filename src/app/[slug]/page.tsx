import { MDXRemote } from "next-mdx-remote/rsc";
import { FC, HTMLAttributes } from "react";
import { getContentBySlug } from "../../helpers/getContentBySlug";

export interface DynamicPageProps extends HTMLAttributes<HTMLDivElement> {
  params: Promise<{ slug: string }>;
  searchParams: URLSearchParams;
}

const DynamicPage: FC<DynamicPageProps> = async ({
  className,
  params,
  searchParams,
  ...props
}) => {
  const slug = (await params).slug;
  const post = await getContentBySlug(slug);

  return (
    <main {...props}>
      <h1>{post.frontmatter.title}</h1>
      <MDXRemote source={post.content} />
    </main>
  );
};

export default DynamicPage;
