import { useState } from "react";

interface ComponentProps {
  id: string;
  name: string;
  type: React.HTMLInputTypeAttribute;
  label: string;
  required: boolean;
  onChange: (target: EventTarget & HTMLInputElement) => void;
}

const FormInput: React.FC<ComponentProps> = ({
  id,
  name,
  type,
  label,
  required,
  onChange,
}) => {
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
        name={name}
        type={type}
        required={required}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1"
      />
    </>
  );
};

export { FormInput };
