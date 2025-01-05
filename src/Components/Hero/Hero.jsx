import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile_img.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='Home' className='hero'>
        <img src={profile_img} alt="Profile Image" className='profile-img'/>
        <h1><span>I'm Aman Mishra,</span> full-stack developer based in INDIA.</h1>
        <p>Full-stack developer with a passion for building scalable and efficient web applications.</p>
        <div className="hero-action">
            <AnchorLink className='anchor-link' offset={50} href='#Contact' ><div className="hero-connect">Connect with me</div></AnchorLink>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero 