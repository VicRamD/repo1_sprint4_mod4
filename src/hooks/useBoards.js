import { useState, useEffect } from "react";

import { useFavoriteList, useFavoriteListModal } from "./useFavoriteList";

const COLUMNS = [];

const INITIAL_TASKS = [];


export const useBoard = () => {

    //Para manejar la lista favorita
    const { favoriteList, addToFavoriteList, removeFromFavoriteList } = useFavoriteList("sz-favlist");
    const {isModalOpen, toggle, close} = useFavoriteListModal();

    const [items, setItems] = useState(favoriteList);

    const [columns, setColumns] = useState(COLUMNS);
    const [columnsAndTasks, setColumnsAndTasks] = useState(COLUMNS.reduce((acc, column) => {
          acc[column.id] = INITIAL_TASKS.filter(task => task.status === column.id).map(task => task.id);
          return acc;
      }, {}));

    return {items, setItems, columns, setColumns, columnsAndTasks, setColumnsAndTasks,
        favoriteList, addToFavoriteList, removeFromFavoriteList,
        isModalOpen, toggle, close
    }
}