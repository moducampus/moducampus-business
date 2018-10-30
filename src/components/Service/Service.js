import React, { Component } from 'react';

import Subtitle from "components/commons/Subtitle";
import Subservice from "components/commons/Subservice";

import "./Service.scss"

class Service extends Component {

    render() {
        const title = "서비스 소개";
        const serviceData = [
                {name: "모두의 캠퍼스", info:"대학교에서 중요한 시기들을 나누어 수강신청 기간에는 강의평가 공유서비스, 학기 중에는 대학강의 기출문제 공유서비스를 85개 대학교에 제공하고 있습니다. 학생들에게 도움이 될 정보를 모바일과 웹으로 제공하며 현재 서비를 시작한지 1년만에 MAU는 12만 명 정도입니다."},
                {name: "북딜", info: "비싸게는 10만 원도 넘는 대학교재를 학생들끼리 저렴한 가격에 매매할 수 있는 중고교재 플랫폼입니다."},
                {name: "네모공방", info: "발표,팀프로젝트 시 많이 고민하는 것이 바로 피피티 제작입니다. 우리는 대학생들이 본질에 집중할 수 있또록 피피티 템플릿을 제작하여 무료로 나눠주고 있습니다. 피피티는 블로그와 페이스북 페이지로 운영하고 있습니다."}
            ];

        const serviceList = serviceData.map(data =>( <Subservice className="subservice" key={data.name.toString()} name={data.name.toString()} info={data.info.toString()}/>));
        
        return (
            <div className="Service" id="service">
                <div className="container container-content">
                    <Subtitle className="subtitle" title={title} />
                    <div className="service-content">
                        {serviceList}
                    </div>
                </div>
            </div>
        );
    }
}

export default Service;