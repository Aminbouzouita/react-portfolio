import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export default function Image(props) {
  return (
    <img
      alt={props.alt}
      className={props.className}
      src={props.src}
    />
  );
}