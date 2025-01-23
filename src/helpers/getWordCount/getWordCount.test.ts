import { getWordCount } from "./getWordCount";

describe("getWordCount()", () => {
  it("should return 0 if no value is passed", () => {
    const count = getWordCount();
    expect(count).toBe(0);
  });

  it("should return 0 for an empty string", () => {
    const count = getWordCount("");
    expect(count).toBe(0);
  });

  it("should return 1 for a single word", () => {
    const count = getWordCount("hello");
    expect(count).toBe(1);
  });

  it("should return 3 for three words", () => {
    const count = getWordCount("hello world goodbye");
    expect(count).toBe(3);
  });

  it("should return 3 for three words with punctuation", () => {
    const count = getWordCount("hello, world, goodbye");
    expect(count).toBe(3);
  });
});
