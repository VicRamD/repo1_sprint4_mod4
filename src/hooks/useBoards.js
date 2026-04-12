import { useState, useEffect } from "react";

import { fetchList } from "./useAxios";

const COLUMNS = [];

const INITIAL_TASKS = [];


export const useBoard = () => {
    const [items, setItems] = useState([]);

    const [columns, setColumns] = useState(COLUMNS);
    const [columnsAndTasks, setColumnsAndTasks] = useState(COLUMNS.reduce((acc, column) => {
          acc[column.id] = INITIAL_TASKS.filter(task => task.status === column.id).map(task => task.id);
          return acc;
      }, {}));

    const [endpoint, setEndPoint] = useState("https://pokeapi.co/api/v2/pokemon/");

    useEffect(()=>{
        const loadTasks = async () => {
            const dataResults = await fetchData(endpoint);
            const mappedData = dataResults.map(item => {
              return {id:item.url.match(/pokemon\/(\d+)\//)?.[1], 
                name: item.name,
                url: item.url
              }
          
            })
            setItems(mappedData);
        };
        loadTasks();
    }, [endpoint]);

    return {items, setItems, columns, setColumns, columnsAndTasks, setColumnsAndTasks}
}