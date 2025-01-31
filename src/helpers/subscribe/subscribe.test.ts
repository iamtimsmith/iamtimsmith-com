import { mockSuccessResponse } from "../../__mocks__/mailchimpResponse";
import { mockFetch } from "../../__mocks__/mockFetch";
import {
  invalidEmail,
  mailchimpApiUrl,
  noEmail,
  subscribeError,
  subscribeSuccess,
} from "../../constants";
import { subscribe } from "./subscribe";

const email_address = "kenobi@jedi.com";

describe("subscribe()", () => {
  it("should return an error if no email is provided", async () => {
    const response = await subscribe();
    expect(response.error).toBe(noEmail);
  });

  it("should return an error if an invalid email is provided", async () => {
    global.fetch = jest.fn();
    const input = email_address.split("@")[0];
    const response = await subscribe(input);
    expect(response.error).toBe(invalidEmail);
  });

  it("should make a fetch request to the Mailchimp Api", async () => {
    global.fetch = jest.fn();
    await subscribe(email_address);
    expect(global.fetch).toHaveBeenCalledWith(
      mailchimpApiUrl,
      mockSuccessResponse(email_address)
    );
  });

  it("should return an error if the Mailchimp Api returns an error", async () => {
    global.fetch = mockFetch(400, { title: subscribeError });
    const response = await subscribe(email_address);
    expect(response.error).toBe(subscribeError);
  });

  it("should return an error if the fetch request fails", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Failed to fetch"));
    const response = await subscribe(email_address);
    expect(response.error).toBe("Failed to fetch");
  });

  it("should return a success message if the fetch request is successful", async () => {
    global.fetch = mockFetch(200, {
      email_address: email_address,
      status: "subscribed",
    });
    const response = await subscribe(email_address);
    expect(response.success).toBe(subscribeSuccess);
  });
});
