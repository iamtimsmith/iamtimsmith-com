import { Template } from "tinacms"

export const EmailSignup = ({ title }: any) => {
	return (
		<aside className='signup'>
			<p>{title || 'EMAIL SIGNUP BLOCK'}</p>
		</aside>
	)
}

export const SignupSchema: Template = {
	name: 'EmailSignup',
	label: 'Email Signup',
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'string',
		}
	]
}
