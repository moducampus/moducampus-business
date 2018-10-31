import React, { Component } from "react";

import "./Subtitle.scss"


class Subtitle extends Component {
  render() {
    return (
      <div className="Subtitle" id="subtitle">
        <div className="subtitle-content">
          <div className="small-square" />
          <h2 className="subtitle-text">{this.props.title}</h2>
        </div>
      </div>
    );
  }
}

export default Subtitle;
