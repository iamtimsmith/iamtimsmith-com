import {createGlobalStyle} from 'styled-components';
// import {link} from 'components/link/link.style';
import {reset, button} from 'styles';

export const GlobalStyles = createGlobalStyle`
	${reset}
	:root {
		// Colors
		--grey-0: #ffffff;
		--grey-50: #f2f2f2;
		--grey-100: #d9d9d9;
		--grey-200: #bfbfbf;
		--grey-300: #a6a6a6;
		--grey-400: #8c8c8c;
		--grey-500: #737373;
		--grey-600: #595959;
		--grey-700: #404040;
		--grey-800: #262626;
		--grey-900: #0d0d0d;

		--teal-50: #e4fcf7;
		--teal-100: #c0f1e8;
		--teal-200: #9be7d8;
		--teal-300: #75ddc9;
		--teal-400: #51d4b9;
		--teal-500: #3bbba0;
		--teal-600: #2d917c;
		--teal-700: #1e6759;
		--teal-800: #0e3f35;
		--teal-900: #001612;
		// Typography
		--sans-serif: 'Open Sans', arial, helvetica, sans-serif;
		--h1: 3.6rem;
		--h2: 3rem;
		--h3: 2.4rem;
		--h4: 2rem;
	}

	*, *:before, *:after {
		box-sizing: border-box;
	}

	html, body {
		max-width: 100%;
		overflow-x: hidden;
	}

	html {
		font-size: 10px;
	}

	body {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		font-size: 2.2rem;
		font-family: var(--sans-serif);
		font-weight: 100;
		line-height: 1.6;
		color: var(--grey-700);
		background: var(--grey-0);
	}

	h1, h2, h3, h4, h5 {
		text-transform: uppercase;
		line-height: 1.3;
		font-weight: 700;
	}
	h1 {
		font-size: var(--h1);
	}
	h2 {
		font-size: var(--h2);
	}
	h3 {
		font-size: var(--h3);
	}
	a {
		color: var(--grey-700);
		text-decoration: none;
		cursor: pointer;

		background: linear-gradient(
			transparent 0%,
			transparent calc(50% - 9px),
			var(--teal-100) calc(50% - 9px),
			var(--teal-100) 100%
		);
		background-size: 100% 200%;
		background-position: 0px 0px;
		word-break: break-word;
		transition: background-position 0.3s;

		&:hover {
			background-position: 0px 100%;
		}
	}
	input, textarea, select {
		background: var(--grey--0);
	}
	button, input[type='submit'] {
		padding: 15px 25px;
		color: var(--grey-900);
		font-size: 2.2rem;
		font-weight: 700;
		text-transform: uppercase;
		border-radius: 0;
		border: 2px solid var(--grey-900);
		background: transparent;
		transition: all 0.3s;
		cursor: pointer;

		&:hover {
			background: var(--grey-900);
			color: var(--grey-0);
		}
		&:focus, &:active {
			border: 2px solid var(--grey-900);
			outline: none;
		}
	}

	.gatsby-image-wrapper {
		position: relative;

		[aria-hidden='true'] {
			display: none !important;
		}

		picture, img {
			position: relative !important;
		}
	}
`;
