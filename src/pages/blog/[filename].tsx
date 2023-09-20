import { useRef } from "react";
import { tinaField, useTina } from "tinacms/dist/react";
import client from "../../../tina/__generated__/client";
import { Layout, Link, Markdown, Seo, Sharebar } from "../../components";

const BlogPage = (props) => {
  const contentRef = useRef<HTMLDivElement>();
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Layout {...data.global} content={contentRef.current?.innerText}>
      <Seo
        title={data.post.title}
        description={data.post.excerpt}
        image={data.post.featuredImage}
      />
      <h1 data-tina-field={tinaField(data.post, "title")}>{data.post.title}</h1>
      <div
        ref={contentRef}
        className="content"
        data-tina-field={tinaField(data.post, "body")}
      >
        <Markdown content={data.post.body} />
      </div>
      <p data-tina-field={tinaField(data.post, "tags")}>
        Tags:{" "}
        {data.post.tags?.map((tag) => (
          <Link url={`/blog/tags/${tag}`} key={tag}>
            #{tag}
          </Link>
        ))}
      </p>
      <Sharebar post={data.post} />
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.filename}.mdx` };
  try {
    const res = await client.queries.blogPostQuery(variables);
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
  const postsListData = await client.queries.postConnection({
    filter:
      process.env.NODE_ENV === "production"
        ? { published: { eq: true } }
        : undefined,
  });
  const postsList = postsListData?.data?.postConnection?.edges || [];

  return {
    paths: postsList.map((post) => ({
      params: { filename: post?.node?._sys?.filename },
    })),
    fallback: false,
  };
};

export default BlogPage;
