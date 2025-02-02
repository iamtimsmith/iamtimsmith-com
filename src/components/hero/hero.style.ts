import styled from 'styled-components';
import {media, button} from 'styles';

export const Section = styled.section`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	padding: 0 0 50px;
	min-height: 750px;

	${media.desktop} {
		padding: 50px 0;
	}

	h1 {
		text-transform: uppercase;
		margin: 0;
		strong {
			position: relative;
			&:after {
				content: '';
				display: block;
				position: absolute;
				left: 0;
				right: 0;
				bottom: 5px;
				width: 0;
				height: 10px;
				background: var(--primary);
				z-index: -1;
				transition: all 0.3s ease-in-out;
			}
			&:nth-child(1):after{
					animation: onLoad 1s ease-in-out forwards;
				}
				&:nth-child(2):after {
					animation: onLoad 1s ease-in-out 1s forwards;
				}
			&:hover:after {
				transform: rotate(3deg);
			}
		}
	}
	p {
		font-size: 2.4rem;
		line-height: 1.8;
		margin: 30px 30px 30px 0;
	}

	svg {
		position: absolute;
		width: 40%;
		height: auto;
		right: 0;
		opacity: 0.9;
		z-index: -1;
	}

	@keyframes onLoad {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}
`;

export const Button = styled.a`
	${button}
	padding: 10px;
	margin: 30px 0;
`;

export const Content = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	${media.desktop} {
		flex-direction: row;
	}
`;

export const Copy = styled.div`
	order: 2;
	flex: 2;
	${media.desktop} {
		order: 1;
	}
`;

export const Figure = styled.figure`
	order: 1;
	display: flex;
	align-items: center;
	flex: 1;

	${media.desktop} {
		order: 2;
	}

	.gatsby-image-wrapper {
		${media.extrawide} {
			width: 500px;
		}
	}

	picture, img {
		opacity: 0.7;
		max-width: 100%;
	}
`;
