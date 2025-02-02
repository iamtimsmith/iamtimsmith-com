import React from 'react';
import {render} from '@testing-library/react';
import {Layout} from 'components';

describe(`<Layout />`, () => {
	it(`renders`, () => {
		const {queryByRole} = render(<Layout><h1>Hello World</h1></Layout>);
		expect(queryByRole(`main`)).toBeInTheDocument();
	});

	it(`renders the header component`, () => {
		const {queryByRole} = render(<Layout><h1>Hello World</h1></Layout>);
		expect(queryByRole(`banner`)).toBeInTheDocument();
	});

	it(`renders the children`, () => {
		const {queryByRole} = render(<Layout><h1>Hello World</h1></Layout>);
		expect(queryByRole(`heading`, {name: /hello world/i})).toBeInTheDocument();
	});

	it(`renders the social buttons`, () => {
		const {queryByTestId} = render(<Layout><h1>Hello World</h1></Layout>);
		expect(queryByTestId(`social`)).toBeInTheDocument();
	});

	it(`renders the footer`, () => {
		const {queryByRole} = render(<Layout><h1>Hello World</h1></Layout>);
		expect(queryByRole(`contentinfo`)).toBeInTheDocument();
	});
});
