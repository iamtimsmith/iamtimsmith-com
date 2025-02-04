import { Author } from "../components/Author";
import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { Grid } from "../components/Grid";
import { Heading } from "../components/Heading";
import { getContentBySlug } from "../helpers/getContentBySlug";
import { getLatestPosts } from "../helpers/getLatestPosts";
import { getMetadata } from "../helpers/getMetadata";

export const generateMetadata = () => getMetadata("home");

// export const metadata = {
//   title: `Home | ${siteName}`,
//   description:
//     "Tim Smith is a software engineer trying to make the web a better place.",
//   openGraph: {
//     title: `Home | ${siteName}`,
//     description:
//       "Tim Smith is a software engineer trying to make the web a better place.",
//     url: "https://timsmith.dev",
//     siteName: siteName,
//     type: "website",
//     images: [
//       {
//         url: "https://res.cloudinary.com/dcrgbfjfu/image/upload/v1644109224/iamtimsmith/timsmith_fyh0hq.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Tim Smith's website",
//       },
//     ],
//   },
// };

const HomePage = () => {
  const page = getContentBySlug("home");
  const posts = getLatestPosts();

  return (
    <main>
      <Container>
        <Content>{page.content}</Content>
        <Author />
      </Container>
      <Container variant="wide">
        <Heading href="/blog">Recent Posts</Heading>
        <Grid
          items={posts.map(({ frontmatter, slug }) => ({
            title: frontmatter.title,
            description: frontmatter.excerpt,
            meta: frontmatter.tags,
            slug,
          }))}
        />
      </Container>
    </main>
  );
};

export const revalidate = 60; // Revalidate this page every 60 seconds

export default HomePage;
