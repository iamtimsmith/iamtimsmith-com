import React from 'react';
import PropTypes from 'prop-types';
import {Link as ScrollLink, animateScroll as scroll} from "react-scroll";
import {A, GatsbyLink} from './link.style';
import {IProps} from './link.i';

export const Link = ({to, children}: IProps) => {
	if (to.indexOf(`://`) >= 0) return (
		<A href={to} target='_blank' rel='noopener nofollow'>{children}</A>
	);
	if (to.indexOf(`#`) === 0) return (
		<ScrollLink to={to.replace(`#`, ``)} smooth={true}>{children}</ScrollLink>
	)
	return <GatsbyLink to={to}>{children}</GatsbyLink>
}

Link.propTypes = {
	to: PropTypes.string,
	children: PropTypes.node,
}
