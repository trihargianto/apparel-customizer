export type ButtonVariantTypes = "primary" | "secondary" | "naked";

export type ButtonSizeTypes = "xs" | "sm" | "md";

export type ButtonAsTypes = "button" | "a";

export type ButtonPropTypes = {
  children: React.ReactNode;

  /** Button variant */
  variant?: ButtonVariantTypes;

  /** Button size */
  size?: ButtonSizeTypes;

  /** Change button tag element */
  as?: ButtonAsTypes;

  /** If set to `true`, the button will be using rounded style */
  isRounded?: boolean;

  /** If set to `true`, the button will be on active state */
  isActive?: boolean;

  /** Provide custom CSS classes */
  className?: string;
} & React.ComponentProps<"button" | "a">;
