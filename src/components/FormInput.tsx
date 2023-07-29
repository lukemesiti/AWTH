import { useState } from "react";
import { FormElement } from "../layout/content/types";

interface ComponentProps {
  id: string;
  element: FormElement;
  onChange: (target: EventTarget & HTMLInputElement) => void;
}

const FormInput: React.FC<ComponentProps> = ({ id, element, onChange }) => {
  const { label, type, error } = element;
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;

    setInputValue(target.value);
    onChange(target);
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        value={inputValue}
        onChange={handleChange}
        id={id}
        name={id}
        type={type}
        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
          error ? "ring-red-600" : "ring-gray-300"
        } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1`}
      />
      {error && <p className="text-red-600">{error}</p>}
    </>
  );
};

export { FormInput };
