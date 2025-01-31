import { FC } from "react";
import { Container } from "../../components/Container";
import { Grid } from "../../components/Grid";
import { getAllTags } from "../../helpers/getAllTags";
import { PageProps } from "../../types";

export const metadata = {
  title: "Blog",
  description: "Read the latest posts from the blog.",
};

export interface TagsPageProps extends PageProps {
  params: Promise<{ slug: string }>;
  className?: string;
}

const TagsPage: FC<TagsPageProps> = async ({
  params,
  searchParams,
  ...props
}) => {
  const tags = getAllTags();

  return (
    <main {...props}>
      <Container>
        <h1>Tags</h1>
      </Container>
      <Container variant="wide">
        <Grid
          items={tags.map((tag) => ({
            title: tag.title,
            meta: [`${tag.count} posts`],
            description: tag.description,
            slug: tag.slug,
          }))}
        />
      </Container>
    </main>
  );
};

export const revalidate = 60; // Revalidate this page every 60 seconds

export default TagsPage;
