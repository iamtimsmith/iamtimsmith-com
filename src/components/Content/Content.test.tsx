import { render, screen } from "@testing-library/react";
import { getContentBySlug } from "../../helpers/getContentBySlug";
import { Content } from "./Content";

const post = getContentBySlug("posts/first-post");

const Component = <Content children={post.content} data-testid="mdx" />;

describe("<Mdx />", () => {
  it("should render", () => {
    render(Component);
    const element = screen.getByTestId("mdx");
    expect(element).toBeInTheDocument();
  });

  it("should render the content", () => {
    render(Component);
    const element = screen.getByTestId("mdx");
    expect(element).toHaveTextContent(/stranger things/i);
  });

  it("should render the EmailSignup component", () => {
    render(Component);
    const element = screen.getByTestId("mdx");
    expect(element).toHaveTextContent("<EmailSignup />");
  });

  it("should render code blocks", () => {
    render(Component);
    const element = screen.getByTestId("mdx");
    expect(element).toHaveTextContent("```tsx");
  });

  it("should render links", () => {
    render(Component);
    const element = screen.getByTestId("mdx");
    expect(element).toHaveTextContent("[This is an internal link](/blog)");
  });

  it("should render gifs", () => {
    render(Component);
    const element = screen.getByTestId("mdx");
    expect(element).toHaveTextContent("<Gif ");
  });

  it("should render embeds", () => {
    render(Component);
    const element = screen.getByTestId("mdx");
    expect(element).toHaveTextContent("<Embed ");
  });
});
