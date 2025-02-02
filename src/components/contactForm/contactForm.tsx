import React, {useState} from 'react';
import {encode} from 'utils';
import {Field, Alert} from './contactForm.style';

export const ContactForm = () => {
	const [status, setStatus] = useState('');
	const [alert, setAlert] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleForm = (e: any) => {
		e.preventDefault();
		// If form is filled out
		if (name.length > 1 && email.length > 7 && message.length > 10) {
			fetch('/', {
				method: 'post',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				body: encode({'form-name': 'contact', name, email, message})
			});
			setStatus('success');
			setAlert(`Thanks for reaching out! I'll be in contact as soon as possible.`);
			setName('');
			setEmail('');
			setMessage('');
		} else {
			// If form is not filled out
			setStatus('error');
			setAlert(`You must fill out all of the fields and your message must be at least 10 characters long.`);
		}
	}

	return (
		<form onSubmit={e => handleForm(e)} name='contact' id='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field' role='form'>
			{(status && alert) && <Alert role='alert' status={status}>{alert}</Alert>}
			<input type="hidden" name="form-name" value="contact" />
			<Field>
				<label htmlFor='name'>Name</label>
				<input type='text' name='name' id='name' onChange={e => setName(e.target.value)} value={name} />
			</Field>
			<Field>
				<label htmlFor='email'>Email</label>
				<input type='text' name='email' id='email'onChange={e => setEmail(e.target.value)} value={email} />
			</Field>
			<Field>
				<label htmlFor='message'>Message</label>
				<textarea name="message" id="message" onChange={e => setMessage(e.target.value)} value={message} />
			</Field>
			<button>Submit</button>
		</form>
	);
}
