import {useStaticQuery, graphql} from 'gatsby';

export const useProjectsQuery = () => {
	const data = useStaticQuery(graphql`
		query {
			projects: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/ig"}} sort:{fields:fields___date, order:DESC}) {
				nodes {
					fileAbsolutePath
					timeToRead
					frontmatter {
						title
						url
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
						date
					}
					html
				}
			}
		}
	`);

	return data;
}
