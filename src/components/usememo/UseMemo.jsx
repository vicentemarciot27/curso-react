import React, { useState, useMemo, useEffect } from "react";

export default (props) => {
    const sum = (a,b) => {
        return a + b
    } 

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [n3, setN3] = useState(0);
    const resultado = sum(n1, n2)

    const result = useMemo(() => sum(n1,n2), [n1,n2])



    return (
        <div>
            <div>
                <input
                    type="number"
                    value={n1}
                    onChange={(e) => setN1(parseInt(e.target.value))}
                />
            </div>
            <div>
                <input
                    type="number"
                    value={n2}
                    onChange={(e) => setN2(parseInt(e.target.value))}
                />
            </div>
            <div>
                <input
                    type="number"
                    value={n3}
                    onChange={(e) => setN3(parseInt(e.target.value))}
                />
            </div>
            <span className="text">{result}</span>
        </div>
    );
};
