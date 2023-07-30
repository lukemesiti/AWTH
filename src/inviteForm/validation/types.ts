import { FormFieldNames } from "../types";

export interface FormValidationItem {
  value: string;
  label: string;
}

export interface FormValues {
  [FormFieldNames.Name]: FormValidationItem;
  [FormFieldNames.Email]: FormValidationItem;
  [FormFieldNames.ConfirmEmail]: FormValidationItem;
}

export interface FormErrors {
  [FormFieldNames.Name]: string;
  [FormFieldNames.Email]: string;
  [FormFieldNames.ConfirmEmail]: string;
}
