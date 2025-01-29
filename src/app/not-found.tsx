import { FC } from "react";
import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { SummaryGrid } from "../components/SummaryGrid";
import { getContentBySlug } from "../helpers/getContentBySlug";
import { getMetadata } from "../helpers/getMetadata";
import { PageProps } from "../types";

export const generateMetadata = () => getMetadata("not-found");

interface NotFoundPageProps extends PageProps {
  params: Promise<{ slug: string }>;
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
      <Container>
        <Content>{post.content}</Content>
      </Container>
      <SummaryGrid count={3} />
    </main>
  );
};

export default NotFoundPage;
