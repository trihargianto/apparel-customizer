import React from "react";
import clsx from "clsx";

export type CardPropTypes = {
  className?: string;
  isBordered?: boolean;
  children: React.ReactNode;
};

const Card = ({
  isBordered = true,
  className = "",
  children,
}: CardPropTypes) => {
  return (
    <div
      className={clsx(
        "rounded-lg bg-white px-3 py-3",
        isBordered ? "border border-gray-300" : "",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
