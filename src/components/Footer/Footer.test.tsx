import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

const Component = (props) => <Footer data-testid="footer" {...props} />;

describe("<Footer />", () => {
  it("should render", () => {
    render(<Component />);
    const element = screen.getByTestId("footer");
    expect(element).toBeInTheDocument();
  });

  it("should have a social navigation", () => {
    render(<Component />);
    const element = screen.getByRole("navigation", { name: /social/i });
    expect(element).toBeInTheDocument();
  });

  it("should have a link to linkedin", () => {
    render(<Component />);
    const element = screen.getByRole("link", { name: /linkedin/i });
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute(
      "href",
      expect.stringContaining("linkedin.com")
    );
  });

  it("should have a link to dev.to", () => {
    render(<Component />);
    const element = screen.getByRole("link", { name: /dev/i });
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute("href", expect.stringContaining("dev.to"));
  });

  it("should have a link to github", () => {
    render(<Component />);
    const element = screen.getByRole("link", { name: /github/i });
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute(
      "href",
      expect.stringContaining("github.com")
    );
  });

  it("should have a link to twitter", () => {
    render(<Component />);
    const element = screen.getByRole("link", { name: /twitter/i });
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute(
      "href",
      expect.stringContaining("twitter.com")
    );
  });
});
