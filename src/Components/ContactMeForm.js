import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import { ImCross } from 'react-icons/im';


export const ContactMeForm = () => {

    const handleSubmit = () => {
        console.log("Handle Submit called for Contact Me Form");
    }

    console.log("Contact me Form");

    return (
        <React.Fragment>
            <div className="contact-form-div">
                <form method="GET" className="contact-form">
                    <button className="close-button">
                        <ImCross style={{ "height": "50px" }} />
                    </button>
                    <div className="from-name-div">
                        <label htmlFor="from-name">From Name:</label>
                        <input name="from-email" type="text" className="from-name-input" placeholder="Enter your name" />
                    </div>
                    <div className="from-email-div">
                        <label htmlFor="from-email">From Email:</label>
                        <input name="from-email" className="from-email-input" type="text" placeholder="Enter your email" />
                    </div>
                    <div className="input-body-div">
                        <label htmlFor="contact-body">Message:</label>
                        <input name="contact-body" className="input-body" type="text" placeholder="Enter your message" />
                    </div>
                    <button id="contact-button" type="submit" onClick={() => handleSubmit()}>Submit</button>
                </form>
            </div>
        </React.Fragment>
    )
}
