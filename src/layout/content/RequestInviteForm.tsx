import { useState } from "react";
import { FormInput, Modal } from "../../components";
import { formElements, initialFormState } from "./helpers";
import { FormFields } from "./types";

interface ComponentProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RequestInviteForm: React.FC<ComponentProps> = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState<FormFields>(initialFormState);

  const handleChange = (target: EventTarget & HTMLInputElement) => {
    const { name, value } = target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Request an invite">
      <form className="space-y-6" onSubmit={handleSubmit}>
        {formElements.map((element) => (
          <div className="mt-2">
            <FormInput
              id={element.name}
              name={element.name}
              type={element.type}
              required
              label={element.label}
              onChange={handleChange}
            />
          </div>
        ))}

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send
          </button>
        </div>
      </form>
    </Modal>
  );
};

export { RequestInviteForm };
