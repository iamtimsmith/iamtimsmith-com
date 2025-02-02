import React from 'react';
import {Heart} from './heart/heart';
import {Section, Meta} from './footer.style';

export const Footer = () => {
	return (
		<Section data-testid='footer'>
			<Meta>Made with <Heart /> by Tim Smith</Meta>
		</Section>
	);
};
