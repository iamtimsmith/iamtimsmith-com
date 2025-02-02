import React from 'react';
import PropTypes from 'prop-types';
import {Layout, PageTitle, Showcase, Row, Summary, SEO} from 'components';
import {IPost} from 'types';
import {useBlogQuery} from 'hooks';

const BlogPage = () => {
	const {blog} = useBlogQuery();
	return (
		<Layout>
			<SEO title='Blog' />
			<PageTitle title='Blog' />
			<Showcase
				title={{text: blog.nodes[0].frontmatter.title, type: `h2`}}
				content={blog.nodes[0].excerpt}
				image={blog.nodes[0].frontmatter.featured_image.childImageSharp.fluid}
				tags={blog.nodes[0].frontmatter.tags}
				link={{to: blog.nodes[0].fields.slug, text: `Read More`, title: true, image: true}}
				align='right'
				mobile
			/>
			<Row>
				{blog.nodes.map((post: IPost, id: number) => {
					if (id > 0) return (
						<Summary
							key={id}
							title={post.frontmatter.title}
							content={post.excerpt}
							image={post.frontmatter.featured_image.childImageSharp.fluid}
							tags={post.frontmatter.tags.split(/\,?\s/ig)}
							link={{
								href: post.fields.slug,
								text: post.frontmatter.title
							}}
						/>
					);
				})}
			</Row>
		</Layout>
	);
};

BlogPage.propTypes = {
	data: PropTypes.object,
};

export default BlogPage;
