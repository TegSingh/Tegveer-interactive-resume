import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import { ImCross } from 'react-icons/im';


export const ContactMeForm = () => {

    const { seeContactForm, unshowContactForm } = useGlobalContext();

    // Add state values for email 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Handle Submit called for Contact Me Form");
    }

    if (seeContactForm) {
        return (
            <React.Fragment>
                <div className="contact-form-div">
                    <h2 className="contact-form-title">Contact Me</h2>
                    <form method="POST" className="contact-form" onSubmit={() => handleSubmit()}>
                        <div className="from-name-div">
                            <input name="from-email" type="text" className="from-name-input" placeholder="Enter your name" />
                        </div>
                        <div className="from-email-div">
                            <input name="from-email" className="from-email-input" type="text" placeholder="Enter your email" />
                        </div>
                        <div className="input-body-div">
                            <input name="contact-body" className="input-body" type="text" placeholder="Enter your message" />
                        </div>
                        <button className="contact-button" type="submit">Submit</button>
                        <button className="contact-button" onClick={() => unshowContactForm()}>Close</button>

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
