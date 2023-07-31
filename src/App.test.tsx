import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import { render } from "./utils/testUtils";
import { CONTENT_TEST_ID } from "./layout/content";
import { HEADER_TEST_ID } from "./layout/header";
import { FOOTER_TEST_ID } from "./layout/footer";

describe("App", () => {
  it("renders app parent component", () => {
    // Arrange
    // Act
    render(<App />);

    // Assert
    expect(screen.getByTestId(HEADER_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(CONTENT_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(FOOTER_TEST_ID)).toBeInTheDocument();
  });
});
