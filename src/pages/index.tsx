import React from 'react';
import {Layout, Hero, SectionTitle, Summary, Row, Showcase, ContactForm, SEO} from 'components';
import {IPost, IProject} from 'types';
import {useHomeQuery} from 'hooks';

const HomePage = () => {
	const {heroImage, recentPosts, projects} = useHomeQuery();

	return (
		<Layout>
			<SEO title='Home' />
			<Hero
				title={`Hi, my name is <strong>Tim Smith</strong> and I'm a <strong>developer</strong>`}
				content={`I build back-ends using PHP and Node js with frameworks such as Laravel and Express js. I use React js, Wordpress, Blade, Pug, and more to build enjoyable user experiences on the front-end.`}
				image={heroImage.childImageSharp.fluid}
				link={{url:`#contact`, text: `Get In Touch →`}}
			/>
			<SectionTitle
				title='Recent Blog Posts'
				link={{href: '/blog', text: 'View All'}}
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
			<React.Fragment>
				<SectionTitle
					title='Recent Projects'
					link={{href: '/projects', text: 'View All'}}
				/>
				{projects.nodes.map((project: IProject, key: number) => (
					<Showcase
						key={key}
						title={{text: project.frontmatter.title, type: `h3`}}
						content={project.html}
						link={{to: project.frontmatter.url, text: `Visit Site`}}
						image={project.frontmatter.featured_image.childImageSharp.fluid}
						align={key % 2 === 0 ? `right` : `left`}
						date={{date: project.fields.date, year: true}}
						tags={project.frontmatter.tags}
					/>
				))}
			</React.Fragment>
			<React.Fragment>
				<SectionTitle title='Get In Touch' />
				<ContactForm />
			</React.Fragment>
		</Layout>
	);
}

export default HomePage;
