import {useRef} from "react";
import "./project.scss";
import Card from "./projectCard";
import pic from "../../assets/stockmove.png";
import pic4 from "../../assets/weather.jpeg";
import pic3 from "../../assets/github.jpeg";
import pic2 from "../../assets/skill.jpeg";

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


function Projects() {
  const elements = [
    {
      pic: pic,
      heading: "SIM WEB",
      description:
        "SIM is stock inventory move application of belk, it is used to track the inventory travel status. I was the part of this project to build the UI using Angular, Angular Material,Html, Css. My main task was to build the features from scratch, fix the bugs and to get and send data to server using Http request.",
      flag: false,
      id:1
    },
    {
        pic: pic2,
        heading: "Skill Management",
        description:
          "I worked in this project for 2 years in infosys. I was responsible for building ui features from scratch using Angular. Angular Material, HTML, CSS.",
        flag: false,
        id:2
      },
      {
        pic: pic3,
        heading: "Git Repo Finder",
        description:
          "I build this as my personal project while learning react in this user can find the repo of anyone on github. I used React, SASS, Html and github's public api.",
        flag: true,
        id:3
      },
      {
        pic: pic4,
        heading: "Weather App",
        description:
          "I created this project while i was learning Angular. I used Open Weather API ,Angular, CSS,HTML for creating this application.",
        flag: true,
        id:4
      },
      {
        pic: pic,
        heading: "Markdown Reports",
        description:"Markdown report is a part of sim-web, this is the dedicated web-app where user can view and download different kinds of report invovled in inventory movement.",
        flag: false,
        id:5
      }
  ];
  const swiperElRef = useRef(null);
  return (
    <div className="mainProjectCont">
      <h1 className="projectHeading">
        Take a look at <span>MY WORK</span>
      </h1>
      <swiper-container ref={swiperElRef} class='swiper-container' slides-per-view="1" css-mode="true">
      {
        elements.map(value=><swiper-slide class="swiper" key={value.id}><Card props={value} key={value.id} /></swiper-slide>)
      }
</swiper-container>
    <button className="button2" onClick={() => {swiperElRef.current.swiper.slideNext()}}><i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
    <button className="button1" onClick={() => {swiperElRef.current.swiper.slidePrev()}}><i className="fa fa-angle-double-left" aria-hidden="true"></i></button>
    </div>
  );
}

export default Projects;
