import React from "react";
import "./Card.css";

export default (props) => {
    const estilo = {
        backgroundColor: props.color || "#A00",
        borderColor: props.color || "#A00"
    };
    return (
        <div className="Card" style={estilo}>
            <div className="Title">{props.título}</div>
            <div className="Content">{props.children}</div>
        </div>
    );
};
