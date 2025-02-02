import React from 'react';
import PropTypes from 'prop-types';
import {Layout, Showcase, PageTitle, SEO} from 'components';
import {IProject} from 'types';
import {useProjectsQuery} from 'hooks';

const ProjectsPage = () => {
	const {projects} = useProjectsQuery();

	return (
		<Layout>
			<SEO title='Projects' />
			<PageTitle title='Projects' />
			<React.Fragment>
				{projects.nodes.map((project: IProject, id: number) => (
					<Showcase
						key={id}
						title={{text: project.frontmatter.title, type: `h2`}}
						image={project.frontmatter.featured_image.childImageSharp.fluid}
						date={{date: project.fields.date, year: true}}
						content={project.html}
						tags={project.frontmatter.tags}
						link={{to: project.frontmatter.url, text: `Visit Site`}}
						align={id % 2 === 0 ? `right` : `left`}
					/>
				))}
			</React.Fragment>
		</Layout>
	);
};

ProjectsPage.propTypes = {
	data: PropTypes.object,
};

export default ProjectsPage;
