import React, { Component } from 'react';
import "./Subteam.scss";

class Subteam extends Component {
    render() {
        return (
            <div className="Subteam">
                <div className="subteam-content">
                    <p className="subteam-position">{this.props.position}</p>
                    <p className="subteam-name">{this.props.name}</p>
                    <p className="subteam-text">{this.props.text}</p>
                </div>
            </div>
        );
    }
}

/*
<img src="https://mblogthumb-phinf.pstatic.net/20150427_84/ninevincent_1430122792324niOLy_JPEG/kakao_2.jpg?type=w420@2x" alt="profile-photo"/>
*/

export default Subteam;