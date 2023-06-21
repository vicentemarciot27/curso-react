import React, {useState} from "react";
import "./Mega.css"

export default props =>{

    const [valor, setValor] = useState("Insira o número de valores")
    const handleType = (e) => {
        setValor(e.target.value)
    }
    function gerarNumeros(qtde) {
        const numeros = [];
    
        while (numeros.length < qtde) {
            const numero = Math.floor(Math.random() * 59) + 1;
            
            if (!numeros.includes(numero)) {
                numeros.push(numero);
            }
        }
    
        return numeros;
    }
    const handleClick = (e) => {
        if(valor == "Insira o número de valores")
            {
                setValor("")
            }
    }
    const [resposta, setResposta] = useState(" ")
    const handleButton = (e) => {
        setResposta(gerarNumeros(valor).join(", "))
    }

    return(
        <div className="MegaSena">
            <h2>Mega Sena!</h2>
            <p>[{resposta}]</p>

            <input value = {valor} onChange={handleType} onClick={handleClick}/> <br />
            <button onClick = {handleButton}>Gerar</button>
        </div>
    )
}