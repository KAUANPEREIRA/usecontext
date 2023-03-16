import { useReducer } from "react";
import { v4 as uuiv4 } from "uuid";
type Person = {
  id: string;
  name: string;
};

type ActionType = {
  type: string;
  payload?: {
    name?: string;
    id?: string;
  };
};

const initialState: Person[] = [];

const reducer = (state: Person[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      if (action.payload?.name) {
        const newState = [...state];
        newState.push({
          id: uuiv4(),
          name: action?.payload?.name,
        });

        return newState;
      }

      break;
    case "DEL":
      if (action.payload?.id) {
        let newState = [...state];

        newState = newState?.filter((item) => item?.id !== action.payload?.id);
        return newState;
      }
      break;
    case "ORDER":
      let newState = [...state];
      newState = newState.sort((a, b) => (a.name > b.name ? 1 : -1));
      return newState;
  }
  return state;
};
//usePeopleList hook criado para utilizar o reducer
export const usePeopleList = () => {
  return useReducer(reducer, initialState);
};
