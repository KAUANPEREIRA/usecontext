import { useState } from "react";
import { Link } from "react-router-dom";
import { usePeopleList } from "../reducers/peopleList";
const ShowData = () => {
  const [nameInput, setNameInput] = useState("");
  const [list, dispatch] = usePeopleList();
  const handleAddButton = () => {
    if (nameInput) {
      dispatch({
        type: "ADD",
        payload: {
          name: nameInput,
        },
      });
    }
  };

  console.log({ nameInput });

  const HandleDeletePerson = (id: string) => {
    if (id) {
      dispatch({
        type: "DEL",
        payload: {
          id: id,
        },
      });
    }
  };

  const handleOrder = () => {
    dispatch({
      type: "ORDER",
    });
  };

  return (
    <div>
      Componente show data
      <h4>adicionar um usuario</h4>
      <div>
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <button onClick={handleAddButton}>Adicionar</button>
        <button onClick={handleOrder}>Ordenar</button>
      </div>
      <hr></hr>
      <h1>Lista com reducer </h1>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {item?.name}{" "}
              <button onClick={() => HandleDeletePerson(item?.id)}>
                Deletar
              </button>
            </li>
          );
        })}
      </ul>
      <Link to="/">Voltar para cadastro</Link>
    </div>
  );
};

export default ShowData;
