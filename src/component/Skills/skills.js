import React from "react";
import './skills.css';
import UIDesign from "../../assets/ui-ux.png";
import webDesign from "../../assets/web-design.png";
import appDesign from "../../assets/app-design.png";
import api from "../../assets/api.png";

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">
                I'm a skilled Flutter developer with a passion for creating mobile apps with a solid background in React.js to create user interface web applications.
                My expertise lies in designing user-friendly interfaces and writing efficient code.
                I stay updated on industry trends and excel at problem-solving, ensuring top-notch application that impress users.
                With my strong leadership skills, I have the ability to lead the mobile team effectively and drive innovation in mobile app development projects, I'm dedicated to sculpting innovative, user-centric solution that breathe life into every pixel.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>ui ux design applications with demo</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={webDesign} alt="webDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>ui ux design applications with demo</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={appDesign} alt="appDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>ui ux design applications with demo</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={api} alt="api" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>API Intergration</h2>
                        <p>ui ux design applications with demo</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills