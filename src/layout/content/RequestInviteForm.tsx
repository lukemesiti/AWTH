import { useState } from "react";
import { BUIFormInput, Modal } from "../../components";
import { initialFormState } from "./helpers";
import { FormFieldNames, FormFields } from "./types";
import { BUIButton } from "../../components/BUIButton";

interface ComponentProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RequestInviteForm: React.FC<ComponentProps> = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState<FormFields>(initialFormState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const currentValue = formData[name as FormFieldNames];
    setFormData({
      ...formData,
      [name]: {
        ...currentValue,
        value,
      },
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Request an invite">
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

        <BUIButton fullWidth>Send</BUIButton>
      </form>
    </Modal>
  );
};

export { RequestInviteForm };
