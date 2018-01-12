import React, { Component } from "react";
import ButtonComponentItem from "./ButtonComponentItem";

class LeftSideBarMenu extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <ButtonComponentItem icon="files-o" label="CHANGE" />
          <ButtonComponentItem icon="text-height" label="TEXT" isActive />
          <ButtonComponentItem icon="picture-o" label="IMAGE" />
        </div>
        <div className="col-9" />
      </div>
    );
  }
}

export default LeftSideBarMenu;
