import { render, screen } from "@testing-library/react";
import { Gif } from "./Gif";

const giphyUrl = "https://media.giphy.com/media/1234/giphy.mp4";
const Component = (props) => (
  <Gif src={giphyUrl} data-testid="gif" {...props} />
);

describe("<Gif />", () => {
  it("should render", () => {
    render(<Component />);
    const element = screen.getByTestId("gif");
    expect(element).toBeInTheDocument();
  });

  it("should render a video", () => {
    render(<Component />);
    const element = screen.getByTestId("gif");
    const video = element.querySelector("video");
    expect(video).toBeInTheDocument();
  });

  it("should render video with correct src", () => {
    render(<Component />);
    const element = screen.getByTestId("gif");
    const video = element.querySelector("video");
    expect(video.src).toBe(giphyUrl);
  });

  it("should render a caption", () => {
    render(<Component caption="This is a caption" />);
    const element = screen.getByTestId("gif");
    expect(element).toHaveTextContent("This is a caption");
  });

  it("should render with default maxWidth", () => {
    render(<Component />);
    const element = screen.getByTestId("gif");
    expect(element).toHaveStyle({ maxWidth: "400px" });
  });

  it("should render with custom maxWidth", () => {
    render(<Component maxWidth={200} />);
    const element = screen.getByTestId("gif");
    expect(element).toHaveStyle({ maxWidth: "200px" });
  });

  it("should render with custom styles", () => {
    render(<Component style={{ color: "red" }} />);
    const element = screen.getByTestId("gif");
    expect(element).toHaveStyle({ color: "red" });
  });

  it("should render with playsInline", () => {
    render(<Component />);
    const element = screen.getByTestId("gif");
    const video = element.querySelector("video");
    expect(video.playsInline).toBe(true);
  });

  it("should render with autoPlay", () => {
    render(<Component />);
    const element = screen.getByTestId("gif");
    const video = element.querySelector("video");
    expect(video.autoplay).toBe(true);
  });

  it("should render with muted", () => {
    render(<Component />);
    const element = screen.getByTestId("gif");
    const video = element.querySelector("video");
    expect(video.muted).toBe(true);
  });

  it("should render with loop", () => {
    render(<Component />);
    const element = screen.getByTestId("gif");
    const video = element.querySelector("video");
    expect(video.loop).toBe(true);
  });
});
