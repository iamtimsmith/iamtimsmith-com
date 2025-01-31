import { render, screen } from "@testing-library/react";
import { Tags } from "./Tags";

const tags = ["tag1", "tag2", "tag3"];

describe("<Tags />", () => {
  it("should render", () => {
    render(<Tags tags={tags} data-testid="tags" />);
    const element = screen.getByTestId("tags");
    expect(element).toBeInTheDocument();
  });

  it("should render tags", () => {
    render(<Tags tags={tags} data-testid="tags" />);
    const firstTag = screen.getByText(tags[0]);
    expect(firstTag).toBeInTheDocument();
    const secondTag = screen.getByText(tags[1]);
    expect(secondTag).toBeInTheDocument();
    const thirdTag = screen.getByText(tags[2]);
    expect(thirdTag).toBeInTheDocument();
  });

  it("should render tags in a list", () => {
    render(<Tags tags={tags} data-testid="tags" />);
    const list = screen.getByTestId("tags");
    expect(list.tagName).toBe("UL");
    expect(list).toHaveAttribute("aria-label", "Tags");
  });

  // Eventually these will be linked. This test will need updated
  it("should render tags without a link", () => {
    render(<Tags tags={tags} data-testid="tags" />);
    const link = screen.queryByRole("link", { name: tags[0] });
    expect(link).not.toBeInTheDocument();
  });
});
