import React from 'react';

export default function SkillsWrap(props) {
    return (
        <div className="row" id={props.id}>
            <ul className={props.className} >

                {props.children}
            </ul>
        </div>

    );
}