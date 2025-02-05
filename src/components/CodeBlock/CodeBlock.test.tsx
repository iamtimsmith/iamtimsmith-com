import { render, screen } from "@testing-library/react";
import { CodeBlock } from "./CodeBlock";

describe("<CodeBlock />", () => {
  it("should render", () => {
    render(
      <CodeBlock
        data-testid="codeBlock"
        className="javascript"
        children="Hello World"
      />
    );
    const element = screen.getByTestId("codeBlock");
    expect(element).toBeInTheDocument();
  });

  it("should render with correct language", () => {
    render(
      <CodeBlock
        data-testid="codeBlock"
        className="javascript"
        children="Hello World"
      />
    );
    const element = screen.getByTestId("codeBlock");
    expect(element).toHaveClass("javascript");
  });

  it("should render with correct children", () => {
    render(
      <CodeBlock
        data-testid="codeBlock"
        className="javascript"
        children="Hello World"
      />
    );
    const element = screen.getByTestId("codeBlock");
    expect(element).toHaveTextContent("Hello World");
  });
});
