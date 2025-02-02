import {useStaticQuery, graphql} from 'gatsby';

export const useHomeQuery = () => {
	const data = useStaticQuery(graphql`
		query {
			heroImage: file(name: {eq:"timsmith-teal"}) {
				childImageSharp {
					fluid(maxWidth: 600) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}

			recentPosts: allMarkdownRemark(filter:{fileAbsolutePath: {regex:"/blog/i"}, frontmatter:{published:{eq:true}}} sort:{fields:fields___date, order: DESC} limit: 3) {
				nodes {
					frontmatter {
						title
						featured_image {
							childImageSharp {
								fluid(maxWidth: 400) {
									...GatsbyImageSharpFluid_withWebp_noBase64
								}
							}
						}
						tags
					}
					fields {
						slug
					}
					excerpt
				}
			}

			projects: allMarkdownRemark(filter:{fileAbsolutePath:{regex:"/projects/ig"}} sort:{fields:fields___date, order:DESC} limit:3) {
				nodes {
					frontmatter {
						title
						featured_image {
							childImageSharp {
								fluid(maxWidth: 1024) {
									...GatsbyImageSharpFluid_withWebp_noBase64
								}
							}
						}
						tags
						url
					}
					fields {
						date(formatString: "YYYY")
					}
					html
				}
			}
		}
	`);

	return data;
}
