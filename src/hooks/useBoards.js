import { useState, useEffect } from "react";

//import { useFavoriteList, useFavoriteListModal } from "./useFavoriteList";
import { useFavoriteListModal } from "./useFavoriteList";
import { useFavoriteListContext } from "../contexts/FavoriteListContext";

const COLUMNS = [];

const INITIAL_TASKS = [];


export const useBoard = () => {

    //Para manejar la lista favorita
    //const { favoriteList, addToFavoriteList, removeFromFavoriteList } = useFavoriteList("sz-favlist");
    const {isModalOpen, toggle, close} = useFavoriteListModal();

    const { favoriteList } = useFavoriteListContext();

    const [items, setItems] = useState(favoriteList);

    const [columns, setColumns] = useState(COLUMNS);
    const [columnsAndTasks, setColumnsAndTasks] = useState(COLUMNS.reduce((acc, column) => {
          acc[column.id] = INITIAL_TASKS.filter(task => task.status === column.id).map(task => task.id);
          return acc;
      }, {}));

    useEffect(() => {
        setItems(favoriteList); // Actualiza items cuando cambie favoriteList
    }, [favoriteList]);

    return {items, setItems, columns, setColumns, columnsAndTasks, setColumnsAndTasks,
        isModalOpen, toggle, close
    }
}