import React from 'react';

export default function FooterText(props) {
    return (
        <div className="row">
            <div className="col-lg-12">
                <p className={props.className}>{props.text}</p>
            </div>
        </div>
    )
}