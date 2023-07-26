import { useTina } from "tinacms/dist/react";
import client from "../../../tina/__generated__/client";
import { Post } from "../../../tina/__generated__/types";
import { Layout, Pagination, PostSummary } from "../../components";
import { getTotalPages, postsPerPage } from "../../utils/pagination";

const PostsPage = ({ pageCount, ...props }) => {
  const { data } = useTina({
    data: props.data,
    query: props.query,
    variables: props.variables,
  });

  return (
    <Layout {...data.global}>
      <h1>Blog</h1>
      {data.postConnection.edges.map(({ node }: { node: Post }) => (
        <PostSummary post={node} key={node._sys.filename} />
      ))}
      <Pagination
        page={1}
        pageCount={pageCount}
        hasNextPage={true}
        hasPreviousPage={false}
        baseUrl="/blog"
      />
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const { data, query, variables } = await client.queries.paginationQuery({
    limit: postsPerPage,
  });
  const pageCount = (await getTotalPages()).numPages;

  return {
    props: {
      data,
      query,
      variables,
      pageCount,
    },
  };
};

export default PostsPage;
