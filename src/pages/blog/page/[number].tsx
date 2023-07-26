import { useTina } from "tinacms/dist/react";
import client from "../../../../tina/__generated__/client";
import { Post } from "../../../../tina/__generated__/types";
import { Layout, Pagination, PostSummary } from "../../../components";
import {
  getPaginationPages,
  getPreviousPost,
  getTotalPages,
  postsPerPage,
} from "../../../utils/pagination";

interface PaginationPageProps {
  pageCount: number;
  page: number;
  data: any;
  query: any;
  variables: any;
}

const PaginationPage = ({ pageCount, page, ...props }: PaginationPageProps) => {
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
        page={page}
        pageCount={pageCount}
        hasPreviousPage={true}
        hasNextPage={page < pageCount}
        baseUrl="/blog"
      />
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const page = parseInt(params.number);
  const previousPost = await getPreviousPost(page);
  const { data, query, variables } = await client.queries.paginationQuery({
    limit: postsPerPage,
    before: previousPost,
  });
  const pageCount = (await getTotalPages()).numPages;

  // const data = getPaginatedPosts(tinaData.postConnection.edges, page);

  return {
    props: {
      data,
      query,
      variables,
      pageCount,
      page,
    },
  };
};

export const getStaticPaths = async () => ({
  paths: await getPaginationPages(),
  fallback: false,
});

export default PaginationPage;
