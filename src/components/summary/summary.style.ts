import styled from "styled-components";
import {media} from 'styles';
import {Link} from 'components/link/link';
import {ITitle} from './summary.i';

export const Row = styled.div`
	display: grid;
	grid-template-columns: 100%;
	justify-content: space-between;

	${media.desktop} {
		grid-template-columns: 31% 31% 31%;
	}
`;

export const Article = styled.article`
	position: relative;
	margin-bottom: 100px;

	> a:hover + h2 a,
	> a:hover + h3 a {
		background-position: 0px 100%;
	}

	h2, h3 {
		font-size: var(--h3);
		margin: 5px 0;
	}
`;

export const Content = styled.p`
	margin: 20px 0 10px;
`;

export const SummaryDate = styled.p`
	color: var(--grey-200);
`;

export const Tags = styled.p`
	font-size: 1.4rem;
	span {
		display: inline-block;
		background: var(--grey-100);
		color: var(--grey-900);
		padding: 0 5px;
		margin: 0 5px;
		opacity: 0.6;
		border-radius: 1px;
		&:first-child {
			margin-left: 0;
		}
	}
`;
