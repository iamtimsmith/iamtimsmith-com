import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../tina/__generated__/client";
import Link from "next/link";
import { tinaField, useTina } from "tinacms/dist/react";
import { AuthorBio, Layout, PostSummary } from "../components";
import { Post } from "../../tina/__generated__/types";

const HomePage = (props) => {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	});

	return (
		<Layout {...data.global}>
			<div data-tina-field={tinaField(data.page, "body")}>
				<TinaMarkdown content={data.page.body} />
			</div>
			<AuthorBio
				author={data.global.author}
				siteName={data.global.header.siteName}
			/>
			<h2>Recent Posts</h2>
			{data.postConnection.edges.map(({ node }: { node: Post }) => (
				<PostSummary post={node} key={node._sys.filename} />
			))}
			<Link href="/blog">View more posts →</Link>
		</Layout>
	);
};

export default HomePage;

export const getStaticProps = async () => {
	let data = {};
	let query = {};

	try {
		const res = await client.queries.homeQuery();
		query = res.query;
		data = res.data;
	} catch {
		// swallow errors related to document creation
	}

	return {
		props: {
			variables: {},
			data,
			query,
		},
	};
};
