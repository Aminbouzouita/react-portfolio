import React from 'react';
import "./style.css";

export default function SkillsWrap(props) {
  return (

      <div className="col-lg-12 skills justify-content-end">

        {props.children}

    </div>

  );
}