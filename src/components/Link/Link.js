import React from 'react';

export default function FooterContact(props) {
    return (
        <a href={props.href} target="-blank">
           {props.children}
        </a>
    )
}