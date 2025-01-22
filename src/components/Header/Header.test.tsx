import { render, screen } from "@testing-library/react";
import { siteName } from "../../constants";
import { Header } from "./Header";

describe("<Header />", () => {
  it("should render", () => {
    render(<Header data-testid="header" />);
    const element = screen.getByTestId("header");
    expect(element).toBeInTheDocument();
  });

  it("should render the site name with a link to the homepage", () => {
    render(<Header data-testid="header" />);
    const element = screen.getByRole("link", { name: siteName });
    expect(element).toHaveAttribute("href", "/");
  });

  it("should render navigation", () => {
    render(<Header data-testid="header" />);
    const element = screen.getByRole("navigation");
    expect(element).toBeInTheDocument();
  });

  it("should render link to the blog page", () => {
    render(<Header data-testid="header" />);
    const element = screen.getByRole("link", { name: "Blog" });
    expect(element).toHaveAttribute("href", "/blog");
  });

  it("should render link to the tags page", () => {
    render(<Header data-testid="header" />);
    const element = screen.getByRole("link", { name: "Tags" });
    expect(element).toHaveAttribute("href", "/tags");
  });
});
