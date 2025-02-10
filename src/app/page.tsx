// export const generateMetadata = () => getMetadata("home");

const HomePage = () => {
  // const page = getContentBySlug("home");
  // const posts = getLatestPosts();

  return (
    <div>
      <h1>Home</h1>
      {/* <Container>
        <Content>{page.content}</Content>
        <Author />
      </Container>
      <Container variant="wide">
        <Heading href="/blog">Recent Posts</Heading>
        <Grid
          items={posts.map(({ frontmatter, slug }) => ({
            title: frontmatter.title,
            description: frontmatter.excerpt,
            isPublished: frontmatter.published,
            meta: frontmatter.tags,
            slug,
          }))}
        />
      </Container> */}
    </div>
  );
};

export default HomePage;
