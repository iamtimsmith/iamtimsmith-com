import { render, screen } from "@testing-library/react";
import { Embed } from "./Embed";

describe("<Embed />", () => {
  it("should render", () => {
    render(<Embed data-testid="embed" />);
    const element = screen.getByTestId("embed");
    expect(element).toBeInTheDocument();
  });

  it("should render children", () => {
    render(<Embed data-testid="embed">children</Embed>);
    const element = screen.getByTestId("embed");
    expect(element).toHaveTextContent("children");
  });
});
