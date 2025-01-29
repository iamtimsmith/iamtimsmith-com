import { render, screen } from "@testing-library/react";
import { getLatestPosts } from "../../helpers/getLatestPosts";
import { SummaryGrid } from "./SummaryGrid";

const files = getLatestPosts(3);

describe("<SummaryGrid />", () => {
  it("should render", () => {
    render(<SummaryGrid data-testid="summaryGrid" />);
    const element = screen.getByTestId("summaryGrid");
    expect(element).toBeInTheDocument();
  });

  it("should render a list of posts", () => {
    render(<SummaryGrid count={3} />);
    const posts = screen.getAllByRole("article");
    expect(posts).toHaveLength(3);
  });

  it("should have a tag list", () => {
    render(<SummaryGrid count={1} />);
    const tags = screen.getByRole("list", { name: /tags/i });
    expect(tags).toBeInTheDocument();
  });

  it("should render the tags", () => {
    const name = files[0].frontmatter.tags[0] || "";
    render(<SummaryGrid count={1} />);
    const tags = screen.getByRole("list", { name: /tags/i });
    expect(tags).toHaveTextContent(name);
  });

  it("should render a title", () => {
    render(<SummaryGrid count={1} />);
    const title = screen.getByText(/recent posts/i);
    expect(title).toBeInTheDocument();
  });

  it("should render a link to the post", () => {
    render(<SummaryGrid count={1} />);
    const post = screen.getByRole("link");
    expect(post).toHaveAttribute("href", files[0].slug);
  });

  it("should render the post title", () => {
    const name = files[0].frontmatter.title;
    render(<SummaryGrid count={1} />);
    const title = screen.getByRole("link", { name });
    expect(title).toBeInTheDocument();
  });

  it("should render the post excerpt", () => {
    const name = files[0].frontmatter.excerpt;
    render(<SummaryGrid count={1} />);
    const excerpt = screen.getByText(name);
    expect(excerpt).toBeInTheDocument();
  });
});
