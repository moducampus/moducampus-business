import React, { Component } from 'react';

import Subtitle from 'components/commons/Subtitle';
import Subnews from 'components/commons/Subnews';

import "./News.scss"

class News extends Component {
    render() {
        const title = "NEWS";
        const newsData = [
            {title: "공지사항", text:"모두의 캠퍼스 2.0 리뉴얼",link:"https://www.naver.com/"},
            {title: "언론보도", text:"북딜 거래량 10만 건 달성", link:"https://www.naver.com/"},
            {title: "블로그", text:"커뮤니티 개발사항", link:"https://www.naver.com/"},
            {title: "더보기", text:"", link:"https://www.naver.com/"},
        ];

        const newsList = newsData.map(data =>( <Subnews className="subservice" key={data.title.toString()} title={data.title.toString()} text={data.text.toString()}/>));
        
        return (
            <div className="News" id="news">
                <div className="container news-wrapper">
                    <Subtitle className="subtitle" title={title}/>
                    <div className="news-content">{newsList}</div>
                </div>
            </div>
        );
    }
}

export default News;

