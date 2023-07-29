export enum FormFieldNames {
  Name = "name",
  Email = "email",
  ConfirmEmail = "confirmEmail",
}

export interface FormFields {
  [FormFieldNames.Name]: string;
  [FormFieldNames.Email]: string;
  [FormFieldNames.ConfirmEmail]: string;
}

export interface FormElement {
  name: FormFieldNames;
  type: React.HTMLInputTypeAttribute;
  label: string;
}
