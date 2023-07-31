import { describe, expect, it } from "vitest";
import { FormFields } from "..";
import { validateForm } from "./validateForm";

describe("validateForm", () => {
  it("should return error if emails are valid but not equal", () => {
    // Arrange
    const form: FormFields = {
      name: { type: "text", value: "test", label: "Test field" },
      email: { type: "email", value: "hello@email.com", label: "Test email" },
      confirmEmail: {
        type: "email",
        value: "world@email.com",
        label: "Test confirm email",
      },
    };

    // Act
    const result = validateForm(form);

    // Assert
    expect(result.name.error).toBeFalsy();
    expect(result.email.error).toBeFalsy();
    expect(result.confirmEmail.error).toBe("Emails must match");
  });

  it("should return empty strings if all values are valid and emails are equal", () => {
    // Arrange
    const form: FormFields = {
      name: { type: "text", value: "test", label: "Test field" },
      email: { type: "email", value: "hello@email.com", label: "Test email" },
      confirmEmail: {
        type: "email",
        value: "hello@email.com",
        label: "Test confirm email",
      },
    };

    // Act
    const result = validateForm(form);

    // Assert
    expect(result.name.error).toBeFalsy();
    expect(result.email.error).toBeFalsy();
    expect(result.confirmEmail.error).toBeFalsy();
  });
});
