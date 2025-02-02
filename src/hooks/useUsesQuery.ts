import {useStaticQuery, graphql} from 'gatsby';

export const useUsesQuery = () => {
	const data = useStaticQuery(graphql`
		query {
			heroImage: file(name: {eq:"uses"}) {
				childImageSharp {
					fluid(maxWidth: 600) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
		}
	`);

	return data;
}
