import clsx from "clsx";

import { ApparelColorTypes } from "@/hooks/useApparelAsset";

type ColorCircleSizeTypes = "sm" | "md";

type ColorCirclePropTypes = {
  /** Color variant */
  color?: ApparelColorTypes;

  /** Set size */
  size?: ColorCircleSizeTypes;

  /** CSS Classes */
  className?: string;
};

export const colors: string[] = ["black", "gray", "navy", "white"];

const colorCircleClasses = {
  color: (color: ApparelColorTypes) => {
    const colors: Record<ApparelColorTypes, string> = {
      black: "bg-gray-900",
      gray: "bg-gray-500",
      navy: "bg-blue-800",
      white: "bg-white",
    };

    return colors[color];
  },

  size: (size: ColorCircleSizeTypes) => {
    const sizes: Record<ColorCircleSizeTypes, string> = {
      md: "h-9 w-9",
      sm: "h-5 w-5",
    };

    return sizes[size];
  },
};

const ColorCircle = (props: ColorCirclePropTypes) => {
  const { className, size = "md", color = "black" } = props;

  return (
    <span
      className={clsx(
        "inline-block rounded-full border-2 bg-blue-900",
        colorCircleClasses.color(color),
        colorCircleClasses.size(size),
        className,
      )}
      title={color}
    />
  );
};

export default ColorCircle;
