import React from "react";

const FormNewText = ({ handleSubmitText, onChangeText, newText }) => (
  <form>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">
        <small className="form-text text-muted">Add new text</small>
      </label>
      <input
        name="newText"
        onChange={onChangeText}
        value={newText}
        type="text"
        className="form-control"
        placeholder="Enter your awesome text here .."
      />
      <button
        type="button"
        onClick={handleSubmitText}
        className="btn btn-default mt-3"
      >
        Submit text
      </button>
    </div>
  </form>
);

export default FormNewText;
