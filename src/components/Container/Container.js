import React from 'react';

export default function Container(props) {
  return (
    <div className={props.className} id={props.id}>
        {props.children}
    </div>
  )
}