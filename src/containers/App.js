import React from "react";
import ReactDOM from "react-dom";
import Logo from "../components/Logo";
import LeftSideBarMenu from "../components/LeftSideBarMenu";
import { connect } from "react-redux";
import { updateOpenedMenu } from "../actions/AppAction";

class App extends React.Component {
  render() {
    const { openedMenu, dispatch } = this.props;

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
          <div className="col-7" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  openedMenu: state.app.openedMenu
});

export default connect(mapStateToProps)(App);
