import { createElement } from "react";

/**
 * Mocks the MDXRemote component from next-mdx-remote/rsc.
 * This is necessary because jest doesn't play well with ES modules and
 * next-mdx-remote/rsc doesn't offer a commonejs build.
 */
jest.mock("next-mdx-remote/rsc", () => ({
  MDXRemote: ({ source, components, ...props }) =>
    createElement("div", props, source),
}));
