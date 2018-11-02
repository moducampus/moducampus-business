import React, { Component } from 'react';

import "./Subnews.scss";

class Subnews extends Component {
    render() {
        return (
            <div className="Subnews" id="subnews">
                <div className="subnews-wrapper">
                    <div className="subnews-line"></div>
                    <div className="subnews-content">
                        <p className="subnews-title">{this.props.title}</p>
                        <p className="subnews-text">{this.props.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Subnews;