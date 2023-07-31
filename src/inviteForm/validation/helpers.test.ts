import { describe, expect, it } from "vitest";
import { formHasError } from ".";
import { FormFields } from "..";

describe("formHasErrors", () => {
  it("should return false if none of the form fields have errors", () => {
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
    const result = formHasError(form);

    // Assert
    expect(result).toBeFalsy();
  });

  it("should return true if at least one of the form fields has errors", () => {
    // Arrange
    const form: FormFields = {
      name: {
        type: "text",
        value: "test",
        label: "Test field",
        error: "error",
      },
      email: { type: "email", value: "hello@email.com", label: "Test email" },
      confirmEmail: {
        type: "email",
        value: "hello@email.com",
        label: "Test confirm email",
      },
    };

    // Act
    const result = formHasError(form);

    // Assert
    expect(result).toBeTruthy();
  });
});
