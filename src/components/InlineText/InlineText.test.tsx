import { render, screen } from "@testing-library/react";
import { InlineText } from "./InlineText";

describe("<InlineText />", () => {
  it("should render", () => {
    render(<InlineText data-testid="inlineText" />);
    const element = screen.getByTestId("inlineText");
    expect(element).toBeInTheDocument();
  });

  it("should render with children", () => {
    render(<InlineText data-testid="inlineText">Hello World</InlineText>);
    const element = screen.getByTestId("inlineText");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Hello World");
  });

  it("should render italicized text", () => {
    render(<InlineText variant="italic">Hello World</InlineText>);
    const element = screen.getByText("Hello World");
    expect(element).toHaveClass("italic");
  });

  it("should render bold text", () => {
    render(<InlineText variant="bold">Hello World</InlineText>);
    const element = screen.getByText("Hello World");
    expect(element).toHaveClass("bold");
  });

  it("should render code", () => {
    render(<InlineText variant="code">Hello World</InlineText>);
    const element = screen.getByText("Hello World");
    expect(element).toHaveClass("code");
  });
});
