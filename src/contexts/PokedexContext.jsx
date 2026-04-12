import { createContext, useContext } from "react";
import { usePokedex } from '../hooks/usePokedex';

//Crear el contexto
const PokedexContext = createContext();

//Crear el proveedor del contexto
export const PokedexProvider = ({children}) => {
    const {items, setItems, inicio, setInicio, endpoint, setEndpoint, 
        entryEnpoint, setEntryEndPoint, entry, setEntry, loadingEntry} = usePokedex();

    return(
        <PokedexContext.Provider value={{items, setItems, inicio, setInicio, endpoint, setEndpoint, 
        entryEnpoint, setEntryEndPoint, entry, setEntry, loadingEntry}}>
            {children}
        </PokedexContext.Provider>
    );
}

export const usePokedexContext = () => {
    return useContext(PokedexContext);
}