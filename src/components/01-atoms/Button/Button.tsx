import React from "react";
import clsx from "clsx";

type ButtonVariantTypes = "primary" | "secondary" | "tertiary" | "naked";

type ButtonSizeTypes = "xs" | "sm" | "md";

export interface ButtonPropTypes
  extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  variant?: ButtonVariantTypes;
  size?: ButtonSizeTypes;
  isRounded?: boolean;
  isActive?: boolean;
}

const buttonClasses = {
  base: "rounded-sm inline-flex items-center",

  variant: (variant: ButtonVariantTypes) => {
    const variantClasses: { [key: string]: string } = {
      primary:
        "text-white bg-blue-500 border-blue-500 border hover:bg-blue-600",
      secondary:
        "text-slate-600 bg-slate-200 border-slate-300 border hover:bg-slate-300",
      naked: "text-slate-600 bg-transparent",
    };

    return variantClasses[variant];
  },

  size: (size: ButtonSizeTypes) => {
    const sizeClasses: { [key: string]: string } = {
      xs: "px-2 py-1.5 text-sm",
      sm: "px-3 py-2",
      md: "px-4 py-3",
    };

    return sizeClasses[size];
  },
};

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...restProps
}: ButtonPropTypes) => {
  return (
    <button
      className={clsx([
        buttonClasses.base,
        buttonClasses.variant(variant),
        buttonClasses.size(size),
        className,
      ])}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
