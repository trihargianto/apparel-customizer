import React, { Component } from "react";
import clsx from "clsx";

import {
  ButtonPropTypes,
  ButtonSizeTypes,
  ButtonVariantTypes,
} from "./Button.types";

export const buttonVariants: ButtonVariantTypes[] = [
  "primary",
  "secondary",
  "naked",
];

export const buttonSizes: ButtonSizeTypes[] = ["md", "sm", "xs"];

const buttonClasses = {
  variant: (variant: ButtonVariantTypes) => {
    const variantClasses: { [key: string]: string } = {
      primary: "text-white bg-blue-600 hover:bg-blue-500",
      secondary:
        "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
      naked: "text-slate-600 bg-transparent !shadow-none hover:text-slate-500",
    };

    return variantClasses[variant];
  },

  size: (size: ButtonSizeTypes) => {
    const sizeClasses: { [key: string]: string } = {
      xs: "px-2 py-1.5 text-xs",
      sm: "px-3 py-2",
      md: "px-4 py-3",
    };

    return sizeClasses[size];
  },
};

const Button = ({
  variant = "primary",
  size = "md",
  as = "button",
  children,
  className,
  disabled = false,
  ...restProps
}: ButtonPropTypes) => {
  const Element = as;

  return (
    /** @ts-ignore-next */
    <Element
      className={clsx(
        buttonClasses.variant(variant),
        buttonClasses.size(size),
        className,
        "inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm",
        disabled ? "cursor-auto opacity-40" : "",
      )}
      {...restProps}
    >
      {children}
    </Element>
  );
};

export default Button;
