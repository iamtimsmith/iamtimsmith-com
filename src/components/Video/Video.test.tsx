import { render, screen } from "@testing-library/react";
import { Video } from "./Video";

const giphyUrl = "https://media.giphy.com/media/1234/giphy.mp4";
const Component = (props) => (
  <Video src={giphyUrl} data-testid="video" {...props} />
);

describe("<Gif />", () => {
  it("should render", () => {
    render(<Component />);
    const element = screen.getByTestId("video");
    expect(element).toBeInTheDocument();
  });

  it("should render a video", () => {
    render(<Component />);
    const element = screen.getByTestId("video");
    const video = element.querySelector("video");
    expect(video).toBeInTheDocument();
  });

  it("should render video with correct src", () => {
    render(<Component />);
    const element = screen.getByTestId("video");
    const video = element.querySelector("video");
    expect(video.src).toBe(giphyUrl);
  });

  it("should render with custom styles", () => {
    render(<Component style={{ color: "red" }} />);
    const element = screen.getByTestId("video");
    expect(element).toHaveStyle({ color: "red" });
  });

  it("should render with playsInline if loop prop is true", () => {
    render(<Component loop />);
    const element = screen.getByTestId("video");
    const video = element.querySelector("video");
    expect(video.playsInline).toBe(true);
  });

  it("should render with autoPlay if loop prop is true", () => {
    render(<Component loop />);
    const element = screen.getByTestId("video");
    const video = element.querySelector("video");
    expect(video.autoplay).toBe(true);
  });

  it("should render with muted if loop prop is true", () => {
    render(<Component loop />);
    const element = screen.getByTestId("video");
    const video = element.querySelector("video");
    expect(video.muted).toBe(true);
  });

  it("should render with loop if loop prop is true", () => {
    render(<Component loop />);
    const element = screen.getByTestId("video");
    const video = element.querySelector("video");
    expect(video.loop).toBe(true);
  });
});
