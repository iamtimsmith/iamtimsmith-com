import { render, screen } from "@testing-library/react";
import { Summary } from "./Summary";

const Component = (props) => (
  <Summary title="Summary" data-testid="summary" {...props} />
);

describe("<Summary />", () => {
  it("should render", () => {
    render(<Component />);
    const element = screen.getByTestId("summary");
    expect(element).toBeInTheDocument();
  });

  it("should render title", () => {
    render(<Component />);
    const element = screen.getByTestId("summary");
    expect(element).toHaveTextContent(/summary/i);
  });

  it("should render excerpt", () => {
    render(<Component excerpt="Excerpt" />);
    const element = screen.getByTestId("summary");
    expect(element).toHaveTextContent(/excerpt/i);
  });

  it("should render a link if url is provided", () => {
    render(<Component url="/url" />);
    const element = screen.getByRole("link", { name: /summary/i });
    expect(element).toHaveAttribute("href", "/url");
  });

  it("should not render a link if url is not provided", () => {
    render(<Component />);
    const element = screen.queryByRole("link", { name: /summary/i });
    expect(element).not.toBeInTheDocument();
  });
});
