import { useCallback, useEffect, useState } from "react";
import { BUIButton, BUIFormInput, BUIModal } from "../components";
import { Current, useModalDisplay } from "../context";
import { REQUEST_INVITE_FORM_TEST_ID } from "../layout/content";
import { handleFormChange, initialFormState } from "./helpers";
import {
  FormFieldNames,
  FormFields,
  RequestInvite,
  SERVER_ERROR_TEST_ID,
  SUBMIT_BUTTON_TEST_ID,
} from "./types";
import { useRequestInvite } from "./useRequestInvite";
import { formHasError, validateForm } from "./validation";

const RequestInviteForm: React.FC = () => {
  const [form, setForm] = useState<FormFields>(initialFormState);
  const { mutate: sendRequest, status, error, reset } = useRequestInvite();
  const [serverError, setServerError] = useState("");
  const { modal, setModal } = useModalDisplay();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerError("");

    const validatedForm = validateForm(form);

    setForm(validatedForm);

    if (!formHasError(validatedForm)) {
      sendRequest({
        name: validatedForm[FormFieldNames.Name].value,
        email: validatedForm[FormFieldNames.Email].value,
      } as RequestInvite);
    }
  };

  const handleModalChange = useCallback(
    (modal: Current) => {
      setModal(modal);
      setForm(initialFormState);
      setServerError("");
    },
    [setModal, setForm]
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
      testId={REQUEST_INVITE_FORM_TEST_ID}
    >
      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((objectKey) => {
          const element = form[objectKey as FormFieldNames];
          return (
            <div className="mt-4" key={objectKey}>
              <BUIFormInput
                id={objectKey}
                element={element}
                onChange={(event) => setForm(handleFormChange(event, form))}
                testId={objectKey}
                disabled={status === "loading"}
              />
            </div>
          );
        })}

        <div className="mt-10">
          <BUIButton fullWidth type="submit" testId={SUBMIT_BUTTON_TEST_ID}>
            {status === "loading" ? "Sending, please wait..." : "Send"}
          </BUIButton>
        </div>
        {serverError && (
          <p
            className="text-red-600 text-center mt-4"
            data-testid={SERVER_ERROR_TEST_ID}
          >
            {serverError}
          </p>
        )}
      </form>
    </BUIModal>
  );
};

export { RequestInviteForm };
