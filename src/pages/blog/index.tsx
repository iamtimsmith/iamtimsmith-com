import client from "../../../tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import { Layout, PostSummary } from "../../components";
import { Post } from "../../../tina/__generated__/types";

const PostsPage = (props) => {
	const { data } = useTina({
		data: props.data,
		query: props.query,
		variables: props.variables,
	});

	return (
		<Layout {...data.global}>
			<h1>Posts</h1>
			{data.postConnection.edges.map(({ node }: { node: Post }) => (
				<PostSummary post={node} key={node._sys.filename} />
			))}
		</Layout>
	);
};

export const getStaticProps = async () => {
	const { data, query, variables } = await client.queries.paginationQuery();

	return {
		props: {
			data,
			query,
			variables,
		},
	};
};

export default PostsPage;
