import React from 'react'
import Profile from './profile'
import ProfileImg from './profileImg'
import '../home/home.scss'

function MainPorfile(){
    return (
        <div className="profile">
            <Profile />
            <ProfileImg />
        </div>
    )

}

export default MainPorfile