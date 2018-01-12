import React, { Component } from "react";
import { CirclePicker } from "react-color";
import { connect } from "react-redux";
import { updateShirtColor } from "../actions/FormChangeProductAction";

class FormChangeProduct extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>
              <small className="form-text text-muted">Choose Shirt Color</small>
            </label>
            <CirclePicker
              color={this.props.shirtColor}
              onChangeComplete={color =>
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

const mapStateToProps = state => ({
  shirtColor: state.productChanger.shirtColor
});

export default connect(mapStateToProps)(FormChangeProduct);
