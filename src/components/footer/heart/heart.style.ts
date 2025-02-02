import styled, {keyframes} from 'styled-components';

const pulse = keyframes`
	0% {height: 10px}
	50% {height: 12px}
	100% {height: 10px}
`;

export const Container = styled.span`
	display: inline-block;
	width: 20px;
	text-align: center;
`;

export const Shape = styled.svg`
	animation: ${pulse} 1.25s linear infinite;
	fill: var(--teal-300);
`;
