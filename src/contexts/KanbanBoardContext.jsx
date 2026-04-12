import { createContext, useContext } from "react";
import { useBoard } from '../hooks/useBoards';

//Crear el contexto
const KanbanBoardContext = createContext();

//Crear el proveedor del contexto
export const KanbanBoardProvider = ({children}) => {
    const {items: characters, setItems: setCharacters, columns, setColumns, columnsAndTasks, setColumnsAndTasks,
        favoriteList, addToFavoriteList, removeFromFavoriteList,
        isModalOpen, toggle, close
    } = useBoard();

    return(
        <KanbanBoardContext.Provider value={{characters, setCharacters, columns, 
            setColumns, columnsAndTasks, setColumnsAndTasks,
            favoriteList, addToFavoriteList, removeFromFavoriteList,
            isModalOpen, toggle, close
        }}>
            {children}
        </KanbanBoardContext.Provider>
    );
}

export const useKanbanBoardContext = () => {
    return useContext(KanbanBoardContext);
}