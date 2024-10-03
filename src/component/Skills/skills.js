import React from "react";
import './skills.css';
// import UIDesign from "../../assets/ui-ux.png";
import webDesign from "../../assets/react.png";
import appDesign from "../../assets/flutter.png";
import api from "../../assets/api.png";
import ReactShowMoreText from "react-show-more-text";

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
                {/* <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>ui ux design applications with demo</p>
                    </div>
                </div> */}
                <div className="skillBar">
                    <img src={webDesign} alt="webDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <ReactShowMoreText className="showMoreText" anchorClass="showMoreTextClickable">Developed responsive and interactive web applications using React.js. Utilized React’s component-based architecture to create reusable UI components, improving development efficiency and maintainability. Applied modern design principles, including responsive layouts, CSS Grid, and Flexbox, to ensure a seamless user experience across various devices.</ReactShowMoreText>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={appDesign} alt="appDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <ReactShowMoreText className="showMoreText" anchorClass="showMoreTextClickable">Designed and developed cross-platform mobile applications using Flutter, delivering high-performance apps for both Android and iOS. Leveraged Flutter’s widget-based architecture to create visually appealing, responsive, and scalable UI components, ensuring a smooth user experience across multiple screen sizes. Implemented efficient state management using Provider and Riverpod to maintain seamless interaction within apps. Integrated REST APIs, Firebase, and other third-party services for real-time data synchronization. Focused on user-centered design principles and best practices in mobile UI/UX to build intuitive and engaging mobile applications.</ReactShowMoreText>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={api} alt="api" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>API Intergration</h2>

                        <ul><li><h4>React.js</h4></li></ul>
                        <ReactShowMoreText className="showMoreText" anchorClass="showMoreTextClickable">
                            <p>Implemented seamless API integrations within React.js applications to connect frontend interfaces with backend services. Utilized fetch and Axios to perform asynchronous API requests, ensuring data retrieval and updates from RESTful APIs. Handled complex data fetching scenarios, including pagination, filtering, and caching, to optimize performance and reduce load times. Applied React’s hooks like useEffect and useState to manage API calls and state efficiently, while ensuring error handling and loading states for a smooth user experience. Integrated third-party APIs, including payment gateways and external services, enhancing app functionality and user engagement.</p>
                            <ul><li><h4>Flutter</h4></li></ul>
                            <p>Integrated RESTful APIs into Flutter applications to enable dynamic data exchange and real-time functionality. Worked with HTTP packages such as Dio and http for making network requests and handling responses efficiently. Implemented JSON parsing, error handling, and data caching to improve app performance and reliability. Integrated various third-party APIs, including Firebase, Google Maps, and payment gateways, to enhance app features and functionalities. Ensured secure data transmission using authentication methods like OAuth and API keys while maintaining a smooth user experience through optimized API calls and asynchronous programming.</p>
                        </ReactShowMoreText>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills