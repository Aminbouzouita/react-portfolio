import React from 'react';
import "./style.css";
import project1 from "./../../assets/img/project3.png"
import project2 from "./../../assets/img/project2.png"
import project3 from "./../../assets/img/project1.png";
import project4 from "./../../assets/img/project6.png"
import project5 from "./../../assets/img/project5.png"
import project6 from "./../../assets/img/project4.png"

export default function Projects() {
  
  return (
    <main>
      <section className="posts"> 
       <h1 className="content-subhead">PROJECTS</h1>
        <div className="row skills post-description">
            <div className="show-imag">
              <img className="img-portfolio" alt="WorkoutProject" src={project1}></img>
              <a class="view" href="https://github.com/Aminbouzouita/Workout_Tracker">View</a>
              <a class="demo" href="https://workouttrackerandstat.herokuapp.com/stats">Demo</a>
            </div>
            <div className="show-imag">
              <img className="img-portfolio" alt="BurgersHandelbars" src={project2}></img>
              <a class="view" href="https://github.com/Aminbouzouita/Burgers-Handlebars">View</a>
              <a class="demo" href="https://burgers-handlebar.herokuapp.com/">Demo</a>
            </div>
            <div className="show-imag">
              <img className="img-portfolio" alt="DayPlanner" src={project3}></img>
              <a class="view" href="https://github.com/Aminbouzouita/Day-planner">View</a>
              {/* <a class="demo" href="">Demo</a> */}
            </div>
            <div className="show-imag">
              <img className="img-portfolio" alt="project2" src={project4}></img>
              <a class="view" href="https://github.com/Aminbouzouita/Project_2">View</a>
              <a class="demo" href="https://e-power.herokuapp.com/">Demo</a>
            </div>
            <div className="show-imag">
              <img className="img-portfolio" alt="" src={project5}></img>
              <a class="view" href="https://github.com/Aminbouzouita/Note-Taker">View</a>
              <a class="demo" href="https://note-taker-hmw.herokuapp.com/">Demo</a>
            </div>
            <div className="show-imag">
              <img className="img-portfolio" alt="" src={project6}></img>
              <a class="view" href="https://github.com/Aminbouzouita/TeamGenerator">View</a>
              {/* <a class="demo" href="">Demo</a> */}
            </div>
        </div>
      </section>
    </main>
  );
}
