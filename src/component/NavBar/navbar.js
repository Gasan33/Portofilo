import React, { useState } from "react";
import './navbar.css';
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import cv from "../../assets/cv.png";
import { Link } from "react-scroll";
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About Me</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
                {/* <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link> */}
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contact</Link>
            </div>
            <button className="glow-on-hover" onClick={() => openInNewTab("https://drive.google.com/file/d/1XvxuoqAA3lKbPVToxPMhAhYO-4Nmu9XV/view?usp=sharing")}>
                <img src={cv} alt="" className="desktopMenuImg" />Resume</button>

            <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portofolio</Link>
                {/* <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Clients</Link> */}
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav >
    )
}

export default Navbar