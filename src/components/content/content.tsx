import React from 'react';
import PropTypes from 'prop-types';
import {RenderContent} from './content.style';
import {IContentProps} from './content.i';

export const Content = ({html}: IContentProps) => {
	return (
		<RenderContent dangerouslySetInnerHTML={{__html: html}} />
	);
}

Content.propTypes = {
	html: PropTypes.string,
}
