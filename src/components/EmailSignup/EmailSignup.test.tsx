import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { mockFetch } from "../../__mocks__/mockFetch";
import { subscribeSuccess } from "../../constants";
import { EmailSignup } from "./EmailSignup";

describe("<EmailSignup />", () => {
  const ORIGINAL_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...ORIGINAL_ENV };
  });

  afterAll(() => {
    process.env = ORIGINAL_ENV;
  });

  it("should render", () => {
    render(<EmailSignup data-testid="emailSignup" />);
    const element = screen.getByTestId("emailSignup");
    expect(element).toBeInTheDocument();
  });

  it("should render with a title", () => {
    render(<EmailSignup data-testid="emailSignup" />);
    const element = screen.getByText(/sign up for my mailing list!/i);
    expect(element).toBeInTheDocument();
  });

  it("should render with a description", () => {
    render(<EmailSignup data-testid="emailSignup" />);
    const element = screen.getByText(
      /by signing up, you'll receive a monthly email with my latest blog posts about development, career, and more./i
    );
    expect(element).toBeInTheDocument();
  });

  it("should render with an input", () => {
    render(<EmailSignup data-testid="emailSignup" />);
    const element = screen.getByRole("textbox", { name: /email address/i });
    expect(element).toBeInTheDocument();
  });

  it("should render with a button", () => {
    render(<EmailSignup data-testid="emailSignup" />);
    const element = screen.getByRole("button", { name: /subscribe/i });
    expect(element).toBeInTheDocument();
  });

  it("should render without an error message", () => {
    render(<EmailSignup data-testid="emailSignup" />);
    const element = screen.queryByText(/error/i);
    expect(element).not.toBeInTheDocument();
  });

  it("should show an error if email address is empty", async () => {
    render(<EmailSignup data-testid="emailSignup" />);
    const input = screen.getByRole("textbox", { name: /email address/i });
    expect(input).toBeInvalid();
  });

  it("should show an error if email address is invalid", async () => {
    render(<EmailSignup data-testid="emailSignup" />);
    const input = screen.getByRole("textbox", { name: /email address/i });
    fireEvent.change(input, { target: { value: "kenobi" } });
    expect(input).toBeInvalid();
  });

  it("should disable the submit button if the email is invalid", () => {
    render(<EmailSignup data-testid="emailSignup" />);
    const input = screen.getByRole("textbox", { name: /email address/i });
    const button = screen.getByRole("button", { name: /subscribe/i });
    expect(input).toBeInvalid();
    expect(button).toBeDisabled();
  });

  it("should enable the submit button if the email is valid", () => {
    render(<EmailSignup data-testid="emailSignup" />);
    const input = screen.getByRole("textbox", { name: /email address/i });
    const button = screen.getByRole("button", { name: /subscribe/i });
    fireEvent.change(input, { target: { value: "kenobi@jedi.com" } });
    expect(input).toBeValid();
    expect(button).toBeEnabled();
  });

  it("should render without a success message", () => {
    render(<EmailSignup data-testid="emailSignup" />);
    const element = screen.queryByText(/success/i);
    expect(element).not.toBeInTheDocument();
  });

  it("should show a success message when submitted", async () => {
    // Mock the fetch request to Mailchimp Api
    global.fetch = mockFetch(200, { success: subscribeSuccess });
    render(<EmailSignup data-testid="emailSignup" />);
    // Make sure the success message is not rendered
    const succes = screen.queryByText(subscribeSuccess);
    const button = screen.getByRole("button", { name: /subscribe/i });
    expect(succes).not.toBeInTheDocument();
    // Fill in the email address and submit
    const input = screen.getByRole("textbox", { name: /email address/i });
    fireEvent.change(input, { target: { value: "kenobi@jedi.com" } });
    fireEvent.click(button);
    // Wait for the success message to be rendered
    await waitFor(() => {
      const success = screen.getByText(subscribeSuccess);
      expect(success).toBeInTheDocument();
    });
  });

  it("should show dev text in development", () => {
    process.env = { NODE_ENV: "development" };
    render(<EmailSignup data-testid="emailSignup" />);
    const element = screen.getByText(/responses will not be saved/i);
    expect(element).toBeInTheDocument();
  });

  it("should not show dev text in production", () => {
    process.env = { NODE_ENV: "production" };
    render(<EmailSignup data-testid="emailSignup" />);
    const element = screen.queryByText(/responses will not be saved/i);
    expect(element).not.toBeInTheDocument();
  });
});
