import React from 'react';
import "./style.css";

export default function ProjectCard(props) {
    return (
    <div className="img_wrapper">
<img src={props.image} alt="projects" className="img" />
<div className="card-overlay"></div>
<span>
  <div className="row description">
    <p className="col-lg-12" > {props.text}
    </p>
  </div>
  <div className="row">
    <a className="col view" href={props.view}>View</a>
    <a className="col view" href={props.demo}>Demo</a>
  </div>
</span>
</div>
    )
}