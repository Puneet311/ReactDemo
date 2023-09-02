import  { Component } from 'react'
import { Navigate } from "react-router-dom"
import './profile.scss'
import file from "../../assets/cv.pdf";
class Profile extends Component {
constructor(){
    super()

    this.state={navigate:false}
}

handleHireMe= ()=>{
    this.setState({
        navigate:true
    })
}

downLoadCv= ()=>{
    console.log('download')
    window.open(file)
}

    render() {
        return (
            <div>
                <h1 className="heading-profile nameHeading">Hi, I am <span className="name">Puneet</span></h1>
                <p className="heading-profile nameSubHeading">I'm a software developer based out in Delhi.</p>
                <div className="buttons">
                <button className="basicButton hireButton" onClick={()=>this.handleHireMe()}>Hire me</button>
                {/* <a href={file} download = "cv.pdf" className="basicButton downloadButton">Download CV</a> */}
                <button className="basicButton downloadButton" onClick={()=>this.downLoadCv()}>Download CV</button>
                {this.state.navigate && <Navigate to='/ReactDemo/contact'/>}
                </div>
            </div>
        )
    }
}

export default Profile
