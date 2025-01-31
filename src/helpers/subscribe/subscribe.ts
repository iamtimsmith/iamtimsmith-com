import {
  invalidEmail,
  mailchimpApiKey,
  mailchimpApiUrl,
  noEmail,
  subscribeError,
  subscribeSuccess,
} from "../../constants";
import { SubscribeResponse } from "../../types";
import { validateEmail } from "../validateEmail";

/**
 * A function that subscribes an email address to a Mailchimp mailing list
 * @param email_address
 */

export const subscribe = async (
  email_address = "",
  status = 200
): SubscribeResponse => {
  // If no email was provided, return an error
  if (!email_address) return { error: noEmail };
  // If the email is invalid, return an error
  if (!validateEmail(email_address)) return { error: invalidEmail };
  // If the email is valid, try making a request to the Mailchimp API
  try {
    const response =
      process.env.NODE_ENV === "development"
        ? // Don't make fetch request in dev
          new Response("", { status })
        : // Make fetch in production
          await fetch(mailchimpApiUrl, {
            body: JSON.stringify({
              email_address,
              status: "subscribed",
            }),
            headers: {
              Authorization: `apikey ${mailchimpApiKey}`,
              "Content-Type": "application/json",
            },
            method: "POST",
          });

    if (response.status >= 400) {
      return {
        error: subscribeError,
      };
    }

    return {
      success: subscribeSuccess,
    };
  } catch (error: any) {
    return { error: error.message || error.toString() };
  }
};
