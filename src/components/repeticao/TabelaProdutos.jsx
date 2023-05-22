import React from "react";
import produtos from "../../data/produtos";
import "../repeticao/TabelaProdutos.css"

export default (props) => {
    const tabela_produtos = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i%2 === 0 ? "Par" : "Impar"}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        );
    });
    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {tabela_produtos}
                </tbody>
            </table>
        </div>
    );
};
