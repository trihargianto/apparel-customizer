import { UPDATE_CANVAS, UPDATE_OBJECTS_CANVAS } from "../constants/actionTypes";

const initialState = {
  objects: [],
  background: "#9c27b0",
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
    src: `img/basic_tshirt_front.png`,
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
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CANVAS:
      return {
        ...action.payload
      };

    case UPDATE_OBJECTS_CANVAS:
      return {
        ...state,
        objects: [...action.payload]
      };

    default:
      return state;
  }
};
