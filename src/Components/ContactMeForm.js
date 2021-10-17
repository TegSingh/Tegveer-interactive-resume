import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import { ImCross } from 'react-icons/im';


export const ContactMeForm = () => {

    const { seeContactForm, unshowContactForm } = useGlobalContext();

    const handleSubmit = () => {
        console.log("Handle Submit called for Contact Me Form");
    }

    console.log("Contact me Form");

    if (seeContactForm) {
        return (
            <React.Fragment>
                <div className="contact-form-div">
                    <h2 className="contact-form-title">Contact Me</h2>
                    <form method="GET" className="contact-form">
                        <button className="close-button" onClick={() => unshowContactForm()}>
                            <ImCross style={{ "height": "50px" }} />
                        </button>
                        <div className="from-name-div">
                            <input name="from-email" type="text" className="from-name-input" placeholder="Enter your name" />
                        </div>
                        <div className="from-email-div">
                            <input name="from-email" className="from-email-input" type="text" placeholder="Enter your email" />
                        </div>
                        <div className="input-body-div">
                            <input name="contact-body" className="input-body" type="text" placeholder="Enter your message" />
                        </div>
                        <button id="contact-button" type="submit" onClick={() => handleSubmit()}>Submit</button>
                    </form>
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }

}
