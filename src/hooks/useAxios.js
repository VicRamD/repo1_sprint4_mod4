import axios from "axios";

export const fetchList = async (endPoint) => {
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
    console.error(error.response.data);
    console.error("CODE:" + error.response.status);
  }
}

export const fetchPokemon = async (idOrName) => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
    return data;
  } catch (error) {
    // 404 = pokemon no encontrado, cualquier otro es error real
    if (error.response?.status === 404) {
      return { notFound: true };
    }
    console.error(error.response?.data);
    console.error("CODE:" + error.response?.status);
    return null;
  }
}