import styled from 'styled-components';
import {media} from 'styles';

export const Container = styled.main`
	margin: 0 auto;
	padding: 0 15px;

	${media.desktop} {
		padding: 0 100px;
	}
	${media.widescreen} {
		padding: 0 150px;
	}
	${media.extrawide} {
		max-width: 1200px;
		padding: 0 15px;
	}
`;
