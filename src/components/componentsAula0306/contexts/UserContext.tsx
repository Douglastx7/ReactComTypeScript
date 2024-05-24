import React, { Children } from "react";
import useFetch from "../../componentsAula0305/hooks/useFetch";

type User = {
    id: number;
    nome: string;
    idade: number;
    aulas: number;
    cursos: number;
    preferencias: {
      playback: number;
      volume: number;
      qualidade: 'baixa' | 'media' | 'alta';
    };
  };

type IUserContext = {
    data: User | null;
    loading: boolean;
}
const UserContext = React.createContext<IUserContext | null>(null);

export const useUser = () => {
    const context = React.useContext(UserContext);
    if(context === null) throw new Error("userContext deve estar dentro do Provider");
    return context;
}

export const UserContextProvider = ({children}: React.PropsWithChildren) => {
  const {data, loading} = useFetch<User>('https://data.origamid.dev/usuarios/1');

    return (
    <UserContext.Provider value={{data, loading}}>
        {children}
    </UserContext.Provider>)
}