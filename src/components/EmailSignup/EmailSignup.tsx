"use client";
import { FormEvent, useRef, useState } from "react";
import style from "./EmailSignup.module.css";
import { Template } from "tinacms";

export const EmailSignup = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [message, setMessage] = useState({ error: "", success: "" });

	const subscribeUser = async (e: FormEvent) => {
		e.preventDefault();

		const res = await (
			await fetch("/api/newsletter", {
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: inputRef.current?.value,
				}),
				method: "POST",
			})
		).json();

		if (res.error) {
			setMessage({ error: res.error, success: "" });
		}
		if (res.success) {
			setMessage({ error: "", success: res.success });
		}
	};

	return (
		<form className={style.EmailSignup} onSubmit={subscribeUser}>
			<p className={style.EmailSignupTitle}>Sign up for my mailing list!</p>
			{(message.success && <p>{message.success}</p>) || (
				<>
					<p>
						By signing up, you&apos;ll receive a monthly email with my latest
						blog posts about development, career, and more.
					</p>
					<input
						type="email"
						id="email-input"
						name="email"
						placeholder="kevin.malone@dundermifflin.com"
						ref={inputRef}
						aria-label="Email Address"
						required
					/>
					<button type="submit" value="" name="subscribe">
						Subscribe
					</button>
					{message.error && (
						<p className={style.EmailSignupError}>{message.error}</p>
					)}
				</>
			)}
		</form>
	);
};

export const EmailSignupSchema: Template = {
	name: "email_signup",
	label: "Email Signup",
	fields: [
		{
			name: "title",
			label: "Title",
			type: "string",
		},
	],
};
