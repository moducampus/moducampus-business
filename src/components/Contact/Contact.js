import React, { Component } from 'react';
import Subtitle from "components/commons/Subtitle";
import BigButton from "components/commons/Button/BigButton";

import './Contact.scss';

//TODO: form data 부분 완성하고, 위로 바로 올리는 버튼 생성하기

class Contact extends Component {
    
    render() {
        const title = "CONTACT US";
        const mapText = "서울특별시 성북구 안암로 145 고려대학교 산학관 5층 506호";
        const btnName = "문의하기";
        const btnUrl = "https://www.naver.com/";

        return (
            <div className="Contact" id="contact">
                <div className="container contact-wrapper">
                    <Subtitle className="subtitle" title={title}/>
                    <div className="contact-content">
                        <div className="contact-map">
                            <p className="contact-map-text">{mapText}</p>
                            <img className="contact-map-image" src=".\moducampus.png" alt="mocam"/>
                        </div>
                        <div className="contact-form">
                            <form id="userform">
                                <input className="title-form" type= "text" placeholder="제목"></input>
                                <input type= "text" placeholder="이름"></input>
                                <input type= "email" placeholder="이메일 또는 전화번호"></input>
                                <textarea form="user-form" placeholder="문의사항"></textarea>
                            </form>
                        </div>
                        <BigButton className="submit-button" name={btnName} url={btnUrl}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;