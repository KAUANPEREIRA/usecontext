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
      break;
    case "DEL":
      break;
    case "ORDER":
      break;
  }
  return state;
};
//usePeopleList hook criado para utilizar o reducer
export const usePeopleList = () => {};
