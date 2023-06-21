import React, { useContext, useState, useEffect } from "react";
import { DataContext, data } from "../../data/DataContext";
import { AppContext } from "../../data/Store";

export default (props) => {
    const { state, setState } = useContext(DataContext);

    const { number, setNumber } = useContext(AppContext);
    const { color, setColor } = useContext(AppContext);
    const { text, setText } = useContext(AppContext);

    const handleClick = (deltaN) => {
        addNumber(deltaN);
    };
    const addNumber = (delta) => {
        setNumber(number + delta);
    };

    useEffect(() => {
        setColor(
            "#" +
                (parseInt(color.slice(1), 16) + 5000)
                    .toString(16)
                    .padStart(6, "0")
        );
    }, [number]);

    const estilo = {
        color: color,
    };

    return (
        <div>
            <div>{text}</div>
            <div>{number}</div>
            <div style={estilo}>{color}</div>

            <div>
                <button onClick={() => handleClick(-50000)}>-50000</button>
                <button onClick={() => handleClick(50000)}>+50000</button>
            </div>
        </div>
    );
};


