import clone from "just-clone";
import { FormFieldNames, FormFields } from "../types";
import { FormErrors } from "./types";

export function setFormErrorsToFormFields(
  form: FormFields,
  errors: FormErrors
): FormFields {
  const clonedForm = clone(form);

  return {
    [FormFieldNames.Name]: {
      ...clonedForm[FormFieldNames.Name],
      error: errors[FormFieldNames.Name],
    },
    [FormFieldNames.Email]: {
      ...clonedForm[FormFieldNames.Email],
      error: errors[FormFieldNames.Email],
    },
    [FormFieldNames.ConfirmEmail]: {
      ...clonedForm[FormFieldNames.ConfirmEmail],
      error: errors[FormFieldNames.ConfirmEmail],
    },
  };
}

export function formHasError(form: FormFields): boolean {
  return Object.values(form).some((field) => Boolean(field.error));
}
