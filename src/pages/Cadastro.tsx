import { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { Context } from "../contexts/Contexts";
type ReducerState = {
  count: number;
};

type ReducerAction = {
  type: string;
};
const initialState = { count: 0 };
const reducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "DEL":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return initialState;
  }

  return state;
};
const Cadastro = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //aula de reducer
  const { age, name } = useContext(Context);
  return (
    <div>
      <h1>Tela de Cadastro</h1>
      <hr></hr>
      <div>
        <p>Contagem: {state?.count}</p>
        <button onClick={() => dispatch({ type: "ADD" })}>ADD</button>
        <button onClick={() => dispatch({ type: "DEL" })}>Remover</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
      <p>
        ola {name} como você se sente após esses {age} completos !
      </p>
      <Link to="/exibir"> exbir</Link>
    </div>
  );
};

export default Cadastro;
