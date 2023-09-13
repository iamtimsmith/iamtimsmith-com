import { useTina } from "tinacms/dist/react";
import client from "../../../../tina/__generated__/client";
import { Post } from "../../../../tina/__generated__/types";
import { Layout, Pagination, PostSummary, Seo } from "../../../components";
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
      <Seo
        title={`Blog - Page ${page}`}
        description="A blog to teach new developers about MERN, Node js, React js, Express js, and Wordpress in a simple and understandable way."
        image="https://res.cloudinary.com/dcrgbfjfu/image/upload/v1644109224/iamtimsmith/timsmith_fyh0hq.jpg"
      />
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
