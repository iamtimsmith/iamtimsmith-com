import { useTina } from "tinacms/dist/react";
import client from "../../../tina/__generated__/client";
import { Post } from "../../../tina/__generated__/types";
import { Layout, PostSummary, Seo } from "../../components";
import { getAllTags } from "../../utils/tags";

interface TagPageProps {
  tag: string;
  data: any;
  query: any;
  variables: any;
}

const TagPage = ({ tag, ...props }: TagPageProps) => {
  const { data } = useTina({
    data: props.data,
    query: props.query,
    variables: props.variables,
  });

  return (
    <Layout {...data.global}>
      <Seo
        title={`Blog - Posts tagged with ${tag}`}
        description="A blog to teach new developers about MERN, Node js, React js, Express js, and Wordpress in a simple and understandable way."
        image="https://res.cloudinary.com/dcrgbfjfu/image/upload/v1644109224/iamtimsmith/timsmith_fyh0hq.jpg"
      />
      <h1>Posts tagged with #{tag}</h1>
      {data.postConnection.edges.map(({ node }: { node: Post }) => (
        <PostSummary post={node} key={node._sys.filename} />
      ))}
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const tag = params.tag;
  const { data, query, variables } = await client.queries.tagPageQuery({ tag });

  return {
    props: {
      data,
      query,
      variables,
      tag,
    },
  };
};

export const getStaticPaths = async () => {
  const tags = await getAllTags();

  return {
    paths: tags.map((tag) => ({
      params: { tag },
    })),
    fallback: false,
  };
};

export default TagPage;
