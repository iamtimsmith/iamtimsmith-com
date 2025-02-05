import { render, screen } from "@testing-library/react";
import { SocialNav } from "./SocialNav";

const Component = <SocialNav data-testid="socialNav" />;

describe("<SocialNav />", () => {
  it("should render", () => {
    render(Component);
    const element = screen.getByTestId("socialNav");
    expect(element).toBeInTheDocument();
  });

  // it("should render BackToTop", () => {
  //   render(Component);
  //   const element = screen.getByRole("button", {
  //     name: /back to top/i,
  //   });
  //   expect(element).toBeInTheDocument();
  // });

  it("should render a Linkedin link", () => {
    render(Component);
    const element = screen.getByRole("link", { name: /linkedin/i });
    expect(element).toBeInTheDocument();
  });

  it("should render a Dev.to link", () => {
    render(Component);
    const element = screen.getByRole("link", { name: /dev/i });
    expect(element).toBeInTheDocument();
  });

  it("should render a Github link", () => {
    render(Component);
    const element = screen.getByRole("link", { name: /github/i });
    expect(element).toBeInTheDocument();
  });

  it("should render a Twitter link", () => {
    render(Component);
    const element = screen.getByRole("link", { name: /twitter/i });
    expect(element).toBeInTheDocument();
  });
});
