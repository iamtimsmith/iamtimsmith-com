import { FC } from "react";
import { Container } from "../../components/Container";
import { Grid } from "../../components/Grid";
import { getAllTags } from "../../helpers/getAllTags";

export const metadata = {
  title: "Blog",
  description: "Read the latest posts from the blog.",
};

export interface TagsPageProps {
  searchParams: URLSearchParams;
}

const TagsPage: FC<TagsPageProps> = async () => {
  const tags = getAllTags();

  return (
    <main>
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
