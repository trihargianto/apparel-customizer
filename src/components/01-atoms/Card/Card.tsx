import React from "react";

export type CardPropTypes = {
  children: React.ReactNode;
};

const Card = (props: CardPropTypes) => {
  const { children } = props;

  return (
    <div className="flex gap-2 py-3 pl-3 bg-white border border-gray-300 rounded-lg">
      {children}
    </div>
  );
};

export default Card;
