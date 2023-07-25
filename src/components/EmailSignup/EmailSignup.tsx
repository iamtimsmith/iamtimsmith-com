"use client";
import { FormEvent, useRef, useState } from "react";
import { Template } from "tinacms";
import styles from "./styles.module.css";

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
    <form className={styles.emailSignup} onSubmit={subscribeUser}>
      <p className={styles.emailSignupTitle}>Sign up for my mailing list!</p>
      {(message.success && <p>{message.success}</p>) || (
        <>
          <p>
            By signing up, you&apos;ll receive a monthly email with my latest
            blog posts about development, career, and more.
          </p>
          <input
            type="email"
            className={styles.emailSignupInput}
            id="email-input"
            name="email"
            placeholder="kevin.malone@dundermifflin.com"
            ref={inputRef}
            aria-label="Email Address"
            required
          />
          <button
            className={styles.emailSignupButton}
            type="submit"
            value=""
            name="subscribe"
          >
            Subscribe
          </button>
          {message.error && (
            <p className={styles.emailSignupError}>{message.error}</p>
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
