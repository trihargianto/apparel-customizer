import React from "react";
import ReactDOM from "react-dom";
import Logo from "../components/Logo";
import LeftSideBarMenu from "../components/LeftSideBarMenu";
import { connect } from "react-redux";
import { updateOpenedMenu } from "../actions/AppAction";

class App extends React.Component {
  render() {
    const { openedMenu, shirtColor, dispatch } = this.props;

    return (
      <div className="container mt-4">
        <Logo />

        <div className="row">
          <div className="col-5">
            <LeftSideBarMenu
              openedMenu={openedMenu}
              onClickMenu={item => dispatch(updateOpenedMenu(item))}
            />
          </div>
          <div className="col-7 bg-white">
            <div className="row">
              <div className="col-2 mt-3" />
              <div
                className="col-7 px-0"
                style={{ backgroundColor: shirtColor }}
              >
                <img
                  src="/img/basic_tshirt_front.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-2">
                <button className="btn btn-light mt-3">
                  <i className="fa fa-floppy-o" /> Save Image
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  openedMenu: state.app.openedMenu,
  shirtColor: state.productChanger.shirtColor
});

export default connect(mapStateToProps)(App);
