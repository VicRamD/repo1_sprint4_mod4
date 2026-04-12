import { createContext, useContext } from "react";
import { useFavoriteList, useFavoriteListModal } from "../hooks/useFavoriteList";

//Crear el contexto
const FavoriteListContext = createContext();

//Crear el proveedor del contexto
export const FavoriteListProvider = ({ children }) => {
    const {isModalOpen, open, close, toggle} = useFavoriteListModal();
    const { favoriteList, addToFavoriteList, removeFromFavoriteList } = useFavoriteList("sz-favlist");

    return(
        <FavoriteListContext.Provider value={{isModalOpen, open, close, toggle, favoriteList, 
        addToFavoriteList, removeFromFavoriteList}}>
            { children }
        </FavoriteListContext.Provider>
    );
}

export const useFavoriteListContext = () => {
    return useContext(FavoriteListContext);
}