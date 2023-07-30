import clone from "just-clone";
import { FormFieldNames, FormFields } from "../types";
import { FormErrors, FormValues } from "./types";

export function convertFormFieldsToFormValues(form: FormFields): FormValues {
  return {
    [FormFieldNames.Name]: {
      value: form[FormFieldNames.Name].value,
      label: form[FormFieldNames.Name].label,
    },
    [FormFieldNames.Email]: {
      value: form[FormFieldNames.Email].value,
      label: form[FormFieldNames.Email].label,
    },
    [FormFieldNames.ConfirmEmail]: {
      value: form[FormFieldNames.ConfirmEmail].value,
      label: form[FormFieldNames.ConfirmEmail].label,
    },
  };
}

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
