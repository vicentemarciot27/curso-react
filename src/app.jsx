import "./app.css";
import React, { useState } from "react";
import Primeiro from "./components/basicos/Primeiro";
import Comparametro from "./components/basicos/Comparamametro";
import Fragmento from "./components/basicos/Fragmento";
import Card1 from "./components/layout/Card1";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/megasena/Mega";
import Usestate from "./components/usestate/Usestate";
import Usefx from "./components/usefx/Usefx";
import Useref from "./components/useref/Useref";
import UseMemo from "./components/usememo/UseMemo";
import UseCallback from "./components/usecallback/UseCB";
import UseContext from "./components/useContext/UseContext";
import UseCTX from "./components/useContext/UseCTX";
import Store from "./data/Store";
import { DataContext, data } from "./data/DataContext";
import UseReducer from "./components/usereducer/UseReducer";

export default () => {
    const [state, setState] = useState(data);
    return (
        <Store>
            <DataContext.Provider value={{ state, setState }}>
                <div id="App">
                    <h1>Fundamentos React</h1>

                    <div className="Cards">

                        <Card1 título= "#19 - UseReducer">
                            <UseReducer></UseReducer>
                        </Card1>
                        <Card1 título="#18 - UseCTX2">
                            <UseCTX></UseCTX>
                        </Card1>
                        <Card1 título="#17 - UseContext">
                            <UseContext />
                        </Card1>
                        <Card1 título="#16 - UseCallback">
                            <UseCallback />
                        </Card1>
                        <Card1 título="#16 - UseMemo">
                            <UseMemo></UseMemo>
                        </Card1>
                        <Card1 título="#15 - UseRef">
                            <Useref></Useref>
                        </Card1>
                        <Card1 título="#14 - UseEffect">
                            <Usefx></Usefx>
                        </Card1>
                        <Card1 título="#14 - UseState">
                            <Usestate></Usestate>
                        </Card1>
                        <Card1 título="#13 - Mega" color="#304A30">
                            <Mega></Mega>
                        </Card1>
                        <Card1 título="#12 - Contador" color="#304A30">
                            <Contador numeroInicial={10}></Contador>
                        </Card1>
                        <Card1 título="#11 Componente Controlado (Input)">
                            <Input></Input>
                        </Card1>
                        <Card1 título="#10 - Indireta Pai">
                            <IndiretaPai></IndiretaPai>
                        </Card1>
                        <Card1 título="#9 - Pais e Filhos">
                            <DiretaPai></DiretaPai>
                        </Card1>
                        <Card1 título="#8 - Render Condit" color="#F46318">
                            <ParOuImpar></ParOuImpar>
                            <UsuarioInfo
                                usuario={{ nome: "Fernando" }}
                            ></UsuarioInfo>
                            <UsuarioInfo
                                usuario={{ email: "fer@nando.com" }}
                            ></UsuarioInfo>
                        </Card1>
                        <Card1 título="#7 Desafio Repetição">
                            <TabelaProdutos></TabelaProdutos>
                        </Card1>
                        <Card1 título="#6 Repeticao">
                            <ListaAlunos></ListaAlunos>
                        </Card1>
                        <Card1 título="#5 Componente Filhos">
                            <Familia sobrenome="Ferreira"></Familia>
                        </Card1>
                        <Card1 título="#1 Primeiro">
                            <Primeiro></Primeiro>
                        </Card1>

                        <Card1 título="#2 Comparametro">
                            <Comparametro
                                título="Corno"
                                subtítulo="Extra-Corno"
                            ></Comparametro>
                        </Card1>

                        <Card1 título="#3 Fragmento">
                            <Fragmento></Fragmento>
                        </Card1>

                        <Card1 título="#4 Desafio Aleatório" color="#005F00">
                            <Aleatorio min={10} max={120}></Aleatorio>
                        </Card1>
                    </div>
                </div>
            </DataContext.Provider>
        </Store>
    );
};
