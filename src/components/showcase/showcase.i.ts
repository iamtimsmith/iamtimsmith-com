import {FluidObject} from 'gatsby-image';

export interface IProps {
	image: FluidObject;
	title: {
		text: string;
		type: string;
	};
	content: string;
	link?: {
		to: string;
		text: string;
		title?: boolean;
		image?: boolean;
	};
	align: string;
	mobile?: boolean;
	date?: {
		date: Date | string;
		year?: boolean;
	}
	tags: string;
	button?: boolean;
}

export interface IShowcase {
	align: string;
	mobile?: boolean;
	opacity?: number;
	show?: boolean;
	link?: boolean;
}
