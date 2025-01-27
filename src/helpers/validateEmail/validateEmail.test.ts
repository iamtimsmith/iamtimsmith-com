import { validateEmail } from "./validateEmail";

describe("validateEmail()", () => {
  it("should return false for a string with no @ symbol", () => {
    const isEmail = validateEmail("test");
    expect(isEmail).toBe(false);
  });

  it("should return false for a string with no . symbol", () => {
    const isEmail = validateEmail("test@test");
    expect(isEmail).toBe(false);
  });

  it("should return false for a string with no text after the . symbol", () => {
    const isEmail = validateEmail("test@test.");
    expect(isEmail).toBe(false);
  });

  it("should return true for a valid .com email", () => {
    const isEmail = validateEmail("test@test.com");
    expect(isEmail).toBe(true);
  });

  it("should return true for a valid .org email", () => {
    const isEmail = validateEmail("test@test.org");
    expect(isEmail).toBe(true);
  });

  it("should return true for a valid .co.uk email", () => {
    const isEmail = validateEmail("test@test.co.uk");
  });
});
