import { render, screen } from "@testing-library/react";
import { Author } from "./Author";

describe("<Author />", () => {
  it("should render", () => {
    render(<Author data-testid="author" />);
    const element = screen.getByTestId("author");
    expect(element).toBeInTheDocument();
  });
});
