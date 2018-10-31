import React, { Component } from "react";

import "./Subservice.scss";

class Subservice extends Component {
  render() {
    return (
      <div className="Subservice">
      <div className="service-wrapper">
        <p className="service-main-text">{this.props.name}</p>
        <a className="service-link" href="https://github.com">
          서비스 이동
        </a>
      </div>
      <p className="service-text">{this.props.info}</p>
      </div>
    );
  }
}

export default Subservice;
