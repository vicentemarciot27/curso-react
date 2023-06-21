import React, { useContext, useState } from "react";
import { DataContext, data } from "../../data/DataContext";

export default (props) => {
    const context = useContext(DataContext);

    function addNumber(delta) {
        context.setState({
            ...context.state,
            number: context.state.number + delta,
            color:
                "#" +
                (parseInt(context.state.color.slice(1), 16) + delta)
                    .toString(16)
                    .padStart(6, "0"),
        });
    }

    const estilo = {
        color: context.state.color,
    };

    return (
        <div>
            <div>{context.state.text}</div>
            <div style={estilo}>{context.state.color}</div>
            <div>{context.state.number}</div>

            <div>
                <button onClick={() => addNumber(-500)}>-500</button>
                <button onClick={() => addNumber(+500)}>+500</button>
            </div>
        </div>
    );
};
