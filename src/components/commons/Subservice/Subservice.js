import React, { Component } from "react";

import "./Subservice.scss";

class Subservice extends Component {
  render() {
    return (
      <div className="Subservice">
        <p className="service-main-text">{this.props.name}</p>
        <a className="service-link" href="https://github.com">
          서비스 이동
        </a>
        <p className="service-text">{this.props.info}</p>
      </div>
    );
  }
}

export default Subservice;
