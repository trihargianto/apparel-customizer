import React from "react";
import FormAddImage from "./FormAddImage";
import FormAddText from "./FormAddText";
import FormChangeProduct from "../containers/FormChangeProduct";

const translateOpenedMenu = openedMenu => {
  switch (openedMenu) {
    case "change":
      return "CHANGE PRODUCT OPTIONS";
    case "text":
      return "TEXT OPTIONS";
    case "image":
      return "IMAGE OPTIONS";
    default:
      return "UNKNOWN ACTION";
  }
};

const LeftSideBarSubMenu = ({ openedMenu }) => {
  return (
    <div className="card border-0">
      <div className="card-body">
        <h6 className="text-muted mb-4">
          <small>
            <b>{translateOpenedMenu(openedMenu)}</b>
          </small>
        </h6>
        <hr className="mt-0 border-light" />

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
