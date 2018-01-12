import React from "react";

const ProductDisplay = ({ shirtColor, shirtType }) => {
  return (
    <div className="row">
      <div className="col-2 mt-3" />
      <div className="col-7 px-0" style={{ backgroundColor: shirtColor }}>
        <img src={`/img/${shirtType}_front.png`} alt="" className="img-fluid" />
      </div>
      <div className="col-3">
        <button className="btn btn-success float-sm-right btn-sm mt-3">
          <i className="fa fa-floppy-o" /> Save Image
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
