import React, { Component } from "react";

class ProductDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canvasObject: {
        // objects: [
        //   {
        //     type: "rect",
        //     left: 0,
        //     top: 0,
        //     width: 100,
        //     height: 100,
        //     fill: "#000"
        //   }
        // ],
        objects: [],
        background: props.shirtColor,
        overlayImage: {
          angle: 0,
          backgroundColor: "",
          clipTo: null,
          cropX: 0,
          cropY: 0,
          crossOrigin: "",
          fill: "rgb(0,0,0)",
          fillRule: "nonzero",
          filters: [],
          flipX: false,
          flipY: false,
          globalCompositeOperation: "source-over",
          width: 540,
          height: 600,
          top: 0,
          left: 0,
          opacity: 1,
          originX: "left",
          originY: "top",
          scaleX: 1,
          scaleY: 1,
          shadow: null,
          skewX: 0,
          skewY: 0,
          src: `img/${props.shirtType}_front.png`,
          stroke: null,
          strokeDashArray: null,
          strokeLineCap: "butt",
          strokeLineJoin: "miter",
          strokeMiterLimit: 10,
          strokeWidth: 0,
          transformMatrix: null,
          type: "image",
          version: "2.0.0-rc.4",
          visible: true
        }
      }
    };
  }

  componentDidMount() {
    window.pcanvas.initialize(this.el, {
      width: 520,
      height: 580
    });

    window.pcanvas.loadFromJSON(
      this.state.canvasObject,
      window.pcanvas.renderAll.bind(window.pcanvas)
    );

    window.pcanvas.on("object:modified", () => {
      const newObjects = window.pcanvas.toDatalessJSON().objects;

      this.setState({
        canvasObject: {
          objects: newObjects,
          background: this.state.canvasObject.background,
          overlayImage: this.state.canvasObject.overlayImage
        }
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const newObjects = [...this.state.canvasObject.objects];

    window.pcanvas.loadFromJSON(
      {
        objects: newObjects,
        background: this.props.shirtColor,
        overlayImage: {
          ...this.state.canvasObject.overlayImage,
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

export default ProductDisplay;
