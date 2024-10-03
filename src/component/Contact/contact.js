import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import './contact.css';
import facebook from "../../assets/facebook.png";
import facebookIcon from "../../assets/facebookIcon.png";
export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        if (name == '' && email == '' && message == '') {
            alert("Please Make sure to enter All input Field.!");

        }
        else if (name == '') {
            alert("Please Make sure to enter Your Name.!");

        } else if (email == '') {
            alert("Please Make sure to enter Your E-mail.!");

        }
        else if (message == '') {
            alert("Please Make sure to enter Your Message.!");
        }
        else {
            emailjs
                .sendForm('service_mz9l2m9', 'template_d84h25s', form.current, {
                    publicKey: 'ngmsIeCWgJWFGFdV6',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');


                        alert('Email Sent ! we will contact you soon.');


                        e.target.reset();
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };
    return (
        <section id="contactPage">
            {/* <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies.
                    some of the notable companies i have worked with includes
                </p>
                <div className="clientImgs">
                    <img src={facebook} alt="" className="clientImg" />
                    <img src={facebook} alt="" className="clientImg" />
                    <img src={facebook} alt="" className="clientImg" />
                    <img src={facebook} alt="" className="clientImg" />

                </div>
            </div> */}
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form elow to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="name" placeholder="Name" name="from_name" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="email" placeholder="E-mail" name="from_email" />
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="msg" name="message" rows="5" placeholder="Message..."></textarea>
                    <button type="submit" value="send" className="glow-on-hover">Submit</button>
                    {/* <div className="links">
                        <img src={facebookIcon} alt="Facbook" className="link" />
                        <img src={facebookIcon} alt="Facbook" className="link" />
                        <img src={facebookIcon} alt="Facbook" className="link" />
                        <img src={facebookIcon} alt="Facbook" className="link" />
                    </div> */}
                </form>
            </div>
        </section>
    );
}