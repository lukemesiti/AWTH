import { FormFields, FormFieldNames, FormElement } from "./types";

export const initialFormState: FormFields = {
  [FormFieldNames.Name]: "",
  [FormFieldNames.Email]: "",
  [FormFieldNames.ConfirmEmail]: "",
};

export const formElements: FormElement[] = [
  {
    name: FormFieldNames.Name,
    type: "text",
    label: "Full name",
  },
  {
    name: FormFieldNames.Email,
    type: "email",
    label: "Email",
  },
  {
    name: FormFieldNames.ConfirmEmail,
    type: "email",
    label: "Confirm email",
  },
];
