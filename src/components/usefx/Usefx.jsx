import React, { useEffect, useState } from "react";

export default () => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(100);
    const [impoupar, setImpoupar] = useState("???");
    function calcFatorial(n) {
        if (n < 0) return -1;
        if (n === 0) return 1;
        return calcFatorial(n - 1) * n;
    }
    useEffect(() => {
        setFatorial(calcFatorial(number));
    }, [number]);

    useEffect(() => {
        {
            setImpoupar(number % 2 === 0 ? "Par!" : "Ímpar!");
        }
    }, [number]);

    return (
        <div>
            <h2>Fatorial: {fatorial}</h2>
            <input
                type="text"
                className="Input"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <h2> {impoupar}</h2>
        </div>
    );
};
