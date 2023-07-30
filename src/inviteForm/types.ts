import { FormElement } from "../components";

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

export interface RequestInvite {
  name: string;
  email: string;
}

export interface ErrorResponse {
  errorMessage: string;
}
