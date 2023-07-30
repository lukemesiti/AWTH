import { FormFieldNames, FormFields } from "./types";

export const initialFormState: FormFields = {
  [FormFieldNames.Name]: {
    type: "text",
    label: "Full name",
    value: "",
  },
  [FormFieldNames.Email]: {
    type: "email",
    label: "Email",
    value: "",
  },
  [FormFieldNames.ConfirmEmail]: {
    type: "email",
    label: "Confirm email",
    value: "",
  },
};
