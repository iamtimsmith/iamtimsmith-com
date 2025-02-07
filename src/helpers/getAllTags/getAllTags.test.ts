import { getAllTags } from "./getAllTags";

describe("getAllTags()", () => {
  it("should return an array of all tags", () => {
    const tags = getAllTags();
    expect(tags.length).toBeGreaterThan(0);
  });
});
