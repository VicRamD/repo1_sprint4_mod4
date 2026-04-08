import { createContext, useContext } from "react";
import { useBoard } from '../hooks/useBoards';

//Crear el contexto
const KanbanBoardContext = createContext();

//Crear el proveedor del contexto
export const KanbanBoardProvider = ({children}) => {
    const {tasks: characters, setTasks: setCharacters, columns, setColumns, columnsAndTasks, setColumnsAndTasks} = useBoard();

    return(
        <KanbanBoardContext.Provider value={{characters, setCharacters, columns, setColumns, columnsAndTasks, setColumnsAndTasks}}>
            {children}
        </KanbanBoardContext.Provider>
    );
}

export const useKanbanBoardContext = () => {
    return useContext(KanbanBoardContext);
}