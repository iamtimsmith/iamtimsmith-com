import { render, screen } from "@testing-library/react";
import { Grid } from "./Grid";

describe("<Grid />", () => {
  it("should render", () => {
    render(<Grid data-testid="grid" />);
    const element = screen.getByTestId("grid");
    expect(element).toBeInTheDocument();
  });
});
