import React from 'react';
import {render} from '@testing-library/react';
import {Link} from 'components';

describe(`<Link />`, () => {
	it(`renders the link`, () => {
		const {queryByRole} = render(<Link to='/'>Link</Link>)
		const link = queryByRole(`link`);
		expect(link).toBeInTheDocument();
	});

	it(`renders external links with _blank`, () => {
		const {queryByRole} = render(<Link to='https://www.iamtimsmith.com'>Link</Link>);
		const link = queryByRole(`link`);
		expect(link).toHaveAttribute(`target`, `_blank`);
	});

	it(`renders external links with rel`, () => {
		const {queryByRole} = render(<Link to='https://www.iamtimsmith.com'>Link</Link>);
		const link = queryByRole(`link`);
		expect(link).toHaveAttribute(`rel`, `noopener nofollow`);
	});

	it(`renders internal links normally`, () => {
		const {queryByRole} = render(<Link to='/'>Link</Link>);
		const link = queryByRole(`link`);
		expect(link).not.toHaveAttribute(`target`, `_blank`);
	});
});
