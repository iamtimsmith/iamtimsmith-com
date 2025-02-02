import {FluidObject} from 'gatsby-image';

export interface IHero {
	title: string;
	content: string;
	image: FluidObject;
	link?: {
		url: string;
		text: string;
	};
}
