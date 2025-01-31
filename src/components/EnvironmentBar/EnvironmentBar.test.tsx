import { render, screen } from "@testing-library/react";
import { EnvironmentBar } from "./EnvironmentBar";

describe("<EnvironmentBar />", () => {
  const ORIGINAL_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...ORIGINAL_ENV };
  });

  afterAll(() => {
    process.env = ORIGINAL_ENV;
  });

  it("should render", () => {
    render(<EnvironmentBar data-testid="environmentBar" />);
    const element = screen.getByTestId("environmentBar");
    expect(element).toBeInTheDocument();
  });

  it("should render the dev environment", () => {
    process.env = { NODE_ENV: "development" };
    render(<EnvironmentBar data-testid="environmentBar" />);
    const element = screen.getByTestId("environmentBar");
    expect(element).toHaveTextContent(/environment: development/i);
  });

  it("should render the test environment", () => {
    process.env = { NODE_ENV: "test" };
    render(<EnvironmentBar data-testid="environmentBar" />);
    const element = screen.getByTestId("environmentBar");
    expect(element).toHaveTextContent(/environment: test/i);
  });

  it("should render the production environment", () => {
    process.env = { NODE_ENV: "production" };
    render(<EnvironmentBar data-testid="environmentBar" />);
    const element = screen.getByTestId("environmentBar");
    expect(element).toHaveTextContent(/environment: production/i);
  });

  it("should render the word count if content is passed", () => {
    render(
      <EnvironmentBar content="Hello, world!" data-testid="environmentBar" />
    );
    const element = screen.getByTestId("environmentBar");
    expect(element).toHaveTextContent(/length: 2 words/i);
  });

  it("should not render the word count if no content is passed", () => {
    render(<EnvironmentBar data-testid="environmentBar" />);
    const element = screen.getByTestId("environmentBar");
    expect(element).not.toHaveTextContent(/length:/i);
  });
});
