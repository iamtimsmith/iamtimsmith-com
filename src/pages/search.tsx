import { GetServerSideProps } from "next";
import { useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";
import { Layout, PostSummary, Seo } from "../components";

const SearchPage = ({ term, ...props }) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Layout {...data.global}>
      <Seo
        title="Search"
        description="Search for blog posts about MERN, Node js, React js, Express js, and Wordpress in Tim Smith's blog."
        image="https://res.cloudinary.com/dcrgbfjfu/image/upload/v1644109224/iamtimsmith/timsmith_fyh0hq.jpg"
      />
      <h1>Posts containing "{term}"</h1>
      {data.postConnection.edges.length > 0 ? (
        data.postConnection.edges.map(({ node }) => (
          <PostSummary post={node} key={node._sys.filename} />
        ))
      ) : (
        <p>Sorry, but no posts contain the term "{term}" in their title.</p>
      )}
    </Layout>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async ({
  query: queryParams,
}) => {
  let data = {};
  let query = {};
  let variables = {};

  try {
    const res = await client.queries.searchQuery();
    query = res.query;
    data = {
      ...res.data,
      postConnection: {
        edges: res.data.postConnection.edges.filter(({ node }) =>
          node.title
            .toLowerCase()
            .includes((queryParams.s as string).toLowerCase())
        ),
      },
    };
    variables = res.variables;
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables: variables,
      data: data,
      query: query,
      term: queryParams.s,
    },
  };
};
