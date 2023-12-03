import React from "react";
import clsx from "clsx";

export type CardPropTypes = {
  className?: string;
  children: React.ReactNode;
};

const Card = (props: CardPropTypes) => {
  const { className = "", children } = props ?? {};

  return (
    <div
      className={clsx(
        "flex gap-2 py-3 px-3 bg-white border border-gray-300 rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
