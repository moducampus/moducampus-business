import React, { Component } from 'react';

import "./Subservice.scss"

class Subservice extends Component {
    render() {
        return (
            <div className="subservice">
                <p className="main-text">{this.props.name}</p>
                <a id="link" href="https://github.com">서비스 이동</a>
                <p className="text">{this.props.info}</p>
            </div>
        );
    }
}

export default Subservice;