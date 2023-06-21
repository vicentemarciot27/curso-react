import React, { useEffect, useRef, useState } from "react";

export default (props) => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const count = useRef(0);
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    const merge = (s1, s2) => [...s1].map((e, i) => (s1[i] || "") + (s2[i] || "")).join("")
    
    useEffect(
        function () {
            count.current++
            myInput2.current.focus()
        },
        [value1]
    );

    useEffect(
        function () {
            count.current++
            myInput1.current.focus()
        },
        [value2]
    );

    return (
        <div>
            <div>
                <span className="text"> Valor: </span>
                <span className="text">{merge(value1, value2)} [</span>
                <span className="text">{count.current}</span>
                <span className="text">]</span>
            </div>
            <div>
                <input
                    type="text"
                    className="input"
                    ref={myInput1}
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    className="input"
                    ref = {myInput2}
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                />
            </div>
        </div>
    );
};
