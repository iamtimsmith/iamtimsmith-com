import { render, screen } from "@testing-library/react";
import { CodeBlock } from "./CodeBlock";

describe("<CodeBlock />", () => {
  it("should render", () => {
    render(<CodeBlock data-testid="codeBlock" />);
    const element = screen.getByTestId("codeBlock");
    expect(element).toBeInTheDocument();
  });

  it("should render with a language", () => {
    render(<CodeBlock lang="jsx" data-testid="codeBlock" />);
    const element = screen.getByTestId("codeBlock");
    expect(element).toContainHTML('lang="jsx"');
  });

  it("should render with a value", () => {
    const value = "console.log('Hello, world!');";
    render(<CodeBlock children={value} data-testid="codeBlock" />);
    const element = screen.getByTestId("codeBlock");
    expect(element).toContainHTML(value);
  });
});
