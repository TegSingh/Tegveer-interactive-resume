import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import { ImCross } from 'react-icons/im';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_2wn3vdl";
const TEMPLATE_ID = "template_3xcuwck";
const USER_ID = "user_yW5fgQll2wdBtjGJuS1WY";

export const ContactMeForm = () => {

    const { seeContactForm, unshowContactForm } = useGlobalContext();

    // Add state values for email 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
        emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            from_name: name,
            message: message,
            from_name: email,
            reply_to: email
        }, USER_ID)
            .then((result) => {
                console.log("Email sent successfully");
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully',
                    text: 'You will be contacted shortly'
                })
            }, (error) => {
                console.log("Error sending email");
                Swal.fire({
                    icon: 'error',
                    title: 'Oops, something went wrong',
                    text: error.text,
                })
            });

        e.target.reset();
        unshowContactForm();
    };

    if (seeContactForm) {
        return (
            <React.Fragment>
                <div className="contact-form-div">
                    <h2 className="contact-form-title">Contact Me</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="from-name-div">
                            <input name="from-email" type="text" className="from-name-input" value={name} onChange={(e) => {
                                console.log(name)
                                setName(e.target.value)
                            }
                            } placeholder="Enter your name" required />
                        </div>
                        <div className="from-email-div">
                            <input name="from-email" className="from-email-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                        </div>
                        <div className="input-body-div">
                            <input name="contact-body" className="input-body" type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message" required />
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
