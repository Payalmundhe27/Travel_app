import React from 'react';
import './Contact.css';

const Contact =() =>{
    return(
        <div className='contact-page'>
            <h1>Contact</h1>

            <div className='contact-info-container'>
                <div className='contact-box'>
                    <i className='phone-icon'></i>
                    <h3>Call Us</h3>
                    <p>+91 7435628229</p>
                </div>

                <div className='contact-box'>
                    <i className='mail-icon'></i>
                    <h3>Mail Us</h3>
                    <p>mail@Goyatrebournstravels.com</p>
                </div>

                <div className='contact-box'>
                    <i className='address-icon'></i>
                    <h3>Address</h3>
                    <p>801,1st St,G Block,Rangthana Garden,Nager,vashi navi-mumbai 40116</p>

                </div>

            </div>
        </div>
    );
    
};
export default Contact;