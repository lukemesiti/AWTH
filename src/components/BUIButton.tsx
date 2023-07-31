import { PropsWithChildren } from "react";

interface ComponentProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  fullWidth?: boolean;
  testId?: string;
}

const BUIButton: React.FC<PropsWithChildren<ComponentProps>> = (props) => {
  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={`${
        props.fullWidth ? "w-full" : ""
      } bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded`}
      data-testid={props.testId}
    >
      {props.children}
    </button>
  );
};

export { BUIButton };
