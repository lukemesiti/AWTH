import { useEffect, useState } from "react";
import { BUIFormInput, BUIModal } from "../../components";
import { initialFormState } from "./helpers";
import { FormFieldNames, FormFields, RequestInvite } from "./types";
import { BUIButton } from "../../components/BUIButton";
import {
  validateForm,
  convertFormFieldsToFormValues,
  setFormErrorsToFormFields,
} from "./validation";
import clone from "just-clone";
import { useRequestInvite } from "./useRequestInvite";

interface ComponentProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RequestInviteForm: React.FC<ComponentProps> = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState<FormFields>(initialFormState);
  const { mutate: sendRequest, status, error } = useRequestInvite();
  const [serverError, setServerError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const clonedFormData = clone(formData);

    clonedFormData[name as FormFieldNames] = {
      ...clonedFormData[name as FormFieldNames],
      value,
    };

    setFormData(clonedFormData);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerError("");

    const validationErrors = validateForm(
      convertFormFieldsToFormValues(formData)
    );

    const formDataWithErrors = setFormErrorsToFormFields(
      formData,
      validationErrors
    );
    setFormData(formDataWithErrors);

    if (
      validationErrors.name ||
      validationErrors.email ||
      validationErrors.confirmEmail
    ) {
      return;
    }

    sendRequest({
      name: formDataWithErrors[FormFieldNames.Name].value,
      email: formDataWithErrors[FormFieldNames.Email].value,
    } as RequestInvite);
  };

  useEffect(() => {
    const errorMessage = error?.response?.data.errorMessage;

    if (status === "error" && errorMessage) {
      setServerError(errorMessage);
    }
  }, [status, error]);

  return (
    <BUIModal isOpen={isOpen} setIsOpen={setIsOpen} title="Request an invite">
      <form className="space-y-6" onSubmit={handleSubmit}>
        {Object.keys(formData).map((objectKey) => {
          const element = formData[objectKey as FormFieldNames];
          return (
            <div className="mt-2" key={objectKey}>
              <BUIFormInput
                id={objectKey}
                element={element}
                onChange={handleChange}
              />
            </div>
          );
        })}

        <BUIButton fullWidth type="submit">
          {status === "loading" ? "Sending, please wait..." : "Send"}
        </BUIButton>
        {serverError && (
          <p className="text-red-600 text-center">{serverError}</p>
        )}
      </form>
    </BUIModal>
  );
};

export { RequestInviteForm };
