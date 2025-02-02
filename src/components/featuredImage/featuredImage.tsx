import React from 'react';
import {Image} from './featuredImage.style';
import {IProps} from './featuredImage.i';

export const FeaturedImage = ({fluid, alt}: IProps) => {
	return (
		<Image
			fluid={fluid}
			alt={alt}
		/>
	);
}
