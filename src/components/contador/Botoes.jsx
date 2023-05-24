import React from "react";

export default (props) => {
    return (
        <div>
            <button onClickCapture={props.setInc}>+</button>
            <button onClickCapture={props.setDec}>-</button>
        </div>
    );
};
