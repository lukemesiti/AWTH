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
  const { type, fullWidth, testId, children, ...restProps } = props;

  return (
    <button
      type={type ?? "button"}
      className={`${
        fullWidth ? "w-full" : ""
      } bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-2 px-4 rounded`}
      data-testid={testId}
      {...restProps}
    >
      {children}
    </button>
  );
};

export { BUIButton };
