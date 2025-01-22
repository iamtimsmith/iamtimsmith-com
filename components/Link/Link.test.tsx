import { render, screen } from "@testing-library/react";
import { Link } from "./Link";

const Component = (props) => (
  <Link data-testid="link" {...props}>
    Hello World
  </Link>
);

describe("<Link />", () => {
  it("should render", () => {
    render(<Component />);
    const element = screen.getByTestId("link");
    expect(element).toBeInTheDocument();
  });

  it("should render children with no url provided", () => {
    render(<Component>Hello World</Component>);
    const element = screen.getByTestId("link");
    expect(element).toHaveTextContent("Hello World");
  });

  it("should render children with url provided", () => {
    render(<Component url="/test" />);
    const element = screen.getByTestId("link");
    expect(element).toHaveTextContent("Hello World");
  });

  it("should open a new tab when url is external", () => {
    render(<Component url="https://example.com" />);
    const element = screen.getByTestId("link");
    expect(element).toHaveAttribute("href", expect.stringContaining("://"));
  });

  it("should not open a new tab when url is internal", () => {
    render(<Component url="/uses" />);
    const element = screen.getByTestId("link");
    expect(element).not.toHaveAttribute("href", expect.stringContaining("://"));
  });

  it("should render internal link with title", () => {
    render(<Component url="/uses" title="Test" />);
    const element = screen.getByTestId("link");
    expect(element).toHaveAttribute("title", "Test");
  });

  it("should render external link with title", () => {
    render(<Component url="https://example.com" title="Test" />);
    const element = screen.getByTestId("link");
    expect(element).toHaveAttribute("title", "Test");
  });
});
