import React from "react";
import FormAddImage from "./FormAddImage";
import FormAddText from "./FormAddText";
import FormChangeProduct from "./FormChangeProduct";

const LeftSideBarSubMenu = ({ openedMenu }) => {
  return (
    <div>
      {openedMenu === "change" ? (
        <FormChangeProduct />
      ) : openedMenu === "text" ? (
        <FormAddText />
      ) : openedMenu === "image" ? (
        <FormAddImage />
      ) : (
        <div>Unknown Action!</div>
      )}
    </div>
  );
};

export default LeftSideBarSubMenu;
