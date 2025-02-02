import styled from 'styled-components';
import {media} from 'styles';
import {IOffcanvas} from './offcanvas.i';

export const Toggle = styled.button<IOffcanvas>`
	position: relative;
	z-index: 3;
	background: none !important;
	border: none;
	box-shadow: none;
	cursor: pointer;
	outline: none;

	${props => props.show ? `
		position: fixed;
		// top: 41px;
		right: 15px;
	` : ``}

	${media.desktop} {
		display: none;
	}

	span {
		display: block;
		height: 2px;
		width: 35px;
		position: relative;
		background: ${props => props.show ? `var(--grey-0)` : `var(--grey-900)`};
		${props => props.show ?
			`transition: top 0.3s linear, transform 0.3s ease-in-out 0.7s, background 0.5s;` :
			`transition: transform 0.3s ease-in-out, top 0.3s linear 0.7s, background 1s;`}

		&:first-child {
			${props => props.show ?
				`top: 0px;
				transform: rotate(45deg);` :
				`top: -5px;
				transform: rotate(auto);`}
		}
		&:last-child {
			${props => props.show ?
				`top: -2px;
				transform: rotate(-45deg);` :
				`top: 5px;
				transform: rotate(auto);`}
		}
	}
`;

export const Aside = styled.aside<IOffcanvas>`
	background: var(--grey-900);
	position: fixed;
	top: 0;
	bottom: 0;
	right: -300px;
	width: 300px;
	z-index: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 0.5s linear;
	overflow-x: hidden !important;
	${props => props.show ? `
		right: 0;
		width: 100%;
	` : ``}
`;

export const Nav = styled.nav`
	display: flex !important;
	flex-direction: column;
	text-align: center;
	a {
		color: var(--light);
		background: none;
		display: block;
		font-size: 2.8rem;
		line-height: 2.5 !important;
		text-transform: uppercase;
		font-weight: 700;
	}
`;

export const Social = styled.nav`
	display: flex !important;
	margin-top: 100px;
`;

export const Icon = styled.a`
	background: none;
	font-size: 3rem;
	padding: 0 15px;
	svg {
		fill: var(--grey-200);
		transition: all 0.3s;
	}
	&:hover svg {
		fill: var(--grey-0);
	}
`;
