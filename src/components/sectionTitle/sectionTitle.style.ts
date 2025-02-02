import styled from 'styled-components';
import {media} from 'styles';

export const Header = styled.header`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	padding: 50px 0 0;
	margin-bottom: 10px;

	+ section {
		padding-top: 0;
	}

	${media.tablet} {
		flex-direction: row;
		align-items: center;
		margin-bottom: 5px;
	}

	h2, h3 {
		margin: 0 30px 0 0;
		${media.tablet} {
			margin-right: 50px;
		}
	}

	a {
		line-height: 1.2;
	}
`;
