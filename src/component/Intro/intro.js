import React from "react";
import './intro.css';
import bg from "../../assets/image.png";
import btnImg from "../../assets/bag.png";
import { Link } from "react-scroll";
const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Gasan</span><br /><p className="exp">Senior Flutter Mobile App Developer &<br /> React.js Frontend Developer</p></span>
                <p className="introPara">A skilled flutter developer with 3 years of experience with<br /> a solid background in React.js for frontend development, <br />You can contact me at any time to start a work full of <br />creativity and good performance</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg" />Hire Me</button></Link>

            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    )
}

export default Intro