import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("<Button />", () => {
  it("should render", () => {
    render(<Button data-testid="button" />);
    const element = screen.getByTestId("button");
    expect(element).toBeInTheDocument();
  });
});
