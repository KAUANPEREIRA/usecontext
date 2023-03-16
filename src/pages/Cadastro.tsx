import { Link } from "react-router-dom";
import { useContagem } from "../reducers/contagem";
const Cadastro = () => {
  //como se fosse um useState o state e variavel , o dispatch a funçao
  //utilizando reducer Separado em outra arquivo chamando o UseContagem

  const [state, dispatch] = useContagem();
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
      <p>{/* ola {name} como você se sente após esses {age} completos ! */}</p>
      <Link to="/exibir"> exbir</Link>
    </div>
  );
};

export default Cadastro;
