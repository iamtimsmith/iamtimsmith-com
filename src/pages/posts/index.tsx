import Link from "next/link";
import client from "../../../tina/__generated__/client";
import { useTina } from "tinacms/dist/react";

const PostsPage = (props) => {
	const { data } = useTina({
		data: props.data,
		query: props.query,
		variables: props.variables,
	});

	return (
		<div>
			<h1>Posts</h1>
			<ul style={{ listStyle: "none", margin: 0 }}>
				{data.postConnection.edges.map(({ node: post }) => (
					<li
						key={post.cursor}
						style={{
							padding: "1rem 0",
							borderBottom: "1px solid var(--color-border)",
						}}
					>
						<Link href={`/posts/${post._sys.filename}`}>
							<strong style={{ display: "block", margin: 0 }}>
								{post.title}
							</strong>
						</Link>
						<span
							style={{
								display: "block",
								fontSize: "0.7rem",
								color: "var(--color-grey--400)",
							}}
						>
							{post.date} -{" "}
							{post.published ? "Published" : "Not published"}
						</span>
						{post.excerpt}
					</li>
				))}
			</ul>
		</div>
	);
};

export const getStaticProps = async () => {
	const { data, query, variables } = await client.queries.postConnection({
		sort: "date",
		last: 1000,
	});

	return {
		props: {
			data,
			query,
			variables,
		},
	};
};

export default PostsPage;
