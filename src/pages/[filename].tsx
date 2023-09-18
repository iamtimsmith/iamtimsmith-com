import { useRef } from "react";
import { tinaField, useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";
import { Layout, Markdown, Seo } from "../components";

const PageTemplate = (props) => {
  const contentRef = useRef<HTMLDivElement>();
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Layout {...data.global} content={contentRef.current?.innerText}>
      <Seo
        title={data.page.title}
        description={data.page.excerpt}
        image={data.page.featuredImage}
      />
      <h1>{data.page.title}</h1>
      <div ref={contentRef} data-tina-field={tinaField(data.page, "body")}>
        <Markdown content={data.page.body} />
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.filename}.mdx` };
  try {
    const res = await client.queries.pageQuery(variables);
    query = res.query;
    data = res.data;
    variables = res.variables;
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables: variables,
      data: data,
      query: query,
    },
  };
};

export const getStaticPaths = async () => {
  const pagesListData = await client.queries.pageConnection();

  return {
    paths: pagesListData.data.pageConnection.edges.map((page) => ({
      params: { filename: page.node._sys.filename },
    })),
    fallback: false,
  };
};

export default PageTemplate;
