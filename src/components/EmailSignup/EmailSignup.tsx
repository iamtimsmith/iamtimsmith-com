"use client";
import { FC, FormEvent, HTMLAttributes, useState } from "react";
import { subscribe } from "../../helpers/subscribe";
import { validateEmail } from "../../helpers/validateEmail";
import styles from "./styles.module.css";

type EmailSignupProps = HTMLAttributes<HTMLFormElement>;

export const EmailSignup: FC<EmailSignupProps> = ({
  className,
  onSubmit,
  ...props
}) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ error: "", success: "" });
  const isValidEmail = validateEmail(email);

  const subscribeUser = async (e: FormEvent) => {
    e.preventDefault();
    // Make sure email is valid
    if (!isValidEmail) return;
    // Make fetch request to subscribe user or spoof in dev
    const { error, success } = await subscribe(email);
    // Handle error and success messages
    if (error) setMessage({ error, success: "" });
    if (success) setMessage({ error: "", success });
  };

  return (
    <form className={styles.emailSignup} onSubmit={subscribeUser} {...props}>
      <p className={styles.emailSignupTitle}>Sign up for my mailing list!</p>
      {(message.success && <p>{message.success}</p>) || (
        <>
          <p>
            By signing up, you&apos;ll receive a monthly email with my latest
            blog posts about development, career, and more.
          </p>
          <input
            className={styles.emailSignupInput}
            name="email"
            type="email"
            id="email-input"
            placeholder="kevin.malone@dundermifflin.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email Address"
            required
          />
          <button
            className={styles.emailSignupButton}
            type="submit"
            value="Subscribe"
            name="subscribe"
            disabled={!isValidEmail}
          >
            Subscribe
          </button>
          {message.error && (
            <p className={styles.emailSignupError}>{message.error}</p>
          )}
        </>
      )}
      {process.env.NODE_ENV === "development" && (
        <p className={styles.devText}>Responses will not be saved.</p>
      )}
    </form>
  );
};
