import React from "react";

export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial
    }

    render() {
        return(
            <div>
                <h2>Contador</h2>
                <p>Valor Inicial: {this.state.numero}</p>
            </div>
        )
    }
}