import { render, screen } from "@testing-library/react";
import { authorName } from "../../constants";
import { Author } from "./Author";

describe("<Author />", () => {
  it("should render", () => {
    render(<Author data-testid="author" />);
    const element = screen.getByTestId("author");
    expect(element).toBeInTheDocument();
  });

  it("should render the author portrait", () => {
    render(<Author data-testid="author" />);
    const element = screen.getByTestId("author");
    expect(element.querySelector("img")).toBeInTheDocument();
  });

  it("should render the author portrait with the correct alt text", () => {
    render(<Author data-testid="author" />);
    const element = screen.getByRole("img", { name: authorName });
    expect(element).toBeInTheDocument();
  });

  it("should render the author bio", () => {
    render(<Author data-testid="author" />);
    const element = screen.getByTestId("author");
    // Eventually replace this with a more specific test
    const bio = /i build things/i;
    expect(element).toHaveTextContent(bio);
  });

  it("should render the author bio with D&D Beyond link", () => {
    render(<Author data-testid="author" />);
    const element = screen.getByRole("link", { name: /d&d beyond/i });
    expect(element).toHaveAttribute("href", "https://www.dndbeyond.com");
  });

  it("should render the author bio with WOTC link", () => {
    render(<Author data-testid="author" />);
    const element = screen.getByRole("link", { name: /wizards of the coast/i });
    expect(element).toHaveAttribute("href", "https://company.wizards.com/en");
  });
  it("should render the author bio with Twitter link", () => {
    render(<Author data-testid="author" />);
    const element = screen.getByRole("link", { name: /@iam_timsmith/i });
    expect(element).toHaveAttribute(
      "href",
      "https://www.twitter.com/iam_timsmith"
    );
  });
});
