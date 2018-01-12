import React from "react";

const FormAddText = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            <small className="form-text text-muted">Text</small>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your awesome text here .."
          />
        </div>
      </form>
    </div>
  );
};

export default FormAddText;
