import React from 'react';
import { motion } from "framer-motion"
import { useHistory , useLocation, useRouteMatch } from 'react-router-dom';

import "./style.css";

export default function About() {
  console.log(useHistory());

  const pageVariants = {
    in: {
      opacity: 1,
      x: 0,
      scale: "1"
    },
    out: {
      opacity: 0,
      x: "-100vw",
      scale: "0.8"
    }
  }
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: "1"
  }
  
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="posts">
      <h1 className="content-subhead">INTRODUCTION</h1>
      <section className="post">
        <div className="post-description" id="intro">
          <p className="introduction">
            Welcome to my page , I am Amin Bouzouita, I am a Junior Full Stack Web Developer certified from Bootcamp Program at UC Irvine to enhance my skills and learn the lastest Technologies for Javascript, HTML5, CSS3, MySQL, MongoDB, JQuery, React.
                                As a web developer I do not simply want to create excellent projects, but collaborate with ethical businesses and communities to leave a positive outcome for the current and future generations with a passion of building world className web applications.Currently i am looking for new Web Development opportunities.
              </p>
        </div>
      </section>
    </motion.div>
  );
}


