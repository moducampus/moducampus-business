import React, { Component } from 'react';

import "./BigButton.scss";

class BigButton extends Component {
    render() {
        return (
            <div className="BigButton" id="bigbutton">
                <div className=" bigbtn-wrapper">
                    <a href="https://www.naver.com/">
                        <div className="btn-text">
                            <span>{this.props.name}</span>
                            <span>＞</span>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default BigButton;