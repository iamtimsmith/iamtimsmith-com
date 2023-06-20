import Link from "next/link";
import client from "../../tina/__generated__/client";
import { useTina } from "tinacms/dist/react";

const PagesPage = (props) => {
	const { data } = useTina({
		data: props.data,
		query: props.query,
		variables: props.variables,
	});

	return (
		<div>
			<h1>Pages</h1>
			<ul style={{ listStyle: "none", margin: 0 }}>
				{data.pageConnection.edges.map(({ node: page }) => (
					<li
						key={page.cursor}
						style={{
							padding: "1rem 0",
							borderBottom: "1px solid var(--color-border)",
						}}
					>
						<Link href={`/${page._sys.filename}`}>
							<strong style={{ display: "block", margin: 0 }}>
								{page.title}
							</strong>
						</Link>
						{page.excerpt}
					</li>
				))}
			</ul>
		</div>
	);
};

export const getStaticProps = async () => {
	const { data, query, variables } = await client.queries.pageConnection();

	return {
		props: {
			data,
			query,
			variables,
		},
	};
};

export default PagesPage;
