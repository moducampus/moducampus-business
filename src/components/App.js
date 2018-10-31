import React, { Component, Fragment } from "react";
import "../styles/App.scss";

import Header from "components/Header";
import Company from "components/Company";
import Service from "components/Service";
import Advertise from "components/Advertise";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Company />
        <Service />
        <Advertise/>
      </Fragment>
    );
  }
}

export default App;
