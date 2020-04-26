import React from 'react';
import PropTypes from 'prop-types';

const FormDropdown = (props) => {
  return (
    <div>
      <select
        name={props.name}
        className="form-control"
        onChange={props.onChange}
        value={props.value || ''}
        disabled={props.disabled || false}
      >
        {props.usePlaceholder && (
          <option value="">{props.placeholder || '- Choose One:'}</option>
        )}
        {props.items.map((item) => {
          return (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

FormDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  usePlaceholder: PropTypes.bool,
};

FormDropdown.defaultProps = {
  usePlaceholder: true,
};

export default FormDropdown;
