import React from 'react'
import pic2 from '../../assets/puneet2.jpg'
import './about.scss'

function About() {
    return (
        <div className="aboutContainer">
            <div>
            <img src={pic2} alt="profile imagr" className="imageClassabout"/> 
            </div>
            <div className="aboutInfo">
            <h1 className="headingabout">Who am <span>I?</span></h1>
            <p>
            Hello! I'm <span className="name">Puneet,</span> a Software Engineer based in Noida, UP. I'm experienced in developing fullstack applications from scratch.
            </p>
            <p>
            I'm currently working with <span className="name">TCS(Tata consultancy service)</span> in there retail account named <span className="name">belk</span> as a UI developer.
            </p>
            <p>
            Over the last 2 years, I've worked with MNC's as a fullstack developer and collaborated with talented people to create digital products.
            I'm quietly <span className="name">confident, naturally curious, and perpetually</span> working on improving my chops one design problem at a time.
            </p>
            </div>
        </div>
    )
}

export default About
