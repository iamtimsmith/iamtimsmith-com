import React from 'react';
import PropTypes from 'prop-types';
import {Title} from './pageTitle.style';
import {IProps} from './pageTitle.i';

export const PageTitle = ({title}: IProps) => {
	return (
		<Title>
			<h1>{title}</h1>
		</Title>
	);
}

PageTitle.propTypes = {
	title: PropTypes.string.isRequired,
}
