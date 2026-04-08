import { useState, useEffect } from "react";
import axios from "axios";

const COLUMNS = [];

const INITIAL_TASKS = [];

const fetchData = async () => {
  try {
    const response = await axios.get("https://thesimpsonsapi.com/api/characters");
    //console.log("Antes de response");
    //console.log(response);
    const {data} = response;
    //console.log("Antes de data");
    //console.log(data);
    return data
  } catch (error) {
    console.error(error);
  }
}

export const useBoard = () => {
    const [tasks, setTasks] = useState([]);

    const [columns, setColumns] = useState(COLUMNS);
    const [columnsAndTasks, setColumnsAndTasks] = useState(COLUMNS.reduce((acc, column) => {
          acc[column.id] = INITIAL_TASKS.filter(task => task.status === column.id).map(task => task.id);
          return acc;
      }, {}));

    useEffect(()=>{
        const loadTasks = async () => {
            const data = await fetchData();
            console.log(data.results);
            setTasks(data.results);
        };
        loadTasks();
    }, []);

    return {tasks, setTasks, columns, setColumns, columnsAndTasks, setColumnsAndTasks}
}