import React from 'react';
import "./style.css";
import jqueryLogo from "./../../assets/img/295-2954193_jquery-logo-transparent-background-hd-png-download.png";
import reactLogo from "./../../assets/img/react.png";
import mysqlLogo from "./../../assets/img/unnamed.png";
import cssLogo from "./../../assets/img/CSS3_logo_and_wordmark.svg.png";
import mongodbLogo from "./../../assets/img/58481021cef1014c0b5e494b.png";
import jsLogo from "./../../assets/img/react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends-png-clipart.png";
import nodeLogo from "./../../assets/img/images (1).png";
import htmlLogo from "./../../assets/img/images.png";
import php from "./../../assets/img/php.png";
import asp from "./../../assets/img/aspnet.png";
import bootstrap from "./../../assets/img/bootstrap.png";
import redux from "./../../assets/img/redux.png";
import Image from "../../components/Image/Image"
export default function Skills() {
  return (
   <>
        <Image
          alt="SkillLogo"
          className="img-skills"
          src={htmlLogo} />
        <Image
          alt="SkillLogo"
          className="img-skills"
          src={jsLogo} />
        <Image
          alt="SkillLogo"
          className="img-skills"
          src={cssLogo} />
        <Image
          alt="SkillLogo"
          className="img-skills"
          src={reactLogo} />
        <Image
          alt="SkillLogo"
          className="img-skills"
          src={nodeLogo} />
        <Image
          alt="SkillLogo"
          className="img-skills"
          src={jqueryLogo} />
        <Image
          alt="SkillLogo"
          className="img-skills"
          src={mysqlLogo} />
        <Image
          alt="SkillLogo"
          className="img-skills"
          src={mongodbLogo} />
        <Image 
        alt="SkillLogo" 
        className="img-skills" 
        src={php} />
        <Image 
        alt="SkillLogo" 
        className="img-skills" 
        src={redux} />
        <Image 
        alt="SkillLogo" 
        className="img-skills" 
        src={asp} />
        <Image 
        alt="SkillLogo" 
        className="img-skills" 
        src={bootstrap} />
    </>
  );
}

