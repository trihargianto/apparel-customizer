import React from "react";
import FormAddImage from "./FormAddImage";
import FormAddText from "./FormAddText";
import FormChangeProduct from "./FormChangeProduct";

const translateOpenedMenu = openedMenu => {
  switch (openedMenu) {
    case "change":
      return "Change Product Options";
    case "text":
      return "Text Options";
    case "image":
      return "Image Options";
    default:
      return "Unknown Action";
  }
};

const LeftSideBarSubMenu = ({ openedMenu }) => {
  return (
    <div className="card border-0">
      <div class="card-body">
        <h6 className="text-muted mb-3">
          <b>{translateOpenedMenu(openedMenu)}</b>
        </h6>

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
    </div>
  );
};

export default LeftSideBarSubMenu;
