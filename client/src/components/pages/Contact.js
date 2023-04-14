import React from 'react'
import Button from '../utils/Button';
import Input from '../utils/Input';
import Wrapper from '../../assets/wrappers/Contact'

export default function Contact() {
    return (
        <Wrapper>
        <div className="contact-us">
            <h1 className="title">Contact us</h1>
            <div className="contact-us-content">
                <h3>Questions? Comments? We'd love to hear from you!</h3>
                <p>Please fill out the contact form below with as much detail as possible. We will get back to you within 1-3 business days. </p>
                <p>For Marketing inquiries or collaborations, please contact </p>
            </div>

            <div className="contact-form">
                <div className="name-email">
                    <Input type="text"   label="Name" />
                    <Input type="email"   label="Email" />
                </div>
                <Input type="text"   label="Message" className="contact-form-message"/>
                <Button text="Send" ></Button>
            </div>
        </div>
        </Wrapper>
    )
}
