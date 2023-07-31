import { FormElement } from "../components";

export const SERVER_ERROR_TEST_ID = "SERVER_ERROR_TEST_ID";
export const SUBMIT_BUTTON_TEST_ID = "SUBMIT_BUTTON_TEST_ID";

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
