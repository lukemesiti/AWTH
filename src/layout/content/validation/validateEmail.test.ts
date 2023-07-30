import { describe, expect, it } from "vitest";
import { validateEmail } from "./validateForm";
import { FormValidationItem } from "./types";

describe("validateEmail", () => {
  it("should return error if value is empty", () => {
    // Arrange
    const item: FormValidationItem = { value: " ", label: "Test email" };

    // Act
    const result = validateEmail(item);

    // Assert
    expect(result).toBe(`${item.label} is required`);
  });

  it("should return error if value is less than 3 characters", () => {
    // Arrange
    const item: FormValidationItem = { value: "He", label: "Test email" };

    // Act
    const result = validateEmail(item);

    // Assert
    expect(result).toBe(`${item.label} must be between 3 and 100 characters`);
  });

  it("should return error if value is greater than 100 characters", () => {
    // Arrange
    const item: FormValidationItem = {
      value: Array(102).join("x"),
      label: "Test email",
    };

    // Act
    const result = validateEmail(item);

    // Assert
    expect(result).toBe(`${item.label} must be between 3 and 100 characters`);
  });

  it("should return error if value is between 3 and 100 characters fails valid email regex", () => {
    // Arrange
    const item: FormValidationItem = { value: "a@b", label: "Test email" };

    // Act
    const result = validateEmail(item);

    // Assert
    expect(result).toBe(`${item.label} is invalid`);
  });

  it("should return empty string if value is between 3 and 100 characters passes valid email regex", () => {
    // Arrange
    const item: FormValidationItem = { value: "a@b.co", label: "Test email" };

    // Act
    const result = validateEmail(item);

    // Assert
    expect(result).toBe("");
  });
});
