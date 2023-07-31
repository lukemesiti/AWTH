import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import { render } from "./utils/testUtils";

describe("App", () => {
  it("renders app parent component", () => {
    // Arrange
    // Act
    render(<App />);

    // Assert
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("content")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
