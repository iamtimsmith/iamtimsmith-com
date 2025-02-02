import {FluidObject} from 'gatsby-image';

export interface IProject {
	frontmatter: {
		title: string;
		featured_image: {
			childImageSharp: {
				fluid: FluidObject;
			}
		};
		tags: string;
		url: string;
	}
	fields: {
		date: Date;
	}
	html: string;
}
