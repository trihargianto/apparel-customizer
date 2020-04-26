import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateObjectsCanvas } from '../actions/ProductDisplayAction';
import { updateStateByName } from '../actions/FormAddTextAction';
import FormNewText from '../components/FormNewText';
import FormEditText from '../components/FormEditText';

class FormAddText extends Component {
  constructor() {
    super();

    this.state = {
      newText: '',
    };

    this.handleSubmitText = this.handleSubmitText.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.reRenderCanvas = this.reRenderCanvas.bind(this);
  }

  handleSubmitText() {
    if (this.state.newText !== '') {
      let objectsClone = [...this.props.canvasObject.objects];

      const obj = new fabric.Text(this.state.newText, {
        textAlign: 'center',
        left: 100,
        top: 100,
        width: 100,
        fontWeight: 'normal',
        fill: '#FFFFFF',
      });

      objectsClone.push(obj);

      this.props.dispatch(updateObjectsCanvas(objectsClone));

      this.setState({ newText: '' });
    }
  }

  onChangeText(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleChange(stateName, stateValue) {
    this.props.dispatch(updateStateByName(stateName, stateValue));
  }

  reRenderCanvas() {
    const newObjects = this.props.canvasObject.objects;
    console.log(newObjects);
    // window.pcanvas.loadFromJSON(
    //   {
    //     objects: newObjects,
    //     background: this.props.shirtColor,
    //     overlayImage: {
    //       ...this.props.canvasObject.overlayImage,
    //       src: `img/${this.props.shirtType}_front.png`
    //     }
    //   },
    //   window.pcanvas.renderAll.bind(window.pcanvas)
    // );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.editVal.valueText !== this.props.editVal.valueText) {
      this.reRenderCanvas();
    }
  }

  render() {
    const { props } = this;

    return (
      <div>
        {this.props.optionMode === 'add' ? (
          <FormNewText
            handleSubmitText={this.handleSubmitText}
            onChangeText={this.onChangeText}
            newText={this.state.newText}
          />
        ) : (
          <FormEditText
            text={props.editVal.valueText}
            fill={props.editVal.valueColor}
            fontWeight={props.editVal.valueFontWeight}
            handleChange={this.handleChange}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  canvasObject: state.productDisplay,
  optionMode: state.textOption.mode,
  editVal: state.textOption,
  shirtColor: state.productChanger.shirtColor,
  shirtType: state.productChanger.shirtType,
});

export default connect(mapStateToProps)(FormAddText);
