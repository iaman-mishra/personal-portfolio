import React from 'react'
import './About.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/about_profile.svg";
const About = () => {
  return (
    <div id='About' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={about_profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>As a passionate full-stack developer, I thrive on building seamless, user-centric applications that solve real-world problems. With expertise in both front-end and back-end technologies, I bring ideas to life by crafting robust, scalable, and visually appealing solutions.</p>
                    <p>My journey in software development is driven by a constant curiosity to learn and adapt to the ever-evolving tech landscape.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}></hr></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}></hr></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}></hr></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"30%"}}></hr></div>
                </div>
            </div>
        </div>
        <div className="about-achievments">
            <div className="about-achievment">
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About 