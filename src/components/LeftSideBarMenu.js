import React from "react";
import ButtonComponentItem from "./ButtonComponentItem";
import LeftSideBarSubMenu from "../components/LeftSideBarSubMenu";

const LeftSideBarMenu = ({ openedMenu, onClickMenu }) => {
  return (
    <div className="row">
      <div className="col-3" style={{ paddingRight: "0" }}>
        <ButtonComponentItem
          icon="files-o"
          label="CHANGE"
          isActive={openedMenu === "change"}
          type="change"
          onClick={onClickMenu}
        />
        <ButtonComponentItem
          icon="text-height"
          label="TEXT"
          isActive={openedMenu === "text"}
          type="text"
          onClick={onClickMenu}
        />
        <ButtonComponentItem
          icon="picture-o"
          label="IMAGE"
          isActive={openedMenu === "image"}
          type="image"
          onClick={onClickMenu}
        />
      </div>
      <div className="col-9" style={{ paddingLeft: "0" }}>
        <LeftSideBarSubMenu openedMenu={openedMenu} />
      </div>
    </div>
  );
};

export default LeftSideBarMenu;
