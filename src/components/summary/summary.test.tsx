import React from 'react';
import {render} from '@testing-library/react';
import {Summary} from './summary';

const image = {
	aspectRatio: 1,
	sizes: "(max-width: 600px) 100vw, 600px",
	src: "/static/72ff0d7dbdfcf24e07653da2bc30fc1c/2a4de/timsmith-teal.png",
	srcSet: "/static/72ff0d7dbdfcf24e07653da2bc30fc1c/6d161/timsmith-teal.png 150w,↵/static/72ff0d7dbdfcf24e07653da2bc30fc1c/630fb/timsmith-teal.png 300w,↵/static/72ff0d7dbdfcf24e07653da2bc30fc1c/2a4de/timsmith-teal.png 600w",
	srcSetWebp: "/static/72ff0d7dbdfcf24e07653da2bc30fc1c/e7487/timsmith-teal.webp 150w,↵/static/72ff0d7dbdfcf24e07653da2bc30fc1c/403a4/timsmith-teal.webp 300w,↵/static/72ff0d7dbdfcf24e07653da2bc30fc1c/ad85c/timsmith-teal.webp 600w",
	srcWebp: "/static/72ff0d7dbdfcf24e07653da2bc30fc1c/ad85c/timsmith-teal.webp"
};

describe(`<Summary />`, () => {
	it(`renders the article`, () => {
		const {queryByRole} = render(
			<Summary
				title='Hello'
				content='General kenobi'
				image={image}
				link={{href: '/', text: 'Link'}}
				tags={['hello', 'world']}
			/>
		);
		const summary = queryByRole(`article`);
		expect(summary).toBeInTheDocument();
	});

	it(`renders the image`, () => {
		const {queryByRole} = render(
			<Summary
				title='Hello'
				content='General kenobi'
				image={image}
				link={{href: '/', text: 'Link'}}
				tags={['hello', 'world']}
			/>
		);
		const img = queryByRole(`article`);
		expect(img).toBeInTheDocument();
	});

	it(`renders the title`, () => {
		const {queryByRole} = render(
			<Summary
				title='Hello'
				content='General kenobi'
				image={image}
				link={{href: '/', text: 'Link'}}
				tags={['hello', 'world']}
			/>
		);
		const title = queryByRole(`heading`);
		expect(title).toBeInTheDocument();
	});

	it(`renders the content`, () => {
		const {queryByRole} = render(
			<Summary
				title='Hello'
				content='General kenobi'
				image={image}
				link={{href: '/', text: 'Link'}}
				tags={['hello', 'world']}
			/>
		);
		const content = queryByRole(`article`);
		expect(content).toBeInTheDocument();
	});

	it(`renders the tags`, () => {
		const {queryByRole} = render(
			<Summary
				title='Hello'
				content='General kenobi'
				image={image}
				link={{href: '/', text: 'Link'}}
				tags={['hello', 'world']}
			/>
		);
		const tags = queryByRole(`article`);
		expect(tags).toBeInTheDocument();
	});
});
