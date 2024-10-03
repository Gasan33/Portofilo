import React, { useState } from "react";
import './works.css';
import vactalsLogo from "../../assets/vactalsLogo.svg";
import vactals1 from "../../assets/vactalsBanner1.svg";
import vactals2 from "../../assets/vactalsBanner2.svg";
import vactals3 from "../../assets/vactalsBanner3.svg";
import api from "../../assets/api.png";
import play from "../../assets/play.svg";

const Works = () => {
    const [showProjectDetails, setShowProjectDetails] = useState({ id: "", dis: false });
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return (
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">I'm a social person who likes to work with a team and collaborative.
                I like to deal with honesty and transparency in order to gain the people around me.
                I am passionate about my work and love creativity and constant learning,
                You can tell when you get to know me</span>
            <div className="projectBars">
                {/* <div className="projectBar">
                    <img src={UIDesign} alt="UIDesign" className="projectBarImg" />
                    <div className="projectBarText">
                        <h2>UI/UX Design</h2>
                        <p>ui ux design applications with demo</p>
                    </div>
                </div> */}
                <button className="projectBar" onClick={() => setShowProjectDetails({ id: "vactals1", dis: !showProjectDetails.dis })}>
                    <img src={vactalsLogo} alt="vactals" className="projectBarImg" />
                    <div className="projectBarTextAndBtn">
                        <div className="projectBarText">
                            <h2>Vactals</h2>
                            <p>Mobile application for seamless booking of holiday homes, focusing on user experience, property discovery, and secure transactions.</p>
                        </div>
                        <div className="details" style={{ display: showProjectDetails.id == "vactals1" ? showProjectDetails.dis ? 'flex' : 'none' : 'none' }}>
                            <h5>Technologies</h5>
                            <div className="tech">
                                <button class="button-85" role="button">Flutter</button>
                                <button class="button-85" role="button">Getx</button>
                                <button class="button-85" role="button">MVC</button>
                                <button class="button-85" role="button">Maps API</button>
                                <button class="button-85" role="button">Firebase Messaging</button>
                                <button class="button-85" role="button">Firebase Auth</button>
                            </div>
                            <h5>Screenshots</h5>
                            <div className="screenShots">
                                <img src={vactals1} alt="Home" className="span1" />
                                <img src={vactals2} alt="Bookings" className="span2" />
                                <img src={vactals3} alt="Maps" className="span3" />

                            </div>
                        </div>
                        <div className="projectBarBtn">
                            <button className="glow-on-hover" onClick={() => openInNewTab("https://play.google.com/store/apps/details?id=com.vactals.guest")}><img src={play} alt="play" className="play" />Play Store</button>
                        </div>
                    </div>
                </button>
                <button className="projectBar" onClick={() => setShowProjectDetails({ id: "vactals2", dis: !showProjectDetails.dis })}>
                    <img src={vactalsLogo} alt="appDesign" className="projectBarImg" />
                    <div className="projectBarTextAndBtn">
                        <div className="projectBarText">
                            <h2>Vactals Owner</h2>
                            <p>Mobile application for holiday home owners, focusing on property management, guest communication, and expense reporting.</p>

                        </div>
                        <div className="details" style={{ display: showProjectDetails.id == "vactals2" ? showProjectDetails.dis ? 'flex' : 'none' : 'none' }}>
                            <h5>Technologies</h5>
                            <div className="tech">
                                <button class="button-85" role="button">Flutter</button>
                                <button class="button-85" role="button">Getx</button>
                                <button class="button-85" role="button">MVC</button>
                                <button class="button-85" role="button">Maps API</button>
                                <button class="button-85" role="button">Firebase Messaging</button>
                                <button class="button-85" role="button">Firebase Auth</button>
                            </div>
                            <h5>Screenshots</h5>
                            <div className="screenShots">
                                <img src={vactals1} alt="Home" className="span1" />
                                <img src={vactals2} alt="Bookings" className="span2" />
                                <img src={vactals3} alt="Maps" className="span3" />

                            </div>
                        </div>
                        <div className="projectBarBtn">
                            <button className="glow-on-hover" onClick={() => openInNewTab("https://play.google.com/store/apps/details?id=com.vactals.owner")}><img src={play} alt="play" className="play" />Play Store</button>
                        </div>
                    </div>
                </button>
                <button className="projectBar" onClick={() => setShowProjectDetails({ id: "vactals3", dis: !showProjectDetails.dis })}>
                    <img src={vactalsLogo} alt="api" className="projectBarImg" />
                    <div className="projectBarTextAndBtn">
                        <div className="projectBarText">
                            <h2>Vactals PMS</h2>
                            <p>Mobile application version of the Property Management System (PMS) to provide holiday home owners with on-the-go management capabilities.</p>

                        </div>
                        <div className="details" style={{ display: showProjectDetails.id == "vactals3" ? showProjectDetails.dis ? 'flex' : 'none' : 'none' }}>
                            <h5>Technologies</h5>
                            <div className="tech">
                                <button class="button-85" role="button">Flutter</button>
                                <button class="button-85" role="button">Getx</button>
                                <button class="button-85" role="button">MVC</button>
                                <button class="button-85" role="button">Maps API</button>
                                <button class="button-85" role="button">Firebase Messaging</button>
                                <button class="button-85" role="button">Firebase Auth</button>
                            </div>
                            <h5>Screenshots</h5>
                            <div className="screenShots">
                                <img src={vactals1} alt="Home" className="span1" />
                                <img src={vactals2} alt="Bookings" className="span2" />
                                <img src={vactals3} alt="Maps" className="span3" />

                            </div>
                        </div>
                        <div className="projectBarBtn">
                            <button className="glow-on-hover" onClick={() => openInNewTab("https://play.google.com/store/apps/details?id=com.vactals.pms")}><img src={play} alt="play" className="play" />Play Store</button>
                        </div>
                    </div>
                </button>

            </div>
            <button className="glow-on-hover" onClick={() => openInNewTab("https://github.com/Gasan33")}>See More</button>
        </section>
    );
}

export default Works