import { getSharingUrl } from "./getSharingUrl";

const url = "https://example.com";
const title = "Example";
const excerpt = "This is an example";
const image = "https://example";

describe("getSharingUrl()", () => {
  it("should return an empty string if no url is provided", () => {
    const data = getSharingUrl("Email", "", title, excerpt, image);
    expect(data).toEqual("");
  });

  it("should return a mailto link", () => {
    const data = getSharingUrl("Email", url, title, excerpt, image);
    expect(data).toEqual(expect.stringContaining("mailto:"));
  });

  it("should return a Facebook link", () => {
    const data = getSharingUrl("Facebook", url, title, excerpt, image);
    expect(data).toEqual(expect.stringContaining("facebook.com"));
  });

  it("should include url in Facebook link", () => {
    const data = getSharingUrl("Facebook", url, title, excerpt, image);
    expect(data).toEqual(expect.stringContaining(url));
  });

  it("should return a Linkedin link", () => {
    const data = getSharingUrl("Linkedin", url, title, excerpt, image);
    expect(data).toEqual(expect.stringContaining("linkedin.com"));
  });

  it("should include url in Linkedin link", () => {
    const data = getSharingUrl("Linkedin", url, title, excerpt, image);
    expect(data).toEqual(expect.stringContaining(url));
  });

  it("should include title in Linkedin link", () => {
    const data = getSharingUrl("Linkedin", url, title, excerpt, image);
    expect(data).toEqual(expect.stringContaining(title));
  });

  it("should return a Pinterest link", () => {
    const data = getSharingUrl("Pinterest", url, title, excerpt, image);
    expect(data).toEqual(expect.stringContaining("pinterest.com"));
  });

  it("should include url in Pinterest link", () => {
    const data = getSharingUrl("Pinterest", url, title, excerpt, image);
    expect(data).toEqual(expect.stringContaining(url));
  });

  it("should include description in Pinterest link", () => {
    const data = getSharingUrl("Pinterest", url, title, excerpt, image);
    expect(data).toEqual(expect.stringContaining(excerpt));
  });

  it("should include image in Pinterest link", () => {
    const data = getSharingUrl("Pinterest", url, title, excerpt, image);
    expect(data).toEqual(expect.stringContaining(image));
  });

  it("should return a Twitter link", () => {
    const data = getSharingUrl("Twitter", url, title, excerpt, image);
    expect(data).toEqual(expect.stringContaining("twitter.com"));
  });

  it("should include title in Twitter link", () => {
    const data = getSharingUrl("Twitter", url, title, excerpt, image);
    expect(data).toEqual(expect.stringContaining(title));
  });

  it("should include url in Twitter link", () => {
    const data = getSharingUrl("Twitter", url, title, excerpt, image);
    expect(data).toEqual(expect.stringContaining(url));
  });
});
