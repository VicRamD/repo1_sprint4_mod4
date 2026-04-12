import { createContext, useContext } from "react";
import { usePokedex } from '../hooks/usePokedex';

//Crear el contexto
const PokedexContext = createContext();

//Crear el proveedor del contexto
export const PokedexProvider = ({children}) => {
    const {items, setItems, inicio, setInicio, endpoint, 
        entryEndpoint, entry, setEntry, loadingEntry, updateInicioQuantity, searchPokemon} = usePokedex();

    return(
        <PokedexContext.Provider value={{items, setItems, inicio, setInicio, endpoint, 
        entryEndpoint, entry, setEntry, loadingEntry, updateInicioQuantity, searchPokemon}}>
            {children}
        </PokedexContext.Provider>
    );
}

export const usePokedexContext = () => {
    return useContext(PokedexContext);
}