// import React from 'react'
import './skill.scss'
// import pics2 from '../../assets/angular_logo.png'

function Card({element}) {
    return (
        <div className="container">
           <div className="card">
            <div className="front">
                <div>
                   <h1>{element.heading}</h1>
                   <p>{element.subHeading}</p>
                </div>
                <div>
                    <img src={element.pic} alt="img" style={{height:'100px',width:"100px"}}/>
                </div>
            </div>
             <div className="back">
                 <h2>{element.heading}</h2>
                 <p>
                    {element.description} 
                 </p>
             </div>
           </div> 
        </div>
    )
}

export default Card
