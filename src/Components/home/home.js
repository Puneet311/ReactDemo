// import React from 'react'
import Navbar from '../navbar/navbar'
import { Outlet } from "react-router-dom";
import './home.scss'

function Home() {
    return (
        <div>
            <Navbar />
            <Outlet />
            {/* <About />
            <Skill />
            <Projects />
            <Contact /> */}
        </div>
    )
}

export default Home
