import React from 'react';
import "./style.css";
import project1 from "./../../assets/img/project1.png";
import project2 from "./../../assets/img/project2.png";
import project3 from "./../../assets/img/project3.png";
import project4 from "./../../assets/img/project4.png";
import project5 from "./../../assets/img/project5.png";
import project6 from "./../../assets/img/project6.png";
import ProjectCard from '../../components/ProjectComponents/ProjectCard';
export default function Projects() {

  return (
    <div className="row app">
      <SlideLeft className="col-3 container">
        <ProjectCard
          image={project1}
          text="A web application build using MERN (MongoDB,Express,React,NodeJs), allows the user to
                  track their inventory in their stores or warehouses to be able to make smarter business decisions. It will also help to keep
                  on top of diminishing stock."
          view="https://github.com/spencer-alan/project-3"
          demo="https://inventoryproject3.herokuapp.com/"
        />
        <ProjectCard
          image={project2}
          text="A web application build using JQuery, Express, HTML, CSS3, allow user to search for a flight ticket, AIRBNB stays and
            attractions places from real API (Application programming interface)."
          view="https://github.com/JL202/BootCamp-Project"
          demo="https://jl202.github.io/BootCamp-Project/indexflights.html"
        />
        <ProjectCard
          image={project3}
          text="A Full stack web application build using NodeJs, Express, HTML, CSS3 allows user to Track
            saved Workouts ,add and update exercices."
          view="https://github.com/Aminbouzouita/Workout_Tracker"
          demo="http://workouttrackerandstat.herokuapp.com"
        />
      </SlideLeft>

      <SlideRight className="col-3 container">
        <ProjectCard
          image={project4}
          text="A web application build using NodeJs, Express, MySQL, HTML, CSS3 allow user to sign up, sign in, add, update, Track employees,
            save working date, time, accounts monthly working time and new balance."
          view="https://github.com/Aminbouzouita/Project_2"
          demo="https://e-power.herokuapp.com/"
        />
        <ProjectCard
          image={project5}
          text="A Full stack web application build using MERN (MongoDB,Express,React,NodeJs), allows user to search
            for a book from GoogleBook and save it to a Mongo Database and the option to remove it."
          view="https://github.com/Aminbouzouita/Google-Books-React-Search"
          demo="https://goooglebookssearch.herokuapp.com/"
        />
        <ProjectCard
          image={project6}
          text="A Full stack web application that allows user to add expenses 
            and deposits to their budget with or without a connection."
          view="https://github.com/Aminbouzouita/Online-Offline-Budget-Tracker"
          demo="https://offline-progressive-budget.herokuapp.com/"
        />
      </SlideRight>
    </div>
  );
}
