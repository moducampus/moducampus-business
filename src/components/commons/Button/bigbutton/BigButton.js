import React, { Component } from 'react';

import "./BigButton.scss";

class BigButton extends Component {
    render() {
        return (
            <div className="BigButton" id="bigbutton">
                <div className="bigbtn-wrapper">
                    <a href={this.props.url}>
                        <div className="btn-text">
                            <p>{this.props.name}</p>
                            <p>＞</p>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default BigButton;