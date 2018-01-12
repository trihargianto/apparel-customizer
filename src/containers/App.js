import React from "react";
import ReactDOM from "react-dom";
import Logo from "../components/Logo";
import LeftSideBarMenu from "../components/LeftSideBarMenu";
import ProductDisplay from "../components/ProductDisplay";
import { connect } from "react-redux";
import { updateOpenedMenu } from "../actions/AppAction";

class App extends React.Component {
  render() {
    const { openedMenu, shirtColor, shirtType, dispatch } = this.props;

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
            <ProductDisplay shirtColor={shirtColor} shirtType={shirtType} />
          </div>
        </div>
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
