// import React from "react";
import Card from "./card";
import pic1 from '../../assets/angular_logo.png'
import pic2 from '../../assets/material_icon.png'
import pic3 from '../../assets/htmlicon.jpeg'
import pic4 from '../../assets/react-1-logo.png'
import pic5 from '../../assets/js.jpeg'
import pic6 from '../../assets/python_logo.png'

function Skill() {
  const skill_aray = [
    {
      id: 1,
      heading: "Angular",
      subHeading: "version 10,12,13",
      description: "I have 2 years of experience working with angular",
      pic: pic1,
    },
    {
      id: 2,
      heading: "Angular Material",
      subHeading: "version 10",
      description:
        "I have 2 years of experience working with angular material.",
      pic: pic2,
    },
    {
      id: 3,
      heading: "HTML/CSS",
      subHeading: "HTML5 and css3",
      description: "I have 2 years of experience working html/css",
      pic: pic3,
    },
    {
      id: 4,
      heading: "React",
      subHeading: "version 18",
      description: "I have 1 years of experience working with react",
      pic: pic4,
    },
    {
      id: 5,
      heading: "Javascript",
      subHeading: "latest",
      description: "I have 1 years of experience working with js",
      pic: pic5,
    },
    {
      id: 6,
      heading: "Python",
      subHeading: "version 3.8",
      description: "I have 1 years of experience working with Python",
      pic: pic6,
    },
  ];

  return (
    <div className="mainSkillCont">
      <h1 className="skillHeading">Skill I <span>Have</span></h1>
      <div className="skillContainer">
        {skill_aray.map((element) => (
          <Card key={element.id} element={element} />
        ))}
      </div>
    </div>
  );
}

export default Skill;
