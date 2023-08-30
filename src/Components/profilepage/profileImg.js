import React, { Component } from 'react'
import pics from "../../assets/puneet1.jpg"
import './profile.scss'


export class ProfileImg extends Component {
    render() {
        return (
            <div>
                <img src={pics} alt="profile imagr" className="imageClass" />
            </div>
        )
    }
}

export default ProfileImg
