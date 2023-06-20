import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../tina/__generated__/client";
import { Gif } from "../components/gif";
import { EmailSignup } from "../components/signup";
import { Code } from "../components/code";

const PageTemplate = (props) => {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	});

	return (
		<>
			<h1>{data.page.title}</h1>
			<TinaMarkdown
				content={data.page.body}
				components={{
					gif: (props) => <Gif {...props} />,
					email_signup: (props) => <EmailSignup {...props} />,
					code_block: Code,
				}}
			/>
		</>
	);
};

export const getStaticProps = async ({ params }) => {
	let data = {};
	let query = {};
	let variables = { relativePath: `${params.filename}.mdx` };
	try {
		const res = await client.queries.page(variables);
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
