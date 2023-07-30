import { useState } from "react";
import { BUIFormInput, BUIModal } from "../../components";
import { initialFormState } from "./helpers";
import { FormFieldNames, FormFields } from "./types";
import { BUIButton } from "../../components/BUIButton";
import {
  validateForm,
  convertFormFieldsToFormValues,
  setFormErrorsToFormFields,
} from "./validation";
import clone from "just-clone";

interface ComponentProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RequestInviteForm: React.FC<ComponentProps> = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState<FormFields>(initialFormState);

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

    const validationErrors = validateForm(
      convertFormFieldsToFormValues(formData)
    );

    const formDataWithErrors = setFormErrorsToFormFields(
      formData,
      validationErrors
    );
    setFormData(formDataWithErrors);

    console.log(formDataWithErrors);
  };

  return (
    <BUIModal isOpen={isOpen} setIsOpen={setIsOpen} title="Request an invite">
      <form className="space-y-6" onSubmit={handleSubmit}>
        {Object.keys(formData).map((objectKey) => {
          const element = formData[objectKey as FormFieldNames];
          return (
            <div className="mt-2">
              <BUIFormInput
                id={objectKey}
                element={element}
                onChange={handleChange}
              />
            </div>
          );
        })}

        <BUIButton fullWidth type="submit">
          Send
        </BUIButton>
      </form>
    </BUIModal>
  );
};

export { RequestInviteForm };
