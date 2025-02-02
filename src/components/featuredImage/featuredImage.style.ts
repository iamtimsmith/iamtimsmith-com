import styled from 'styled-components';
import Img from 'gatsby-image';
import {IFeaturedImage} from './featuredImage.i';

export const Image = styled(Img)<IFeaturedImage>`
	max-height: 600px;
	display: flex;
	justify-content: center;
	align-items: center;

	picture {
		width: 100%;
	}
`;
