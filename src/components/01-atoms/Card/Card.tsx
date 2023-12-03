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
        "flex gap-2 py-3 px-3 bg-white rounded-lg",
        isBordered ? "border border-gray-300" : "",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
