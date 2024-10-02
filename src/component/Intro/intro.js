import React from "react";
import './intro.css';
import bg from "../../assets/image.png";
import hireMe from "../../assets/hireMe.png";
import mail from "../../assets/mail.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import telegram from "../../assets/telegram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import { Link } from "react-scroll";
const Intro = () => {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Gasan</span><br /><p className="exp">Senior Flutter Mobile App Developer &<br /> React.js Frontend Developer</p></span>
                <p className="introPara">A skilled flutter developer with 3 years of experience with<br /> a solid background in React.js for frontend development, <br />You can contact me at any time to start a work full of <br />creativity and good performance</p>
                <div className="introLinks">
                    <button className="introLink" onClick={() => {
                        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    }}><img src={mail} alt="Email" className="introLinkImg" /></button>
                    <button className="introLink" onClick={() => openInNewTab("https://github.com/Gasan33")}> <img src={github} alt="Github" className="introLinkImg" /></button>
                    <button className="introLink" onClick={() => openInNewTab("http://linkedin.com/in/gasan-mansour")}> <img src={linkedin} alt="LinkedIn" className="introLinkImg" /></button>
                    <button className="introLink" onClick={() => openInNewTab("https://t.me/Gasan_33")}> <img src={telegram} alt="Telegram" className="introLinkImg" /></button>
                    <button className="introLink" onClick={() => openInNewTab("http://wa.me/971545671677")}> <img src={whatsapp} alt="Whatsapp" className="introLinkImg" /></button>

                </div>
                <Link><button className="glow-on-hover" onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}><img src={hireMe} alt="Hire Me" className="btnImg" />Hire Me</button></Link>

            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    )
}

export default Intro