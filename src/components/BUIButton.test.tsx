import { describe, expect, it } from "vitest";
import { BUIButton } from ".";
import { render } from "../utils/testUtils";

describe("BUIButton", () => {
  it("should render with text", () => {
    // Arrange
    const text = "Click me";

    // Act
    const result = render(<BUIButton>{text}</BUIButton>);

    // Assert
    expect(result).toMatchSnapshot();
  });
});
