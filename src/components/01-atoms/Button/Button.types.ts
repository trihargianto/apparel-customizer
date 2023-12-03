export type ButtonVariantTypes = "primary" | "secondary" | "naked";

export type ButtonSizeTypes = "xs" | "sm" | "md";

export type ButtonPropTypes = {
  children: React.ReactNode;
  variant?: ButtonVariantTypes;
  size?: ButtonSizeTypes;
  isRounded?: boolean;
  isActive?: boolean;
} & React.ComponentPropsWithoutRef<"button">;
