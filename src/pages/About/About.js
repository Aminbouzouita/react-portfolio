import React from 'react';
import "./style.css";
import mypicture from "./../../assets/img/mypicture.jpg"
import myResume from "./../../assets/img/BouzouitaResume.docx"
export default function About() {

  return (
    <div className="aboutWrapper">
      <div className="col-lg-7 bgCard" >
      </div>
      <div className="col-lg-4">
        <img
          alt="mypicture"
          src={mypicture}
          id="mypicture" />
      </div>
      <p className="col-lg-5 text"> Welcome to my page, 
      I am Amin Bouzouita a Junior Full Stack Web 
      Developer certified from Bootcamp Program at 
      UC Irvine to enhance my skills and learn the 
      lastest Technologies for Javascript, HTML5, CSS3,
      MySQL,MongoDB, JQuery, React.
      As a web developer I do not simply want to 
      create excellent projects, but collaborate with 
      ethical businesses and communities to leave a 
      positive impact for the current and future 
      generations with a passion of building 
      approachable and transforming web applications.
      Currently I am looking for new Web Development 
      opportunities.
        <br />
        <p className="downloadSection"><a href={myResume} id="textLink"> Donwnload a copy of my resume here</a></p>
      </p>
    </div>
  );
}




