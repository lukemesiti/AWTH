export enum FormFieldNames {
  Name = "name",
  Email = "email",
  ConfirmEmail = "confirmEmail",
}

export interface FormFields {
  [FormFieldNames.Name]: FormElement;
  [FormFieldNames.Email]: FormElement;
  [FormFieldNames.ConfirmEmail]: FormElement;
}

export interface FormElement {
  type: React.HTMLInputTypeAttribute;
  label: string;
  value: string;
  error?: string;
}
