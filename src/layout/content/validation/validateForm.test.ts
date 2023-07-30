import { describe, expect, it } from "vitest";
import { FormValues } from "./types";
import { validateForm } from "./validateForm";

describe("validateForm", () => {
  it("should return error if emails are valid but not equal", () => {
    // Arrange
    const form: FormValues = {
      name: { value: "test", label: "Test field" },
      email: { value: "hello@email.com", label: "Test email" },
      confirmEmail: { value: "world@email.com", label: "Test confirm email" },
    };

    // Act
    const result = validateForm(form);

    // Assert
    expect(result.name).toBeFalsy();
    expect(result.email).toBeFalsy();
    expect(result.confirmEmail).toBe("Emails must match");
  });

  it("should return empty strings if all values are valid and emails are equal", () => {
    // Arrange
    const form: FormValues = {
      name: { value: "test", label: "Test field" },
      email: { value: "hello@email.com", label: "Test email" },
      confirmEmail: { value: "hello@email.com", label: "Test confirm email" },
    };

    // Act
    const result = validateForm(form);

    // Assert
    expect(result.name).toBeFalsy();
    expect(result.email).toBeFalsy();
    expect(result.confirmEmail).toBeFalsy();
  });
});
