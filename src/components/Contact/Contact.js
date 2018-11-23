import React, { Component } from 'react';
import axios from 'axios';

import Subtitle from "components/commons/Subtitle";
import './Contact.scss';

class Contact extends Component {

    constructor(props) {
        super();
        this.state = {
            formTitle: "",
            formName: "",
            formContact: "",
            formContents: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    handleSubmit(event) {

        const data = JSON.stringify({
            title: this.state.formTitle, 
            name: this.state.formName,
            contact: this.state.formContact,
            contents: this.state.formContents
        })

        axios.post('http://localhost:3001', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: data,
        }).then(response => alert('문의가 접수되었습니다😄'))
          .catch(error => alert('전송 실패했습니다😂'))

        event.preventDefault();  
    }

    /*TODO: 전송 성공하면 form data에 있는 값들 모두 사라지게 */

    render() {
        const title = "CONTACT US";
        const mapText = "서울특별시 성북구 안암로 145 고려대학교 산학관 5층 506호";
        
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
                            <form id="userform" onSubmit={this.handleSubmit}>
                                <input name="formTitle" type= "text" value={this.state.formTitle} onChange={this.handleInputChange} placeholder="제목"></input>
                                <input name="formName" type= "text" value={this.state.formName} onChange={this.handleInputChange} placeholder="이름"></input>
                                <input name="formContact" type= "email" value={this.state.formContact} onChange={this.handleInputChange} placeholder="이메일 또는 전화번호"></input>
                                <textarea name="formContents" form="user-form" rows="5" value={this.state.formQuestion} onChange={this.handleInputChange} placeholder="문의사항"></textarea>
                                <input type="submit" value="문의하기"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;