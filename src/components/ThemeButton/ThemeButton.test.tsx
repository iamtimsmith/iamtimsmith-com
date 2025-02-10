import { act, render, screen } from "@testing-library/react";
import { defaultSettings } from "../../constants";
import { CustomizeProvider } from "../../contexts/CustomizeContext";
import { ThemeButton } from "./ThemeButton";

jest.mock("../../helpers/toggleTheme", () => ({
  toggleTheme: jest.fn(),
}));

const wrapper = ({ children }) => (
  <CustomizeProvider {...defaultSettings}>{children}</CustomizeProvider>
);

describe("<ThemeButton />", () => {
  it("should render", () => {
    render(<ThemeButton data-testid="themeButton" />, { wrapper });
    const element = screen.getByTestId("themeButton");
    expect(element).toBeInTheDocument();
  });

  it("should display an icon", () => {
    render(<ThemeButton data-testid="themeButton" />, { wrapper });
    const element = screen.getByTestId("themeButton");
    expect(element).toContainHTML("svg");
  });

  it("should call toggleTheme when clicked", () => {
    render(<ThemeButton data-testid="themeButton" />, { wrapper });
    const element = screen.getByTestId("themeButton");
    act(() => element.click());
    expect(require("../../helpers/toggleTheme").toggleTheme).toHaveBeenCalled();
  });
});
