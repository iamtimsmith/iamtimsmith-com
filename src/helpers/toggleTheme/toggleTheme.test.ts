import { toggleTheme } from "./toggleTheme";

describe("toggleTheme()", () => {
  it("should return 'dark' when the theme is 'system'", () => {
    const theme = "system";
    const result = toggleTheme(theme);
    expect(result).toBe("dark");
  });

  it("should return 'dark' when the theme is 'light'", () => {
    const theme = "light";
    const result = toggleTheme(theme);
    expect(result).toBe("dark");
  });

  it("should return 'light' when the theme is 'dark'", () => {
    const theme = "dark";
    const result = toggleTheme(theme);
    expect(result).toBe("light");
  });

  it("should return undefined when the theme is not recognized", () => {
    const theme = "foo";
    const result = toggleTheme(theme);
    expect(result).toBeUndefined();
  });
});
