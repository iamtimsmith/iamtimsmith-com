import styled from "styled-components";
import {media} from 'styles';

export const Title = styled.header`
	margin-top: 50px;
	h1 {
		font-size: 5rem;
		margin: 0;
		color: var(--grey-100);
		top: 0;
		line-height: 0;

		${media.tablet} {
			font-size: 8rem;
		}
		${media.desktop} {
			font-size: 10rem;
		}
	}
`;
