import React, { Component, Fragment } from "react";
import "../styles/App.scss";

import Header from "components/Header";
import Company from "components/Company";
import Service from "components/Service";
import Advertise from "components/Advertise";
import News from "components/News";
import Team from "components/Team";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Company />
        <Service />
        <Advertise/>
        <News/>
        <Team/>
      </Fragment>
    );
  }
}

export default App;
