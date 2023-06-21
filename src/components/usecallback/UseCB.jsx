import React, { useState, useCallback } from "react";
import UseCallbackButtons from "./usecallbackbuttons/UseCBBtns";

export default (props) => {

    const [count, setCount] = useState(0);
    const inc = useCallback(
        function (delta) {
            setCount(curr => curr + delta);
        },
        [setCount]
    );

    return (
        <div>
            <span>{count}</span>
            <UseCallbackButtons inc={inc}></UseCallbackButtons>
        </div>
    );
};
