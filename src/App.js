import React from "react";
import ReactDOM from "react-dom";

var kanvas = new fabric.Canvas();

class App extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      canvasObject: {
        objects: [
          {
            type: "rect",
            left: 0,
            top: 0,
            width: 100,
            height: 100,
            fill: "#FF0000"
          },
          {
            type: "rect",
            left: 10,
            top: 10,
            width: 100,
            height: 100,
            fill: "#0000FF"
          }
        ],
        background: ""
      }
    };
  }

  componentDidMount() {
    const myWidth = 200;

    kanvas.initialize(this.el, {
      width: 400,
      height: 400
    });

    kanvas.on("object:modified", () => {
      const newObjects = kanvas.toDatalessJSON().objects;

      this.setState({
        canvasObject: {
          objects: newObjects
        }
      });
    });

    kanvas.loadFromDatalessJSON(this.state.canvasObject);
  }

  componentDidUpdate() {
    const newObjects = [...this.state.canvasObject.objects];

    // const index = kanvas.getObjects().indexOf(kanvas.getActiveObject());

    kanvas.loadFromDatalessJSON(
      {
        objects: newObjects,
        background: ""
      },
      kanvas.renderAll.bind(kanvas)
    );
  }

  render() {
    return (
      <div>
        <canvas
          ref={e => (this.el = e)}
          id="coba"
          width="500"
          height="250"
          style={{
            border: "1px solid #aaa",
            margin: "50px 0px 0px 50px"
          }}
        />
      </div>
    );
  }
}

export default App;
