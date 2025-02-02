import {FluidObject} from 'gatsby-image';

export interface IPost {
	frontmatter: {
		title: string;
		description: string;
		tags: string;
		featured_image: {
			childImageSharp: {
				fluid: FluidObject;
			}
		}
	}
	fields: {
		date: Date;
		slug: string;
	}
	excerpt: string;
	html: string;
}
