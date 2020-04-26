import React from 'react';
import { HuePicker } from 'react-color';

const FormEditText = ({ text, fill, fontWeight, handleChange }) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">
          <small className="form-text text-muted">Edit text</small>
        </label>
        <input
          name="newText"
          type="text"
          onChange={(e) => handleChange('valueText', e.target.value)}
          value={text}
          className="form-control"
          placeholder="Enter your awesome text here .."
        />
      </div>
      <div className="form-group">
        <small className="form-text text-muted">Color</small>
        <div className="mt-2">
          <HuePicker width="100%" color={fill} />
        </div>
      </div>
      <div className="form-group">
        <small className="form-text text-muted">Text Formatting</small>
        <div className="mt-2">
          <button
            type="button"
            className={`btn btn-${
              fontWeight === 'bold' ? 'secondary' : 'default'
            } mr-1`}
          >
            <i className="fa fa-bold" />
          </button>
          <button type="button" className={`btn btn-default mr-1`}>
            <i className="fa fa-italic" />
          </button>
          <button type="button" className={`btn btn-default mr-1`}>
            <i className="fa fa-underline" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormEditText;
