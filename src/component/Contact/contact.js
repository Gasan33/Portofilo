import React from "react";
import './contact.css';
import facebook from "../../assets/facebook.png";
import facebookIcon from "../../assets/facebookIcon.png";
export default function Contact() {
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
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name" />
                    <input type="email" className="email" placeholder="Your E-mail" />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={facebookIcon} alt="Facbook" className="link" />
                        <img src={facebookIcon} alt="Facbook" className="link" />
                        <img src={facebookIcon} alt="Facbook" className="link" />
                        <img src={facebookIcon} alt="Facbook" className="link" />

                    </div>
                </form>
            </div>
        </section>
    );
}