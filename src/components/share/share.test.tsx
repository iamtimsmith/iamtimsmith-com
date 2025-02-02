import React from 'react';
import {render} from '@testing-library/react';
import {Share} from './share';

describe(`<Share />`, () => {
	it(`renders`, () => {
		const {queryByTestId} = render(<Share url='' title='' image='' />);
		const sharebar = queryByTestId(`share`);
		expect(sharebar).toBeInTheDocument();
	});
});
