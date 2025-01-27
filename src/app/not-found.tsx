import { MDXRemote } from "next-mdx-remote/rsc";
import { FC } from "react";
import { getContentBySlug } from "../helpers/getContentBySlug";
import { getMetadata } from "../helpers/getMetadata";
import { PageProps } from "../types";

export const generateMetadata = () => getMetadata("not-found");

interface NotFoundPageProps extends PageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = async ({
  className,
  params,
  searchParams,
  ...props
}) => {
  const post = await getContentBySlug("not-found");

  return (
    <main {...props}>
      <MDXRemote source={post.content} />
    </main>
  );
};

export default NotFoundPage;
