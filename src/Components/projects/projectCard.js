// import React from "react";
import "./project.scss";

function Card({props}) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={props.pic} height="220px" width="350px" alt="projectimage" />
      </div>
      <div className="project-card-body">
        <h3 className="projectCardHeading">{props.heading}</h3>
        <p className="description">{props.description}</p>
      </div>
      {props.flag ? (
        <div className="project-card-action">
          <button className="btn">View Github</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Card;
