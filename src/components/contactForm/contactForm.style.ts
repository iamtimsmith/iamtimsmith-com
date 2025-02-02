import styled from 'styled-components';
import {IAlert} from './contactForm.i';

export const Alert = styled.section<IAlert>`
	color: ${(props) =>
		props.status === 'success' ? `var(--teal-500)` :
		props.status === 'error' ? 'red' :
		'black'};
`;

export const Field = styled.div`
	margin-top: 20px;

	label {
		font-size: 1.6rem;
		display: block;
		line-height: 1.2;
	}
	input {
		width: 100%;
		font-size: 2.2rem;
		padding: 10px;
		border-radius: 0;
		border: 1px solid var(--grey-200);
	}
	textarea {
		width: 100%;
		font-family: var(--sans-serif);
		font-size: 2.2rem;
		padding: 10px;
		border-radius: 0;
		border: 1px solid var(--grey-200);
		height: 200px;
		resize: none;
	}
`;
