import React from "react";
import ReactDOM from "react-dom";
import Logo from "../components/Logo";
import LeftSideBarMenu from "../components/LeftSideBarMenu";
import ProductDisplay from "../containers/ProductDisplay";
import { connect } from "react-redux";
import { updateOpenedMenu } from "../actions/AppAction";

class App extends React.Component {
  saveImg() {
    var gh = pcanvas.toDataURL("png");

    var a = window.document.createElement("a");
    a.href = gh;
    a.download = "image.png";
    a.crossOrigin = "anonymous";

    a.click();
  }

  render() {
    const { openedMenu, shirtColor, shirtType, dispatch } = this.props;

    return (
      <div className="container mt-2 mb-2">
        <div id="preloadImage1" />
        <div id="preloadImage2" />
        <div id="preloadImage3" />
        <div id="preloadImage4" />

        <div className="row">
          <div className="col-6">
            <Logo />
          </div>
          <div className="col-6 pr-0">
            <button
              className="btn btn-success float-sm-right btn-md mt-3"
              onClick={this.saveImg}
            >
              <i className="fa fa-floppy-o mr-1" /> Save Image
            </button>
          </div>
          <div className="col-5">
            <LeftSideBarMenu
              openedMenu={openedMenu}
              onClickMenu={item => dispatch(updateOpenedMenu(item))}
            />
          </div>
          <div className="col-7 bg-white">
            <ProductDisplay shirtColor={shirtColor} shirtType={shirtType} />
          </div>
        </div>

        <p align="center">
          <hr style={{ width: "50%" }} className="mt-4" />
          Handcrafted by{" "}
          <a href="http://github.com/trihargianto">@trihargianto</a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  openedMenu: state.app.openedMenu,
  shirtColor: state.productChanger.shirtColor,
  shirtType: state.productChanger.shirtType
});

export default connect(mapStateToProps)(App);
