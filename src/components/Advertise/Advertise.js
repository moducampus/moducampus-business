import React, { Component } from 'react';

import Subtitle from "components/commons/Subtitle";
import BigButton from "components/commons/Button/BigButton";

import './Advertise.scss';

class Advertise extends Component {
    render() {
        const title = "제휴 광고";
        const btnName = "광고제안서";
        return (
            <div className="Advertise" id="advertise">
                <div className="container advertise-wrapper">
                    <Subtitle className="subtitle" title={title}/>
                    <div className="advertise-content">
                        <p className="advertise-main-text">20대 타겟 전문</p>
                        <p className="advertise-text">트렌드에 민감한 20개를 타겟으로 합니다. 작은 차이에도 민감하게 반응하는 타겟을 공략하기 위해 항상 고민하고 테스트하며 콘텐츠를 기확하고 있습니다.</p>
                    </div>
                    <BigButton name={btnName} />
                </div>     
            </div>
        );
    }
}

export default Advertise;