import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import {ContactForm} from './contactForm';

describe(`<ContactForm/>`, () => {
	it(`renders`, () => {
		const {queryByRole} = render(<ContactForm/>);
		const form = queryByRole(`form`);
		expect(form).toBeInTheDocument();
	});

	it(`throws error when no fields are filled out`, () => {
		const {getByText, queryByText} = render(<ContactForm/>);
		const button = getByText(/submit/i);
		fireEvent.click(button);
		const alert = queryByText(/you must fill out/ig);
		expect(alert).toBeInTheDocument();
	});

	it(`throws an error when no email or message are provided`, () => {
		const {getByText, getByRole, queryByText} = render(<ContactForm/>);
		const name = getByRole(`textbox`, {name: /name/i});
		fireEvent.change(name, {target: {value: 'John Doe'}});
		const button = getByText(/submit/i);
		fireEvent.click(button);
		const alert = queryByText(/you must fill out/ig);
		expect(alert).toBeInTheDocument();
	});

	it(`throws an error when no message is provided`, () => {
		const {getByText, getByRole, queryByText} = render(<ContactForm/>);
		const name = getByRole(`textbox`, {name: /name/i});
		fireEvent.change(name, {target: {value: 'John Doe'}});
		const email = getByRole(`textbox`, {name: /email/i});
		fireEvent.change(email, {target: {value: 'test@test.com'}});
		const button = getByText(/submit/i);
		fireEvent.click(button);
		const alert = queryByText(/you must fill out/ig);
		expect(alert).toBeInTheDocument();
	});

	it(`throws an error when message is less than 10 characters`, () => {
		const {getByText, getByRole, queryByText} = render(<ContactForm/>);
		const name = getByRole(`textbox`, {name: /name/i});
		fireEvent.change(name, {target: {value: 'John Doe'}});
		const email = getByRole(`textbox`, {name: /email/i});
		fireEvent.change(email, {target: {value: 'test@test.com'}});
		const message = getByRole(`textbox`, {name: /message/i});
		fireEvent.change(message, {target: {value: 'fake note'}});
		const button = getByText(/submit/i);
		fireEvent.click(button);
		const alert = queryByText(/you must fill out/ig);
		expect(alert).toBeInTheDocument();
	});

	it(`throws a success message when properly filled out`, () => {
		const {getByText, getByRole, queryByText} = render(<ContactForm/>);
		const name = getByRole(`textbox`, {name: /name/i});
		fireEvent.change(name, {target: {value: 'John Doe'}});
		const email = getByRole(`textbox`, {name: /email/i});
		fireEvent.change(email, {target: {value: 'test@test.com'}});
		const message = getByRole(`textbox`, {name: /message/i});
		fireEvent.change(message, {target: {value: 'fake message'}});
		const button = getByText(/submit/i);
		fireEvent.click(button);
		const alert = queryByText(/thanks/ig);
		expect(alert).toBeInTheDocument();
	});
});
