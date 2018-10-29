import React, { Component } from 'react';

import "./Header.scss"

class Header extends Component {
    render() {
        const title = "대학생을 위한 모두의캠퍼스";

        return (
    
            <div className="Header" id="header">
                <div className="rectangle-over"></div>
                <div className="rectangle-content">
                    <div className="container">
                        <h1 className="main-title">{title}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

// id를 정의할 때는 js로 제어가 필요하거나, hash URL을 써서 컨텐츠를 관리할 때