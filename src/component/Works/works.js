import React from "react";
import './works.css';
import work1 from '../../assets/work1.png';
import work2 from '../../assets/work2.png';
import work3 from '../../assets/work3.png';
import work4 from '../../assets/work4.png';
const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">I'm a social person who likes to work with a team and collaborative.
                I like to deal with honesty and transparency in order to gain the people around me.
                I am passionate about my work and love creativity and constant learning,
                You can tell when you get to know me</span>
            <div className="worksImgs">
                <img src={work1} alt="" className="worksImg" />
                <img src={work2} alt="" className="worksImg" />
                <img src={work3} alt="" className="worksImg" />
                <img src={work4} alt="" className="worksImg" />
                <img src={work1} alt="" className="worksImg" />
                <img src={work2} alt="" className="worksImg" />
            </div>
            <button className="worksBtn">See More</button>
        </section>
    );
}

export default Works