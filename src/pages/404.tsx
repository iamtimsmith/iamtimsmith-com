import React from "react";
import {Layout, Hero, Row, Summary, SEO} from 'components';
import {IPost} from 'types';
import {useNotFoundQuery} from 'hooks';

const NotFoundPage = () => {
	const {heroImage, recentPosts} = useNotFoundQuery();

	return (
		<Layout>
			<SEO title='404' />
			<Hero
				title='Page Not Found'
				content={`The page you're looking for seems to be missing. Here are some
        blog posts that might interest you though...`}
				image={heroImage.childImageSharp.fluid}
			/>
			<Row>
				{recentPosts.nodes.map((post: IPost, key: number) => (
					<Summary
						key={key}
						title={post.frontmatter.title}
						content={post.excerpt}
						image={post.frontmatter.featured_image.childImageSharp.fluid}
						tags={post.frontmatter.tags.split(/\,?\s/ig)}
						link={{
							href: post.fields.slug,
							text: post.frontmatter.title
						}}
					/>
				))}
			</Row>
		</Layout>
	)
}

export default NotFoundPage;
