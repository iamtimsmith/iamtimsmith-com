import {
  DevIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../../components/Icons";
import { getIcon } from "./getIcon";

describe("getIcon()", () => {
  it("should return undefined if no icon is found", () => {
    const icon = getIcon("Unknown");
    expect(icon).toBeUndefined();
  });

  it("should return <DevIcon /> for Dev.to", () => {
    const icon = getIcon("Dev.to");
    expect(icon).toEqual(<DevIcon />);
  });

  it("should return <GithubIcon /> for Github", () => {
    const icon = getIcon("Github");
    expect(icon).toEqual(<GithubIcon />);
  });

  it("should return <LinkedinIcon /> for Linkedin", () => {
    const icon = getIcon("Linkedin");
    expect(icon).toEqual(<LinkedinIcon />);
  });

  it("should return <TwitterIcon /> for Twitter", () => {
    const icon = getIcon("Twitter");
    expect(icon).toEqual(<TwitterIcon />);
  });
});
