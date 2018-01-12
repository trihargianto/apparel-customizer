import React from "react";

const ButtonComponentItem = ({ isActive, icon, label }) => {
  return (
    <button
      className={`btn btn-${!isActive ? "dark" : "primary"} btn-block`}
      style={{ paddingTop: "13px" }}
    >
      <i className={`fa fa-${icon}`} style={{ fontSize: "1.3rem" }} /> <br />
      <small>
        <b>{label}</b>
      </small>
    </button>
  );
};

export default ButtonComponentItem;
