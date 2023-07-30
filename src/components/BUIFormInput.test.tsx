import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BUIFormInput, FormElement } from ".";

describe("BUIFormInput", () => {
  it("should render with element values", () => {
    // Arrange
    const element: FormElement = {
      label: "Email",
      type: "text",
      value: "",
    };

    // Act
    const result = render(<BUIFormInput element={element} />);

    // Assert
    expect(result).toMatchSnapshot();
  });
});
