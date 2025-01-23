import { render, screen } from "@testing-library/react";
import { ThemeButton } from "./ThemeButton";

jest.mock("../../helpers/toggleTheme", () => ({
  toggleTheme: jest.fn(),
}));

describe("<ThemeButton />", () => {
  it("should render", () => {
    render(<ThemeButton data-testid="themeButton" />);
    const element = screen.getByTestId("themeButton");
    expect(element).toBeInTheDocument();
  });

  it("should display an icon", () => {
    render(<ThemeButton data-testid="themeButton" />);
    const element = screen.getByTestId("themeButton");
    expect(element).toContainHTML("svg");
  });

  it("should call toggleTheme when clicked", () => {
    render(<ThemeButton data-testid="themeButton" />);
    const element = screen.getByTestId("themeButton");
    element.click();
    expect(require("../../helpers/toggleTheme").toggleTheme).toHaveBeenCalled();
  });
});
