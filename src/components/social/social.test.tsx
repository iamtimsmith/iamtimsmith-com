import React from 'react';
import {render} from '@testing-library/react';
import {Social} from './social';

describe(`<Social />`, () => {
	it(`renders`, () => {
		const {queryByTestId} = render(<Social />);
		expect(queryByTestId(`social`)).toBeInTheDocument();
	});

	it(`renders  twitter link`, () => {
		const {queryByLabelText} = render(<Social />);
		const link = queryByLabelText(/twitter/i);
		expect(link).toHaveAttribute(`href`, expect.stringContaining(`twitter.com`));
	});

	it(`renders  linkedin link`, () => {
		const {queryByLabelText} = render(<Social />);
		const link = queryByLabelText(/linkedin/i);
		expect(link).toHaveAttribute(`href`, expect.stringContaining(`linkedin.com`));
	});

	it(`renders github link`, () => {
		const {queryByLabelText} = render(<Social />);
		const link = queryByLabelText(/github/i);
		expect(link).toHaveAttribute(`href`, expect.stringContaining(`github.com`));
	});

	it(`renders dev link`, () => {
		const {queryByLabelText} = render(<Social />);
		const link = queryByLabelText(/dev/i);
		expect(link).toHaveAttribute(`href`, expect.stringContaining(`dev.to`));
	});

	it(`renders an email link`, () => {
		const {queryByLabelText} = render(<Social />);
		const link = queryByLabelText(/email/i);
		expect(link).toHaveAttribute(`href`, expect.stringContaining(`mailto`));
	});
});
