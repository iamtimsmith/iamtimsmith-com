import { render, screen } from "@testing-library/react";
import { useContext } from "react";

import {
  CustomizeContext,
  CustomizeProvider,
  defaultSettings,
  useCustomizeContext,
} from "./CustomizeContext";

const wrapper = ({ children }) => (
  <CustomizeProvider {...defaultSettings}>{children}</CustomizeProvider>
);

const ComponentWithHook = () => {
  const { showGifs } = useContext(CustomizeContext);
  return <div>Hook:{showGifs.toString()}</div>;
};

const ComponentWithCustomHook = () => {
  const { showGifs } = useCustomizeContext();
  return <div>Custom Hook:{showGifs.toString()}</div>;
};

const ComponentWithConsumer = () => (
  <CustomizeContext.Consumer>
    {({ showGifs }) => <div>Consumer:{showGifs.toString()}</div>}
  </CustomizeContext.Consumer>
);

describe("CustomizeContext Context", () => {
  it("should be available using the useContext hook", async () => {
    render(<ComponentWithHook />, { wrapper });

    const elementViaHook = await screen.findByText(/hook:true/i);
    expect(elementViaHook).toBeInTheDocument();
  });

  it("should be available using the useCustomizeContextContext hook", async () => {
    render(<ComponentWithCustomHook />, { wrapper });

    const elementViaHook = await screen.findByText(/custom hook:true/i);
    expect(elementViaHook).toBeInTheDocument();
  });

  it("should be available using CustomizeContextContext.Consumer", async () => {
    render(<ComponentWithConsumer />, { wrapper });

    const elementViaConsumer = await screen.findByText(/consumer:true/i);
    expect(elementViaConsumer).toBeInTheDocument();
  });
});
