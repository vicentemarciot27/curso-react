import React, { useState } from "react";
import "./input.css";

export default (props) => {
    const [valor, setValor] = useState("Type Here");

    function quandoMudar(e) {
        setValor(e.target.valor);
    }
// CE TA DOOOOIDO
    const handleClick = (e) => {
        if (valor == "Type Here") {
            setValor("");
        }
    };

    return (
        <div className="Input">
            <input value={valor} onChange={quandoMudar} onClick={handleClick} />
            <input value={valor} readOnly />
            <input value ={undefined} readOnly/>
        </div>
    );
};
