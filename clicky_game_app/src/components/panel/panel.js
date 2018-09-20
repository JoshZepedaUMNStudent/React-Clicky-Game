import React from "react";
import "./panel.css";

const Panel = props => (
    <div className="panel" onClick={() => props.clickCount(props.id)}>
        <div className="img-container">
            <img src={props.image} />      
        </div>
    </div>
);

export default Panel;