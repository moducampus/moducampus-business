import React, { Component } from 'react';

import Subtitle from 'components/commons/Subtitle';

import "./News.scss"

class News extends Component {
    render() {
        const title = "NEWS";

        return (
            <div className="news-section">
                <Subtitle className="subtitle" title={title}/>
            </div>
        );
    }
}

export default News;

