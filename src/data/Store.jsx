import React, { useState } from "react";

const initialState = {
    number: 1234,
    text: "Context API + Hooks",
    color: "#30DDA2",
};

export const AppContext = React.createContext(initialState);

const Store = (props) => {
    const [state, setState] = useState(initialState);
    const updateState = (key, value) => {
        setState({
            ...state,
            [key] : value
        })
    };
    return (
        <AppContext.Provider
            value={{
                number: state.number,
                text: state.text,
                color: state.color,
                setNumber: n => updateState("number", n),
                setText: t => updateState("text", t),
                setColor: cl => updateState("color", cl),
            }}
        >
            {props.children};
        </AppContext.Provider>
    );
};

export default Store;
