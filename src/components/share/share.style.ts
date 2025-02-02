import styled from 'styled-components';
import {media} from 'styles';
import {IShareBar, IShareButton} from './share.i';

export const ShareBar = styled.aside<IShareBar>`
	margin-bottom: 50px;

	${media.desktop} {
		position: fixed;
		top: 0;
		bottom: 0;
		left: ${(props) => props.visible ? 0 : -100}px;
		width: 50px;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		transition: all 0.3s;
	}
`;

export const ShareNav = styled.nav`
	display: flex;
	align-items: center;
	flex-wrap: wrap;

	${media.desktop} {
		height: 500px;
		justify-content: center;
		flex-direction: column;
	}
`;

export const ShareText = styled.p`
	font-size: 1.6rem;
	color: var(--grey-300);
	margin: 0 15px 0 0;

	${media.desktop} {
		text-align: center;
	}
`;

export const ShareButton = styled.a<IShareButton>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
	width: 60px;
	font-size: 3rem;
	color: white;
	transition: all 0.3s;
	background: ${(props) =>
		props.site === 'facebook' ? `#3b5998` :
		props.site === 'twitter' ? `#1da1f2` :
		props.site === 'linkedin' ? `#0077b5` :
		props.site === 'pinterest' ? `#bd081c` :
		`var(--grey-300)`
	};

	&:hover {
		background: ${(props) =>
			props.site === 'facebook' ? `#36518c` :
			props.site === 'twitter' ? `#1b98e5` :
			props.site === 'linkedin' ? `#006da8` :
			props.site === 'pinterest' ? `#af071a` :
			`var(--grey-400)`
		};
	}
`;
