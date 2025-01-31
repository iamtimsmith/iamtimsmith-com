import { render, screen } from "@testing-library/react";
import {
  CloseIcon,
  DevIcon,
  EmailIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  PinterestIcon,
  SearchIcon,
  SunIcon,
  Svg,
  TwitterIcon,
} from "./Icons";

describe("<Icons />", () => {
  it("should render svg", () => {
    render(<Svg data-testid="icons" />);
    const element = screen.getByTestId("icons");
    expect(element).toBeInTheDocument();
  });

  it("should render svg with props", () => {
    render(<Svg data-testid="icons" height="2em" width="2em" />);
    const element = screen.getByTestId("icons");
    expect(element).toHaveAttribute("height", "2em");
    expect(element).toHaveAttribute("width", "2em");
  });

  it("should render svg with children", () => {
    render(
      <Svg data-testid="icons">
        <path
          data-testid="path"
          fill="none"
          strokeWidth="2"
          d="M3,3 L21,21 M3,21 L21,3"
        ></path>
      </Svg>
    );

    const element = screen.getByTestId("icons");
    const path = screen.getByTestId("path");
    expect(element).toContainElement(path);
  });

  it("should render close icon", () => {
    render(<CloseIcon data-testid="icon" />);
    const element = screen.getByTestId("icon");
    expect(element).toBeInTheDocument();
  });

  it("should render dev icon", () => {
    render(<DevIcon data-testid="icon" />);
    const element = screen.getByTestId("icon");
    expect(element).toBeInTheDocument();
  });

  it("should render email icon", () => {
    render(<EmailIcon data-testid="icon" />);
    const element = screen.getByTestId("icon");
    expect(element).toBeInTheDocument();
  });

  it("should render facebook icon", () => {
    render(<FacebookIcon data-testid="icon" />);
    const element = screen.getByTestId("icon");
    expect(element).toBeInTheDocument();
  });

  it("should render github icon", () => {
    render(<GithubIcon data-testid="icon" />);
    const element = screen.getByTestId("icon");
    expect(element).toBeInTheDocument();
  });

  it("should render linkedin icon", () => {
    render(<LinkedinIcon data-testid="icon" />);
    const element = screen.getByTestId("icon");
    expect(element).toBeInTheDocument();
  });

  it("should render moon icon", () => {
    render(<MoonIcon data-testid="icon" />);
    const element = screen.getByTestId("icon");
    expect(element).toBeInTheDocument();
  });

  it("should render pinterest icon", () => {
    render(<PinterestIcon data-testid="icon" />);
    const element = screen.getByTestId("icon");
    expect(element).toBeInTheDocument();
  });

  it("should render search icon", () => {
    render(<SearchIcon data-testid="icon" />);
    const element = screen.getByTestId("icon");
    expect(element).toBeInTheDocument();
  });

  it("should render sun icon", () => {
    render(<SunIcon data-testid="icon" />);
    const element = screen.getByTestId("icon");
    expect(element).toBeInTheDocument();
  });

  it("should render twitter icon", () => {
    render(<TwitterIcon data-testid="icon" />);
    const element = screen.getByTestId("icon");
    expect(element).toBeInTheDocument();
  });
});
