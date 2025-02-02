import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';
import {ISeoProps} from './seo.i';

export const SEO = ({title, description, image, slug, children}: ISeoProps) => {
	const {site, favicon, social} = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					siteUrl
				}
			}
			favicon: file(name: {eq: "favicon"}) {
				publicURL
			}
			social: file(name: {eq: "timsmith-social"}) {
				publicURL
			}
		}
	`);

	return (
		<Helmet htmlAttributes={{lang: `en`}} titleTemplate={`%s | ${site.siteMetadata.title}`}>
			<title>{title}</title>
			<meta name='description' content={description || site.siteMetadata.description} />
			<link rel='canonical' href={`${site.siteMetadata.siteUrl}${slug}`} />
			<link rel='shortcut icon' href={favicon.publicURL} />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:site' content='@iam_timsmith' />
			<meta name='og:title' content={title} />
			<meta name='og:description' content={description || site.siteMetadata.description} />
			<meta name='og:image' content={`${site.siteMetadata.siteUrl}${image || social.publicURL}`} />
			<meta name='og:type' content='website' />
			<meta name='og:url' content={`${site.siteMetadata.siteUrl}/${slug}`} />
			<meta name='og:site_name' content={site.siteMetadata.title} />
			{children}
		</Helmet>
	);
}

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	slug: PropTypes.string,
	children: PropTypes.node,
}
