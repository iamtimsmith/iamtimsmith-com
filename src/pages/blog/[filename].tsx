import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../../tina/__generated__/client";
import {
	Gif,
	EmailSignup,
	CodeBlock,
	Image,
	EmbedCode,
	Layout,
} from "../../components";

const BlogPage = (props) => {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	});

	return (
		<Layout {...data.global}>
			<h1>{data.post.title}</h1>
			<div className="content">
				<TinaMarkdown
					content={data.post.body}
					components={{
						gif: (props) => <Gif {...props} />,
						email_signup: (props) => <EmailSignup {...props} />,
						embed: (props) => <EmbedCode {...props} />,
						code_block: CodeBlock,
						img: (props) => <Image {...props} />,
					}}
				/>
			</div>
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
	const postsListData = await client.queries.postConnection();

	return {
		paths: postsListData.data.postConnection.edges.map((post) => ({
			params: { filename: post.node._sys.filename },
		})),
		fallback: false,
	};
};

export default BlogPage;
