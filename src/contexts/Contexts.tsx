import { createContext, ReactNode } from "react";

type ContextType = {
  name: string;
  age: number;
};

const initialState = {
  name: "Kauan",
  age: 21,
};

//criando e tipando contextos
export const Context = createContext<ContextType>(initialState);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
