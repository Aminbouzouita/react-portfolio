import React from 'react';
import "./AnimatedText.css"
export default function AnimatedText(props) {
    return (
<div className="textAnimation-Wrap">
        <div className="text-Container">
          <h1 className="text-Fix">{props.TextFix}</h1>
           <div className="animation-text">
              <span className="textAnimation1">{props.TopAnimatedText}</span>
              <span className="textAnimation2">{props.BottomAnimatedText}</span>
          </div>
        </div>
      </div>
    )
}