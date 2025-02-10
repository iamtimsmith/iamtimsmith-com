import { render, screen } from "@testing-library/react";
import {
  CustomizeProvider,
  defaultSettings,
} from "../../contexts/CustomizeContext";
import { Gif } from "./Gif";

const giphyUrl = "https://media.giphy.com/media/1234/giphy.mp4";
const Component = (props) => (
  <Gif src={giphyUrl} data-testid="gif" {...props} />
);

const wrapper = ({ children }) => (
  <CustomizeProvider {...defaultSettings}>{children}</CustomizeProvider>
);

describe("<Gif />", () => {
  it("should render", () => {
    render(<Component />, { wrapper });
    const element = screen.getByTestId("gif");
    expect(element).toBeInTheDocument();
  });

  it("should render a video", () => {
    render(<Component />, { wrapper });
    const element = screen.getByTestId("gif");
    const video = element.querySelector("video");
    expect(video).toBeInTheDocument();
  });

  it("should render video with correct src", () => {
    render(<Component />, { wrapper });
    const element = screen.getByTestId("gif");
    const video = element.querySelector("video");
    expect(video.src).toBe(giphyUrl);
  });

  it("should render with default maxWidth", () => {
    render(<Component />, { wrapper });
    const element = screen.getByTestId("gif");
    expect(element).toHaveStyle({ maxWidth: "500px" });
  });

  it("should render with custom maxWidth", () => {
    render(<Component maxWidth={200} />, { wrapper });
    const element = screen.getByTestId("gif");
    expect(element).toHaveStyle({ maxWidth: "200px" });
  });

  it("should render with custom styles", () => {
    render(<Component style={{ color: "red" }} />, { wrapper });
    const element = screen.getByTestId("gif");
    expect(element).toHaveStyle({ color: "red" });
  });

  it("should render with playsInline", () => {
    render(<Component />, { wrapper });
    const element = screen.getByTestId("gif");
    const video = element.querySelector("video");
    expect(video.playsInline).toBe(true);
  });

  it("should render with autoPlay", () => {
    render(<Component />, { wrapper });
    const element = screen.getByTestId("gif");
    const video = element.querySelector("video");
    expect(video.autoplay).toBe(true);
  });

  it("should render with muted", () => {
    render(<Component />, { wrapper });
    const element = screen.getByTestId("gif");
    const video = element.querySelector("video");
    expect(video.muted).toBe(true);
  });

  it("should render with loop", () => {
    render(<Component />, { wrapper });
    const element = screen.getByTestId("gif");
    const video = element.querySelector("video");
    expect(video.loop).toBe(true);
  });

  it("should render with aria-hidden so screenreaders don't try to read it", () => {
    render(<Component />, { wrapper });
    const element = screen.queryByTestId("gif");
    expect(element).toHaveAttribute("aria-hidden", "true");
  });
});
