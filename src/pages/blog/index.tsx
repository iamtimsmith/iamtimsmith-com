import { useTina } from "tinacms/dist/react";
import client from "../../../tina/__generated__/client";
import { Post } from "../../../tina/__generated__/types";
import { Layout, Pagination, PostSummary, Seo } from "../../components";
import { getTotalPages, postsPerPage } from "../../utils/pagination";

const PostsPage = ({ pageCount, ...props }) => {
  const { data } = useTina({
    data: props.data,
    query: props.query,
    variables: props.variables,
  });

  return (
    <Layout {...data.global}>
      <Seo
        title="Blog"
        description="A blog to teach new developers about MERN, Node js, React js, Express js, and Wordpress in a simple and understandable way."
        image="https://res.cloudinary.com/dcrgbfjfu/image/upload/v1644109224/iamtimsmith/timsmith_fyh0hq.jpg"
      />
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
