import styled from 'styled-components';
import {media} from 'styles';
import {IBackToTop} from './backToTop.i';

export const BackToTopStyle = styled.button<IBackToTop>`
	display: none;
	padding: 15px;
	border: none;
	cursor: pointer;
	opacity: ${props => props.show ? 1 : 0};
	visibility: ${props => props.show ? `visible` : `hidden`};
	background: none !important;
	color: var(--grey-200);
	&:hover {
		color: var(--grey-900);
	}
	&:active, &:focus {
		outline: 2px solid var(--teal-100);
	}

	${media.desktop} {
		display: flex;
	}

	svg {
		font-size: 2rem;
	}
`;
