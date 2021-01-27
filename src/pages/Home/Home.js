import React from 'react';
import "./style.css";
import AnimatedText from "./../../components/animations/AnimatedText";
import SlideBottom from "./../../components/animations/SlideBottom";

export default function Home() {

  return (
    <SlideBottom>
      <AnimatedText
        TextFix="Hi! I'm Amin Bouzouita"
        TopAnimatedText="A Full Stack Web Developer"
        TopAnimatedText="Located in Orange County, CA"
      />
    </SlideBottom>
  )
}
