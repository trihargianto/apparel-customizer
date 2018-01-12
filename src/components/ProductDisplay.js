import React from "react";

const ProductDisplay = ({ shirtColor, shirtType }) => {
  return (
    <div className="row">
      <div className="col-2 mt-3" />
      <div className="col-8 px-0" style={{ backgroundColor: shirtColor }}>
        <img src={`/img/${shirtType}_front.png`} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default ProductDisplay;
