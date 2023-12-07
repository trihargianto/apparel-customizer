import clsx from "clsx";
import { ChangeEventHandler } from "react";

type InputSizeTypes = "xs" | "sm" | "md";

type InputPropTypes = {
  /** Input label */
  label?: string;

  /** Size */
  size?: InputSizeTypes;

  /** Text placheolder */
  placeholder?: string;

  /** Input value */
  value?: string;

  /** CSS Classes */
  className?: string;

  /** onChange Event */
  onChange?: any;
};

export const inputSizes: InputSizeTypes[] = ["md", "sm", "xs"];

const inputClasses = {
  size: (size: InputSizeTypes) => {
    const sizeClasses: { [key: string]: string } = {
      xs: "px-2 py-1.5 text-xs",
      sm: "px-3 py-2",
      md: "px-4 py-3",
    };

    return sizeClasses[size];
  },
};

const Input = ({
  label = "",
  size = "md",
  placeholder = "Type here...",
  value = "",
  className = "",
  onChange = (e: any) => e,
}: InputPropTypes) => {
  return (
    <>
      {label && (
        <label
          htmlFor="input"
          className="mb-2 block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}

      <input
        type="text"
        placeholder={placeholder}
        className={clsx(
          "block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400",
          inputClasses.size(size),
          className,
        )}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
