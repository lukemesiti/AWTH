import { useState } from "react";
import { FormElement } from "./types";

interface ComponentProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  element: FormElement;
  testId?: string;
}

const BUIFormInput: React.FC<ComponentProps> = (props) => {
  const {
    id,
    element: { label, type, error },
    onChange,
    testId,
    ...restProps
  } = props;
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) onChange(event);
  };

  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <input
        value={inputValue}
        onChange={(e) => handleChange(e)}
        name={id}
        type={type}
        className={`block w-full rounded-xl border-0 p-1.5 text-gray-900 ring-1 ring-inset ${
          error ? "ring-red-600" : "ring-gray-300"
        } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 md:text-lg sm:text-md sm:leading-6`}
        data-testid={testId}
        {...restProps}
      />
      {error && (
        <p className="text-red-600" data-testid={`${testId}-error`}>
          {error}
        </p>
      )}
    </>
  );
};

export { BUIFormInput };
