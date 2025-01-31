import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

describe("<Container />", () => {
  it("should render", () => {
    render(<Container data-testid="container" />);
    const element = screen.getByTestId("container");
    expect(element).toBeInTheDocument();
  });
});
