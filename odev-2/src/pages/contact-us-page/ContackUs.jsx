import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ContackUs() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")


    const sendMessage = () => {
        if (name && email && subject && message) {
            const userMessage = {
                name: name,
                email: email,
                subject: subject,
                message: message,
            }
            axios.post('http://localhost:3000/messages', userMessage)
                .then(alert("Messajınız İletilmiştir."))
                .catch(error => {
                    console.error('İstek hatası:', error);
                });
            setName("")
            setEmail("")
            setSubject("")
            setMessage("")
        }
        else {
            alert("Lütfen bütün alanları doldurunuz.")
        }
    }


    return (
        <div>
            <div className="breadcrumb-area section-space--breadcrumb">
                <div className="container">
                    <div style={{ paddingTop: "100px" }} className="row">
                        <div className="col-lg-6 offset-lg-3">
                            {/*=======  breadcrumb wrapper  =======*/}
                            <div className="breadcrumb-wrapper">
                                <h2 className="page-title">Contact Us</h2>
                                <ul className="breadcrumb-list">
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li className="active">Contact Us</li>
                                </ul>
                            </div>
                            {/*=======  End of breadcrumb wrapper  =======*/}
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content-wrapper">
                {/*=======  map area  =======*/}
                <div className="box-layout-map-area section-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/*=======  box layout map container  =======*/}
                                <div className="box-layout-map-container">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d96671.23167416989!2d-73.934899!3d40.784542!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2sus!4v1702745180125!5m2!1str!2sus"
                                        width={"100%"}
                                        height={450}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                                {/*=======  End of box layout map container  =======*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*=======  End of map area  =======*/}
                {/*=======  contact icon text  =======*/}
                <div className="contact-icon-text-area section-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/*=======  contact icon text wrapper  =======*/}
                                <div className="contact-icon-text-wrapper">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            {/*=======  single contact icon text  =======*/}
                                            <div className="single-contact-icon-text">
                                                <div className="single-contact-icon-text__icon">
                                                    <i className="fa fa-map-marker" />
                                                </div>
                                                <h3 className="single-contact-icon-text__title">ADDRESS</h3>
                                                <p className="single-contact-icon-text__value">
                                                    Joseph, Canada 10020
                                                </p>
                                            </div>
                                            {/*=======  End of single contact icon text  =======*/}
                                        </div>
                                        <div className="col-sm-4">
                                            {/*=======  single contact icon text  =======*/}
                                            <div className="single-contact-icon-text">
                                                <div className="single-contact-icon-text__icon">
                                                    <i className="fa fa-phone" />
                                                </div>
                                                <h3 className="single-contact-icon-text__title">
                                                    PHONE NUMBER
                                                </h3>
                                                <p className="single-contact-icon-text__value">
                                                    (012) 3456 7890
                                                </p>
                                            </div>
                                            {/*=======  End of single contact icon text  =======*/}
                                        </div>
                                        <div className="col-sm-4">
                                            {/*=======  single contact icon text  =======*/}
                                            <div className="single-contact-icon-text">
                                                <div className="single-contact-icon-text__icon">
                                                    <i className="fa fa-envelope" />
                                                </div>
                                                <h3 className="single-contact-icon-text__title">
                                                    MAIL ADDRESS
                                                </h3>
                                                <p className="single-contact-icon-text__value">
                                                    info@website.com
                                                </p>
                                            </div>
                                            {/*=======  End of single contact icon text  =======*/}
                                        </div>
                                    </div>
                                </div>
                                {/*=======  End of contact icon text wrapper  =======*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*=======  End of contact icon text  =======*/}
                {/*=======  contact form with content  =======*/}
                <div className="contact-form-content-area section-space--contact-form">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/*=======  contact form content wrapper  =======*/}
                                <div className="contact-form-content-wrapper">
                                    <div className="row">
                                        <div className="col-md-8">
                                            {/*=======  contact form wrapper  =======*/}
                                            <div className="contact-form-wrapper">
                                                <div
                                                    id="contact-form"
                                                    action="https://htmldemo.net/robin/robin/assets/php/mail.php"
                                                    method="post"
                                                >
                                                    <div className="row">
                                                        <div className="col-lg-4 col-sm-6">
                                                            <input
                                                                value={name}
                                                                onChange={e => setName(e.target.value)}
                                                                type="text"
                                                                placeholder="First Name *"
                                                                name="customerName"
                                                                id="customername"
                                                                required=""
                                                            />
                                                        </div>
                                                        <div className="col-lg-4 col-sm-6">
                                                            <input
                                                                value={email}
                                                                onChange={e => setEmail(e.target.value)}
                                                                type="text"
                                                                placeholder="Email *"
                                                                name="customerEmail"
                                                                id="customerEmail"
                                                                required=""
                                                            />
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <input
                                                                value={subject}
                                                                onChange={e => setSubject(e.target.value)}
                                                                type="text"
                                                                placeholder="Subject"
                                                                name="contactSubject"
                                                                id="contactSubject"
                                                            />
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <textarea
                                                                value={message}
                                                                onChange={e => setMessage(e.target.value)}
                                                                cols={30}
                                                                rows={10}
                                                                placeholder="Message *"
                                                                name="contactMessage"
                                                                id="contactMessage"
                                                                required=""
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <button
                                                                onClick={() => sendMessage()}
                                                                className="theme-button"
                                                            >
                                                                SEND A MESSAGE
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="form-messege" />
                                            </div>
                                            {/*=======  End of contact form wrapper  =======*/}
                                        </div>
                                        <div className="col-md-4">
                                            {/*=======  contact form content  =======*/}
                                            <div className="contact-form-content">
                                                <p>
                                                    Please view our FAQ to find answers to your questions or
                                                    send us an email for general questions! Due to unexpected
                                                    volumes, it is taking us a little longer than we would
                                                    like to respond to emails. Our current email response time
                                                    is 3 business days.
                                                </p>
                                                <ul className="social-links">
                                                    <li>
                                                        <a href="http://www.facebook.com/">
                                                            <i className="fa fa-facebook" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="http://www.plus.google.com/">
                                                            <i className="fa fa-google-plus" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="http://www.linkedin.com/">
                                                            <i className="fa fa-linkedin" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="http://www.twitter.com/">
                                                            <i className="fa fa-twitter" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/*=======  End of contact form content  =======*/}
                                        </div>
                                    </div>
                                </div>
                                {/*=======  End of contact form content wrapper  =======*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*=======  End of contact form with content  =======*/}
            </div>

        </div >
    )
}

export default ContackUs