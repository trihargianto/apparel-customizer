import React, { Component } from 'react';
import { CirclePicker } from 'react-color';
import { connect } from 'react-redux';
import {
  updateShirtColor,
  updateShirtType,
} from '../actions/FormChangeProductAction';
import FormDropdown from '../components/FormDropdown';

const dropdownDataProvider = [
  'basic_tshirt',
  'female_tshirt',
  'long_sleeve',
  'hoodie',
].map((item) => ({
  key: item,
  value: item.charAt(0).toUpperCase() + item.slice(1).replace('_', ' '),
}));

class FormChangeProduct extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>
              <small className="form-text text-muted">Choose Type</small>
            </label>
            <FormDropdown
              name="shirtType"
              value={this.props.shirtType}
              onChange={(e) =>
                this.props.dispatch(updateShirtType(e.target.value))
              }
              items={dropdownDataProvider}
              usePlaceholder={false}
            />
          </div>
          <div className="form-group">
            <label>
              <small className="form-text text-muted">Choose Shirt Color</small>
            </label>
            <CirclePicker
              color={this.props.shirtColor}
              onChangeComplete={(color) =>
                this.props.dispatch(updateShirtColor(color.hex))
              }
              width="100%"
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  shirtColor: state.productChanger.shirtColor,
  shirtType: state.productChanger.shirtType,
});

export default connect(mapStateToProps)(FormChangeProduct);
