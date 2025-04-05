import Link from "next/link";
import client from "../../../tina/__generated__/client";

const IndexPage = async () => {
  const { data } = await client.queries.postConnection();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {data.postConnection.edges.map(({ node }) => (
          <li key={node._sys.filename}>
            <Link href={`/blog/${node._sys.filename}`}>
              <h2>{node.title}</h2>
              <p>{node.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
