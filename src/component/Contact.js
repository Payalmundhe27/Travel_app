import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
    <h1>Contact</h1>

    <div className="contact-info-container">
    <div className="contact-box">
    <i className="phone-icon"></i>
    <h3>Call US</h3>
    <p>+91876388947</p>
    </div>

    <div className="contact-box">
    <i className="mail-icon"></i>
    <h3>Mail US</h3> 
    <p>Mail@GoyatrebournStravels.com</p>
    </div>

     <div className="contact-box">
    <i className="address-icon"></i>
    <h3>Address</h3>
    <p>801,1st St,G Block,Rangantha Garden,Anna Nagar,Chennai,Navi mumbai 40116</p>
    </div>
    </div>
    </div>
    );
};


export default Contact;