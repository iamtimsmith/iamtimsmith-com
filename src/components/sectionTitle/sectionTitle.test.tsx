import React from 'react';
import {render} from '@testing-library/react';
import {SectionTitle} from './sectionTitle';

describe(`<SectionTitle />`, () => {
	it(`renders the title as h2`, () => {
		const {queryByRole} = render(<SectionTitle title='Hello' as='h2' />);
		const title = queryByRole(`heading`, {name: /hello/i, level: 2});
		expect(title).toBeInTheDocument();
	});

	it(`renders the title as h3`, () => {
		const {queryByRole} = render(<SectionTitle title='Hello' as='h3' />);
		const title = queryByRole(`heading`, {name: /hello/i, level: 3});
		expect(title).toBeInTheDocument();
	});

	it(`renders the link`, () => {
		const {queryByRole} = render(<SectionTitle title='Hello' link={{href: '/', text: 'Home'}} />);
		const link = queryByRole(`link`, {name: /home/i});
		expect(link).toBeInTheDocument();
	});
});
