import React from "react";

const ButtonComponentItem = ({ isActive, icon, label, onClick, type }) => {
  return (
    <button
      className={`btn btn-${
        !isActive ? "dark" : "light very-light"
      } btn-block my-0 py-4`}
      onClick={() => onClick(type)}
    >
      <i className={`fa fa-${icon}`} style={{ fontSize: "1.3rem" }} /> <br />
      <small>
        <b>{label}</b>
      </small>
    </button>
  );
};

export default ButtonComponentItem;
