import clsx from "clsx";

import { ApparelColorTypes } from "@/hooks/useApparelAsset";

type ColorCirclePropTypes = {
  color?: ApparelColorTypes;
};

const colorCircleClasses = {
  color: (color: ApparelColorTypes) => {
    const colors: Record<ApparelColorTypes, string> = {
      black: "bg-black",
      gray: "bg-gray-500",
      navy: "bg-blue-800",
      white: "bg-white",
    };

    return colors[color];
  },
};

const ColorCircle = (props: ColorCirclePropTypes) => {
  const { color = "black" } = props;

  return (
    <span
      className={clsx(
        "rounded-full bg-blue-900 w-9 h-9 inline-block border-2",
        colorCircleClasses.color(color)
      )}
    />
  );
};

export default ColorCircle;
