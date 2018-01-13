import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCanvas } from "../actions/ProductDisplayAction";

class ProductDisplay extends Component {
  componentDidMount() {
    window.pcanvas.initialize(this.el, {
      width: 520,
      height: 580
    });

    window.pcanvas.loadFromJSON(
      this.props.canvasObject,
      window.pcanvas.renderAll.bind(window.pcanvas)
    );

    window.pcanvas.on("object:modified", () => {
      const newObjects = window.pcanvas.toDatalessJSON().objects;

      this.props.dispatch(
        updateCanvas({
          canvasObject: {
            objects: newObjects,
            background: this.props.canvasObject.background,
            overlayImage: this.props.canvasObject.overlayImage
          }
        })
      );
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const newObjects = [...this.props.canvasObject.objects];

    window.pcanvas.loadFromJSON(
      {
        objects: newObjects,
        background: this.props.shirtColor,
        overlayImage: {
          ...this.props.canvasObject.overlayImage,
          src: `img/${this.props.shirtType}_front.png`
        }
      },
      window.pcanvas.renderAll.bind(window.pcanvas)
    );
  }

  render() {
    const { shirtColor, shirtType } = this.props;

    return (
      <div className="row">
        <div className="col-2 mt-3" />
        <div className="col-12 px-0 pb-3">
          <canvas ref={e => (this.el = e)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  canvasObject: state.productDisplay
});

export default connect(mapStateToProps)(ProductDisplay);
