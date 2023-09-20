import { useTina } from "tinacms/dist/react";
import client from "../../../../tina/__generated__/client";
import { Layout, Link } from "../../../components";
import { getAllTags } from "../../../utils/tags";

interface TagIndexPageProps {
  tags: string[];
  data: any;
  query: any;
  variables: any;
}

const TagIndexPage = ({ tags, ...props }: TagIndexPageProps) => {
  const { data } = useTina({
    data: props.data,
    query: props.query,
    variables: props.variables,
  });

  return (
    <Layout {...data.global}>
      <h1>Tags</h1>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            <Link url={`/blog/tags/${tag}`}>#{tag}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const tags = await getAllTags();
  const { data, query, variables } = await client.queries.layoutQuery();

  return {
    props: {
      data,
      query,
      variables,
      tags,
    },
  };
};

export default TagIndexPage;
