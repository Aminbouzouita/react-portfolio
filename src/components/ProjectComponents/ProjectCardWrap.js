import React from 'react';
import "./style.css";

export default function ProjectCardWrap(props) {
    return (
        <div className="col-5" id="wrapper">

            {props.children}

        </div>
    )
}