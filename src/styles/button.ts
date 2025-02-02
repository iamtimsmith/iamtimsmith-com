export const button = `
	padding: 15px 25px;
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
`;
