import clone from "just-clone";
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

export const handleFormChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  form: FormFields
): FormFields => {
  const { name, value } = event.target;
  const clonedForm = clone(form);

  clonedForm[name as FormFieldNames].value = value;

  return clonedForm;
};
