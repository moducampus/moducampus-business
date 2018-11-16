import React, { Component } from 'react';
import axios from 'axios';

import Subtitle from "components/commons/Subtitle";
import BigButton from "components/commons/Button/BigButton";

import './Contact.scss';
//TODO: form data 부분 완성

class Contact extends Component {

    constructor(props) {
        super();
        this.state = {
            formTitle: "",
            formName: "",
            formContact: "",
            formQuestion: ""
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
        alert(this.state.formContact);
        event.preventDefault();
        
        /*
        const {formTitle, formName, formContact, formQuestion} = this.state;
        console.log(this.state);

        axios.post('/', {formTitle, formName, formContact, formQuestion})
            .then((result)=>{
                console.log(result);
            });

        */

    }

    render() {
        const title = "CONTACT US";
        const mapText = "서울특별시 성북구 안암로 145 고려대학교 산학관 5층 506호";
        const btnName = "문의하기";
        
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
                                <textarea name="formQuestion" form="user-form" value={this.state.formQuestion} onChange={this.handleInputChange} placeholder="문의사항"></textarea>
                            </form>
                        </div>
                        <BigButton className="submit-button" name={btnName} url={""}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;