import React from 'react';
import {render} from '@testing-library/react';
import {Offcanvas} from './offcanvas';

describe(`<Offcanvas />`, () => {
	it(`renders`, () => {
		const {queryByRole} = render(<Offcanvas />);
		const offcanvas = queryByRole(`complementary`);
		expect(offcanvas).toBeInTheDocument();
	});

	it(`Shows the menu`, () => {
		const {queryByTestId} = render(<Offcanvas />);
		expect(queryByTestId(`mobile`)).toBeInTheDocument();
	});

	it(`Shows the Home link`, () => {
		const {queryByTestId} = render(<Offcanvas />);
		expect(queryByTestId(`mobilehome`)).toBeInTheDocument();
	});

	it(`Shows the projects link`, () => {
		const {queryByTestId} = render(<Offcanvas />);
		expect(queryByTestId(`mobileprojects`)).toBeInTheDocument();
	});

	it(`Shows the blogs link`, () => {
		const {queryByTestId} = render(<Offcanvas />);
		expect(queryByTestId(`mobileblog`)).toBeInTheDocument();
	});
});
