import React from "react";
import FamiliaMembro from "./FamiliaMembro.jsx";

export default (props) => {
    return (
        <div>
            <FamiliaMembro nome="Pedro" sobrenome = {props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome="Joao" sobrenome = {props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome="Ana"{...props}></FamiliaMembro>
        </div>
    );
};
