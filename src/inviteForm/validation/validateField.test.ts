import { describe, expect, it } from "vitest";
import { validateField } from "./validateForm";
import { FormValidationItem } from "./types";

describe("validateField", () => {
  it("should return error if value is empty", () => {
    // Arrange
    const item: FormValidationItem = { value: " ", label: "Test field" };

    // Act
    const result = validateField(item);

    // Assert
    expect(result).toBe(`${item.label} is required`);
  });

  it("should return error if value is less than 3 characters", () => {
    // Arrange
    const item: FormValidationItem = { value: "He", label: "Test field" };

    // Act
    const result = validateField(item);

    // Assert
    expect(result).toBe(`${item.label} must be between 3 and 100 characters`);
  });

  it("should return error if value is greater than 100 characters", () => {
    // Arrange
    const item: FormValidationItem = {
      value: Array(102).join("x"),
      label: "Test field",
    };

    // Act
    const result = validateField(item);

    // Assert
    expect(result).toBe(`${item.label} must be between 3 and 100 characters`);
  });

  it("should return empty string if value is between 3 and 100 characters", () => {
    // Arrange
    const item: FormValidationItem = { value: "Hel", label: "Test field" };

    // Act
    const result = validateField(item);

    // Assert
    expect(result).toBe("");
  });
});
