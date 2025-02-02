const path = require(`path`);

const getSlug = filepath => {
	return filepath.split(`-`).splice(3).join(`-`).replace(/\.mdx?/ig, ``);
}

const getDate = filepath => {
	let filename = filepath.split(`-`).splice(0, 3).join(`-`);
	return new Date(filename);
}


exports.createPages = ({graphql, actions}) => {
	const {createPage} = actions;

	return graphql(`
		query {
			allMarkdownRemark(
				filter:{fileAbsolutePath:{regex:"/blog/i"}, frontmatter:{published:{eq:true}}}
			) {
				nodes {
					fileAbsolutePath
					fields {
						slug
					}
					frontmatter {
						published
					}
				}
			}
		}
	`).then(res => {
		if (res.errors) throw res.errors;
		res.data.allMarkdownRemark.nodes.forEach(node => {
			createPage({
				path: `/blog/${getSlug(node.fileAbsolutePath)}`,
				component: path.resolve(`src/templates/post.tsx`),
				context: {slug: node.fields.slug}
			});
		});
	});
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `MarkdownRemark`) {
		const post = getNode(node.parent);
		if (post.sourceInstanceName === 'posts') {
			createNodeField({
				node,
				name: `slug`,
				value: `/blog/${getSlug(post.relativePath)}`
			});
		}
		createNodeField({
			node,
			name: `date`,
			value: getDate(post.relativePath)
		});
	}
}
