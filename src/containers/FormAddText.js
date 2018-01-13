import React, { Component } from "react";

class FormAddText extends Component {
  render() {
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
              placeholder="Enter your awesome text here .."
            />
            <button className="btn btn-default mt-3">Submit text</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormAddText;
