import { mailchimpApiKey } from "../constants";

/**
 * Mock a successful response from the Mailchimp API
 * @param email - The email address to use in the response
 */
export const mockSuccessResponse = (email = "test@test.com") => ({
  body: `{"email_address":"${email}","status":"subscribed"}`,
  headers: {
    Authorization: `apikey ${mailchimpApiKey}`,
    "Content-Type": "application/json",
  },
  method: "POST",
});
