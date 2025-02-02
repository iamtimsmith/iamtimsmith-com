import styled from 'styled-components';
import {Link} from 'gatsby';

export const link = `
	color: var(--grey-700);
	text-decoration: none;
	cursor: pointer;

	background: linear-gradient(
		transparent 0%,
		transparent calc(50% - 9px),
		var(--teal-100) calc(50% - 9px),
		var(--teal-100) 100%
	);
	background-size: 100% 200%;
	background-position: 0px 0px;
	word-break: break-word;
	transition: background-position 0.3s;

	&:hover {
		background-position: 0px 100%;
	}
`;

export const A = styled.a`
	${link}
`;

export const GatsbyLink = styled(Link)`
	${link}
`;
