import React, { useReducer , useState} from "react";
import "./useReducer.css";
import alunos from "../../data/alunos";

const initialState = {
    cart: [],
    featured_products: [],
    user: null,
    number: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case "number_add2":
            return { ...state, number: state.number + 2 };
        case "login":
            return {
                ...state,
                user: alunos[parseInt(Math.random() * alunos.length)],
            };
        case "multiply7":
            return{
                ...state, number: state.number * 7
            };
        case "parsar":
            return{
                ...state, number: parseInt(state.number)
            };
        case "divide25":
            return{
                ...state, number: state.number/25
            };
        case "number_addn":
            return{
                ...state, number: state.number + action.valor
            };
        default:
            return state;
    }
}

export default (props) => {
    const [passo, setPasso] = useState(1)
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="Reducer">
            {state.user ? (
                <span>{state.user.nome}</span>
            ) : (
                <span>Sem Usuário</span>
            )}
            <div>{state.number}</div>
            <div>
                <button
                    className="Reducer button"
                    onClick={() => dispatch({ type: "login"})}
                >
                    Login
                </button>
                <button
                    className="Reducer button"
                    onClick={() => dispatch({ type: "number_add2" })}
                >
                    +2
                </button>
                </div>
                <div>

                <button
                    className="Reducer button"
                    onClick={() => dispatch({ type: "multiply7" })}
                >
                    x7
                </button>
                <button
                    className="Reducer button"
                    onClick={() => dispatch({ type: "divide25" })}
                >
                    /25
                </button>
                </div>
                <div>
                <button
                    className="Reducer button"
                    onClick={() => dispatch({ type: "parsar" })}
                >
                    arredondar
                </button>
                </div>
                <div>
                <input type="text" value={passo} onChange={(e) =>setPasso(parseInt(e.target.value))}/>
                <button
                    className="Reducer button"
                    onClick={() => dispatch({ type: "number_addn", valor: passo})}
                >
                    +n
                </button>
                </div>
        </div>
    );
};
