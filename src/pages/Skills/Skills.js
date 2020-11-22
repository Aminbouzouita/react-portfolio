import React from 'react';
import jqueryLogo from "./../../assets/img/295-2954193_jquery-logo-transparent-background-hd-png-download.png";
import reactLogo from "./../../assets/img/logo512.png";
import mysqlLogo from "./../../assets/img/unnamed.png";
import cssLogo from "./../../assets/img/CSS3_logo_and_wordmark.svg.png";
import mongodbLogo from "./../../assets/img/58481021cef1014c0b5e494b.png";
import jsLogo from "./../../assets/img/react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends-png-clipart.png";
import nodeLogo from "./../../assets/img/images (1).png";
import htmlLogo from "./../../assets/img/images.png";
import phplogo from "./../../assets/img/6621995_preview.png";


export default function Skills() {

  return (
    <div className="posts">
        <h1 className="content-subhead">SKILLS</h1>
        <section className="post">
          <div className="skills post-description">
            <img alt="" className="img-skills" src={htmlLogo} />
            <img alt="" className="img-skills" src={jsLogo} />
            <img alt="" className="img-skills" src={cssLogo} />
            <img alt="" className="img-skills" src={phplogo} />
            <img alt="" className="img-skills" src={nodeLogo} />
            <img alt="" className="img-skills" src={jqueryLogo} />
            <img alt="" className="img-skills" src={mysqlLogo} />
            <img alt="" className="img-skills" id="mongodblogo" src={mongodbLogo} />
            <img alt="" className="img-skills" src={reactLogo} /><p id="reactlogotext">React</p>
          </div>
        </section>
    </div>
  );
}

