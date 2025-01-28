import { render, screen } from "@testing-library/react";
import { Sharebar } from "./Sharebar";

const Component = (props) => <Sharebar data-testid="sharebar" {...props} />;

describe("<Sharebar />", () => {
  it("should render", () => {
    render(<Component />);
    const element = screen.getByTestId("sharebar");
    expect(element).toBeInTheDocument();
  });

  it("should render facebook link", () => {
    render(<Component />);
    const element = screen.getByRole("link", { name: "Share to Facebook" });
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute(
      "href",
      expect.stringContaining("facebook.com")
    );
  });

  it("should render linkedin link", () => {
    render(<Component />);
    const element = screen.getByRole("link", { name: "Share to Linkedin" });
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute(
      "href",
      expect.stringContaining("linkedin.com")
    );
  });

  it("should render pinterest link", () => {
    render(<Component />);
    const element = screen.getByRole("link", { name: "Share to Pinterest" });
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute(
      "href",
      expect.stringContaining("pinterest.com")
    );
  });

  it("should render twitter link", () => {
    render(<Component />);
    const element = screen.getByRole("link", { name: "Share to Twitter" });
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute(
      "href",
      expect.stringContaining("twitter.com")
    );
  });

  it("should render email link", () => {
    render(<Component />);
    const element = screen.getByRole("link", { name: "Share to Email" });
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute("href", expect.stringContaining("mailto:"));
  });
});
