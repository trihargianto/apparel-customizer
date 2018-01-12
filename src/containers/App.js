import React from "react";
import ReactDOM from "react-dom";
import Logo from "../components/Logo";
import LeftSideBarMenu from "../components/LeftSideBarMenu";

class App extends React.PureComponent {
  render() {
    return (
      <div className="container mt-4">
        <Logo />

        <div className="row">
          <div className="col-5">
            <LeftSideBarMenu />
          </div>
          <div className="col-7" />
        </div>
      </div>
    );
  }
}

export default App;
