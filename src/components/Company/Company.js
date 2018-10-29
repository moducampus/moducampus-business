import React, { Component } from "react";

import Subtitle from "components/commons/Subtitle";
import './Company.scss';

class Company extends Component {

  render() {
    const title = "회사 소개";
    const data = "모두의캠퍼스는 대학생을 위한 서비스입니다. 우리는 대학생들이 다양한 경험을 통해 같이 성장할 수 있는 대학문화와 사회를 꿈꿉니다. 그래서 어떤 곳보다 편하게, 스스로 가치를 깨달을 수 있도록 획기적으로 시도하고 모험합니다. 우리는 대학생들의 다양한 경험을 유익한 정보로 가공하여 서비스합니다.";
    return (
      <div className="Company" id="company">
          <div className="container company-content">
            <Subtitle className="subtitle" title={title}/>
            <p className="company-text">{data}</p> 
          </div>
      </div>
    );
  }
}

export default Company;
