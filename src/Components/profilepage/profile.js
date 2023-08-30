import React, { Component } from 'react'
import './profile.scss'
class Profile extends Component {
    render() {
        return (
            <div>
                <h1 className="nameHeading">Hi, I am <span className="name">Puneet</span></h1>
                <p className="nameSubHeading">I'm a web developer based out in Delhi.</p>
                <div>
                <button className="basicButton hireButton">Hire me</button>
                <button className="basicButton downloadButton">Download CV</button>
                </div>
            </div>
        )
    }
}

export default Profile
