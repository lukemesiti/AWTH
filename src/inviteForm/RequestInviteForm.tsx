import clone from "just-clone";
import { useCallback, useEffect, useState } from "react";
import { BUIFormInput, BUIModal, BUIButton } from "../components";
import { Current, useModalDisplay } from "../context";
import { initialFormState } from "./helpers";
import { FormFieldNames, FormFields, RequestInvite } from "./types";
import { useRequestInvite } from "./useRequestInvite";
import {
  convertFormFieldsToFormValues,
  setFormErrorsToFormFields,
  validateForm,
} from "./validation";

const RequestInviteForm: React.FC = () => {
  const [formData, setFormData] = useState<FormFields>(initialFormState);
  const { mutate: sendRequest, status, error, reset } = useRequestInvite();
  const [serverError, setServerError] = useState("");
  const { modal, setModal } = useModalDisplay();

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

  const handleModalChange = useCallback(
    (modal: Current) => {
      setModal(modal);
      setFormData(initialFormState);
    },
    [setModal, setFormData]
  );

  useEffect(() => {
    const errorMessage = error?.response?.data.errorMessage;

    if (status === "error" && errorMessage) {
      setServerError(errorMessage);
    }
  }, [status, error]);

  useEffect(() => {
    if (status === "success") {
      handleModalChange("success");
      reset();
    }
  }, [status, reset, handleModalChange]);

  return (
    <BUIModal
      isOpen={modal === "form"}
      handleClose={() => handleModalChange("closed")}
      title="Request an invite"
      testId="request-invite-form"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        {Object.keys(formData).map((objectKey) => {
          const element = formData[objectKey as FormFieldNames];
          return (
            <div className="mt-2" key={objectKey}>
              <BUIFormInput
                id={objectKey}
                element={element}
                onChange={handleChange}
                testId={objectKey}
              />
            </div>
          );
        })}

        <BUIButton fullWidth type="submit" testId="submit-button">
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
