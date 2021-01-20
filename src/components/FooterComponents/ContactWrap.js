import React from 'react';

export default function ContactWrap(props) {
  return (

<div className={props.className}>
 <div className="col-lg-12">

{props.children}

     </div>
 </div>
  )
}