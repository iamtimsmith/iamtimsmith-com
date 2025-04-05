import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../../../tina/__generated__/client";

export async function generateStaticParams() {
  const pages = await client.queries.postConnection();
  const paths = pages.data?.postConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.filename,
  }));

  return paths || [];
}

const BlogPost = async ({ params }) => {
  const { filename } = await params;
  const {
    data: { post },
  } = await client.queries.post({
    relativePath: `${filename}.md`,
  });
  return (
    <div>
      <h1>{post.title}</h1>
      <TinaMarkdown content={post.body} />
    </div>
  );
};

export default BlogPost;
