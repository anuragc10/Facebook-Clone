/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import "./Widgets.css";
function Widgets() {
    return (
        <div className="widgets">
            <iframe
            src="https://material-ui.com/components/material-icons/"
            width="340px"
            height="100%"
            style={{border:"none",overflow:"hidden"}}
            scrolling="yes"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            >

            </iframe>
        </div>
    );
}

export default Widgets;
