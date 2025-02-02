import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import dayjs from 'dayjs';
import {Layout, FeaturedImage, SectionTitle, Row, Summary, Content, Share, SEO} from 'components';
import {IPost, IPostTemplate} from 'types';

const PostTemplate = ({data}: IPostTemplate) => {
	const {frontmatter, fields, html} = data.post;

	return (
		<Layout>
			<SEO
				title={frontmatter.title}
				description={frontmatter.description}
				image={frontmatter.featured_image.childImageSharp.fluid.src}
				slug={fields.slug}
			/>
			<FeaturedImage fluid={frontmatter.featured_image.childImageSharp.fluid} alt={frontmatter.title} />
			<PostTitle>{frontmatter.title}</PostTitle>
			<PostDate>{dayjs(fields.date).format(`MMMM D, YYYY`)}</PostDate>
			<Share
				url={`https://www.iamtimsmith.com/${fields.slug}`}
				title={frontmatter.title}
				image={frontmatter.featured_image.childImageSharp.fluid.src} />
			<Content html={html} />
			<SectionTitle title='Recent Blog Posts' />
			<Row>
				{data.recent.nodes.map((post: IPost, key: number) => (
					<Summary
						key={key}
						title={post.frontmatter.title}
						content={post.excerpt}
						image={post.frontmatter.featured_image.childImageSharp.fluid}
						tags={post.frontmatter.tags.split(`, `)}
						link={{
							href: post.fields.slug,
							text: post.frontmatter.title
						}}
					/>
				))}
			</Row>
		</Layout>
	);
};

PostTemplate.propTypes = {
	data: PropTypes.object,
}

export default PostTemplate;

export const PostTitle = styled.h1`
	margin: 0;
`;

export const PostDate = styled.p`
	font-size: 1.8rem;
	color: var(--grey-300);
	margin-top: 0;
`;

export const query = graphql`
	query PostQuery($slug: String!) {
		post: markdownRemark(fields:{slug:{eq: $slug}}) {
			frontmatter {
				title
				description
				tags
				featured_image {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid_withWebp_noBase64
							src
						}
					}
				}
			}
			fields {
				date
				slug
			}
			excerpt
			html
		}
		recent: allMarkdownRemark(
			filter:{fileAbsolutePath: {regex:"/blog/i"} fields: {slug: {ne: $slug}}}
			sort:{fields:fields___date, order: DESC}
			limit: 3
		) {
			nodes {
				excerpt
				frontmatter {
					title
					tags
					featured_image {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid_withWebp_noBase64
							}
						}
					}
				}
				fields {
					slug
				}
			}
		}
	}
`;
