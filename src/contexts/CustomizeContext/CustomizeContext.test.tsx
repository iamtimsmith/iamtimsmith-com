import { render, screen } from "@testing-library/react";
import { useContext } from "react";

import {
  CustomizeContext,
  CustomizeProvider,
  useCustomizeContext,
} from "./CustomizeContext";

const ComponentWithHook = () => {
  const { state } = useContext(CustomizeContext);
  return <div>Hook:{state}</div>;
};

const ComponentWithCustomHook = () => {
  const { state } = useCustomizeContext();
  return <div>Custom Hook:{state}</div>;
};

const ComponentWithConsumer = () => (
  <CustomizeContext.Consumer>
    {({ state }) => <div>Consumer:{state}</div>}
  </CustomizeContext.Consumer>
);

describe("CustomizeContext Context", () => {
  it("should be available using the useContext hook", async () => {
    render(<ComponentWithHook />, { wrapper: CustomizeProvider });

    const elementViaHook = await screen.findByText(/hook:true/i);
    expect(elementViaHook).toBeInTheDocument();
  });

  it("should be available using the useCustomizeContextContext hook", async () => {
    render(<ComponentWithCustomHook />, { wrapper: CustomizeProvider });

    const elementViaHook = await screen.findByText(/custom hook:true/i);
    expect(elementViaHook).toBeInTheDocument();
  });

  it("should be available using CustomizeContextContext.Consumer", async () => {
    render(<ComponentWithConsumer />, { wrapper: CustomizeProvider });

    const elementViaConsumer = await screen.findByText(/consumer:true/i);
    expect(elementViaConsumer).toBeInTheDocument();
  });
});
