import React from "react";

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