import { FormFieldNames } from "../types";
import { FormErrors, FormValidationItem, FormValues } from "./types";

export function validateForm(form: FormValues): FormErrors {
  const nameError = validateField(form.name);
  const emailError = validateEmail(form.email);
  let confirmEmailError = validateEmail(form.confirmEmail);

  if (!emailError && !confirmEmailError && form.email !== form.confirmEmail) {
    confirmEmailError = "Emails must match";
  }

  return {
    [FormFieldNames.Name]: nameError,
    [FormFieldNames.Email]: emailError,
    [FormFieldNames.ConfirmEmail]: confirmEmailError,
  };
}

function validateField(field: FormValidationItem): string {
  const { label, value } = field;
  const trimmedValue = value.trim();

  if (isEmpty(trimmedValue)) {
    return `${label} is required`;
  }

  if (!isBetween(trimmedValue.length, 3, 100)) {
    return `${label} must be between 3 and 100 characters`;
  }

  return "";
}

function validateEmail(email: FormValidationItem): string {
  const error: string = validateField(email);

  if (error) return error;

  if (!isValidEmail(email.value.trim())) {
    return `${email.label} is invalid`;
  }

  return "";
}

const isEmpty = (value: string): boolean => value === "";

const isBetween = (length: number, min: number, max: number): boolean =>
  length >= min && length <= max;

const isValidEmail = (email: string): boolean =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email.toLowerCase()
  );
