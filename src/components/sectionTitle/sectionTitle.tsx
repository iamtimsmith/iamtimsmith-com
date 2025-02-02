import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import {Header} from './sectionTitle.style';
import {IProps} from './sectionTitle.i';

export const SectionTitle = ({title, as=`h2`, link}: IProps) => {
	return (
		<Header>
			{as === `h2` && <h2>{title}</h2>}
			{as === `h3` && <h3>{title}</h3>}
			{link &&
				<Link to={link.href}>{link.text} →</Link>
			}
		</Header>
	);
};

SectionTitle.propTypes = {
	title: PropTypes.string,
	as: PropTypes.string,
	link: PropTypes.object,
}
