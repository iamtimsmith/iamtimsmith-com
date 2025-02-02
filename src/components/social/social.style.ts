import styled from 'styled-components';
import {media} from 'styles';

export const Aside = styled.aside`
	display: none;

	${media.desktop} {
		width: 50px;
		display: flex;
		min-height: 400px;
		max-height: 600px;
		width: 40px;
		justify-content: center;
		align-items: center;
		position: fixed;
		right: 20px;
		bottom: 0;
		background: var(--grey-0);
	}

	&:after {
		content: '';
		display: block;
		width: 50%;
		position: absolute;
		top: 50%;
		bottom: 0;
		left: 0;
		border-right: 1px solid var(--grey-200);
		z-index: -1;
	}
`;

export const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: var(--grey-0);
	padding-bottom: 30px;
`;

export const Icon = styled.a`
	display: block;
	color: var(--grey-200);
	font-size: 2.4rem;
	line-height: 2;
	background: none !important;
	transition: color 0.2s;
	&:hover {
		color: var(--grey-900);
		svg {
			text-shadow: 0 0 20px var(--grey-900);
		}
	}
	&:after {
		display: none;
	}
`;
