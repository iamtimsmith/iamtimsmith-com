import { renderHook } from "@testing-library/react";
import { useIsVisible } from "./useIsVisible";

describe("useIsVisible()", () => {
  it("should render the hook with a false value", () => {
    const { result } = renderHook(() => useIsVisible(false));

    expect(result.current.isVisible).toBe(false);
  });

  it("should render the hook with a true value", () => {
    const { result } = renderHook(() => useIsVisible(true));

    expect(result.current.isVisible).toBe(true);
  });
});
