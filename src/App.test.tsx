import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "./App";

describe("App", () => {
  it("renders app parent component", () => {
    // Arrange
    // Act
    const { container } = render(<App />);

    // Assert
    expect(container).toBeDefined();
    expect(screen.getByTestId("header")).toBeDefined();
    expect(screen.getByTestId("content")).toBeDefined();
    expect(screen.getByTestId("footer")).toBeDefined();
  });
});
