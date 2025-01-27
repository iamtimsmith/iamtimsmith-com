import { render, screen } from "@testing-library/react";
import { BackToTop } from "./BackToTop";

describe("<BackToTop />", () => {
  it("should render", () => {
    render(<BackToTop data-testid="backToTop" />);
    const element = screen.getByTestId("backToTop");
    expect(element).toBeInTheDocument();
  });

  it("should scroll to top", () => {
    const scrollTo = jest.fn();
    Object.defineProperty(window, "scrollTo", { value: scrollTo });
    render(<BackToTop data-testid="backToTop" />);
    const element = screen.getByTestId("backToTop");
    element.click();
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });

  it("should have correct aria-label", () => {
    render(<BackToTop data-testid="backToTop" />);
    const element = screen.getByTestId("backToTop");
    expect(element).toHaveAttribute(
      "aria-label",
      "Go back to the top of the page."
    );
  });
});
