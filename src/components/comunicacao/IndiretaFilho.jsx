import React from "react";
import alunos from "../../data/alunos";

export default props =>{
    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * (max-min)) + min
    const nomes = alunos.map(aluno => aluno.nome)
    const gerarNome = () => nomes[parseInt(Math.random() * nomes.length)]
    const gerarNerd = () => Math.random() > 0.5
    return(
        <div>
            <div>
            Filho

            </div>
            <button onClick={
                function (e) {
                    props.quandoClicar(gerarNome(), gerarIdade(), gerarNerd())
                }
            }>Fornecer Informações</button>
        </div>
        
    )
}