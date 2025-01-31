import { render, screen } from "@testing-library/react";
import { Image } from "./Image";

const Component = (props) => (
  <Image src="https://example.com/image.jpg" data-testid="image" {...props} />
);

describe("<Image />", () => {
  it("should render", () => {
    render(<Component />);
    const element = screen.getByTestId("image");
    expect(element).toBeInTheDocument();
  });

  it("should render with src", () => {
    render(<Component />);
    const element = screen.getByRole("presentation");
    expect(element).toHaveAttribute(
      "src",
      expect.stringContaining("image.jpg")
    );
  });

  it("should render with alt", () => {
    render(<Component alt="Example" />);
    const element = screen.getByRole("img", { name: "Example" });
    expect(element).toBeInTheDocument();
  });

  it("should render with caption", () => {
    render(<Component alt="Example" />);
    const element = screen.getByText("Example");
    expect(element).toBeInTheDocument();
  });
});
