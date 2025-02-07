import { render, screen } from "@testing-library/react";
import { Popover } from "./Popover";

const Component = (props) => (
  <Popover
    trigger={<button>Trigger Button</button>}
    data-testid="popover"
    {...props}
  />
);

describe("<Popover />", () => {
  it("should render", () => {
    render(<Component />);
    const element = screen.getByTestId("popover");
    expect(element).toBeInTheDocument();
  });

  it("should render with a trigger", () => {
    render(<Component />);
    const trigger = screen.getByRole("button", { name: /trigger button/i });
    expect(trigger).toBeInTheDocument();
  });

  it("should render with a trigger and a child", () => {
    render(
      <Component>
        <p>Child</p>
      </Component>
    );

    const trigger = screen.getByRole("button", { name: /trigger button/i });
    const child = screen.getByText(/child/i);
    expect(trigger).toBeInTheDocument();
    expect(child).toBeInTheDocument();
  });
});
