import { Container } from "../../components/Container";
import { Grid } from "../../components/Grid";
import { getAllTags } from "../../helpers/getAllTags";

export const metadata = {
  title: "Tags",
  description: "View all of the tags assigned to blog posts.",
};

const TagsPage = async () => {
  const tags = getAllTags();
  const getTagCount = ({ count }) => {
    const label = count === 1 ? "post" : "posts";
    return `${count} ${label}`;
  };

  return (
    <main>
      <Container>
        <h1>Tags</h1>
      </Container>
      <Container variant="wide">
        <Grid
          items={tags.map((tag) => ({
            title: tag.title,
            meta: [getTagCount(tag)],
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
