import { tinaField, useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";
import { Post } from "../../tina/__generated__/types";
import {
  AuthorBio,
  Layout,
  Link,
  Markdown,
  PostSummary,
  Seo,
} from "../components";

const HomePage = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Layout {...data.global}>
      <Seo
        title={data.page.title}
        description={data.page.excerpt}
        image={data.page.featuredImage}
      />
      <div data-tina-field={tinaField(data.page, "body")}>
        <Markdown content={data.page.body} />
      </div>
      <AuthorBio
        author={data.global.author}
        siteName={data.global.header.siteName}
      />
      <h2>Recent Posts</h2>
      {data.postConnection.edges.map(({ node }: { node: Post }) => (
        <PostSummary post={node} key={node._sys.filename} />
      ))}
      <Link url="/blog/page/2">View more posts →</Link>
    </Layout>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  let data = {};
  let query = {};

  try {
    const res = await client.queries.homeQuery();
    query = res.query;
    data = res.data;
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables: {},
      data,
      query,
    },
  };
};
