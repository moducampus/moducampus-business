import React, { Component } from 'react';
import Subtitle from "components/commons/Subtitle";

import './Contact.scss';

//TODO: form data 부분 완성하고, 위로 바로 올리는 버튼 생성하기

class Contact extends Component {
    
    render() {
        const title = "CONTACT US";
        const mapText = "서울특별시 성북구 안암로 145 고려대학교 산학관 5층 506호";

        return (
            <div className="Contact" id="contact">
                <div className="container contact-wrapper">
                    <Subtitle className="subtitle" title={title}/>
                    <div className="contact-map">
                        <p className="contact-map-text">{mapText}</p>
                        <img className="contact-map-image" src="" alt=""/>
                    </div>
                    <form id="userform">
                        <input type= "text" placeholder="제목"></input>
                        <input type= "text" placeholder="이름"></input>
                        <input type= "email" placeholder="이메일 또는 전화번호"></input>
                        <textarea rows="4" cols="50" form="user-form "></textarea>
                        <input type="submit" placeholder="제목"></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;