import {ElementType} from 'react';
import {FluidObject} from 'gatsby-image';

export interface IProps {
	title: string;
	as?: string;
	content: string;
	date?: string;
	image: FluidObject;
	tags: string[];
	link: {
		href: string;
		text: string;
	};
}

export interface ITitle {
	as: string;
	children: [JSX.Element];
}
