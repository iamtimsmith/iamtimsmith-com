import { Template } from "tinacms"

export const EmailSignup = ({ hidden }: any) => {
	return (
		<aside className='signup'>
			<p>EMAIL SIGNUP BLOCK</p>
		</aside>
	)
}

export const SignupSchema: Template = {
	name: 'EmailSignup',
	label: 'Email Signup',
	fields: [
		{
			name: 'hidden',
			label: 'Hidden',
			description: 'There are currently no fields for this, but a field is required for use.',
			type: 'string',
		}
	]
}
