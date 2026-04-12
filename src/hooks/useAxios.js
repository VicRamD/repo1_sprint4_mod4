import axios from "axios";

export const fetchData = async (endPoint) => {
  try {
    const {data} = await axios.get(endPoint);
    
    //console.log("Antes de response");
    //console.log(response);
    //const {data} = response;
    //console.log("Antes de data");
    //console.log(data);

    //Devuelve data.results si results existe o solo data
    return data.results ?? data; 
  } catch (error) {
    console.error("Error STATUS");
  }
}