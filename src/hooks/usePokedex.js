import { useState, useEffect } from "react";

import { fetchData } from "./useAxios";

export const usePokedex = () => {
    // registros en columna
  const [items, setItems] = useState([]);
  const [inicio, setInicio] = useState(0);
  const [endpoint, setEndpoint] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=6`);

  //  datos individuales
  const [entryEnpoint, setEntryEndPoint] = useState(`https://pokeapi.co/api/v2/pokemon/${inicio+1}`);
  const [entry, setEntry] = useState(null);
  const [loadingEntry, setLoadingEntry] = useState(true);

  //items
    useEffect(()=>{
          const loadItems = async () => {
              const dataResults = await fetchData(endpoint);
              const mappedData = dataResults.map(item => {
                return {
                  id:item.url.match(/pokemon\/(\d+)\//)?.[1], 
                  name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
                  url: item.url
                }
            
              })
              setItems(mappedData);
          };
          loadItems();
      }, [endpoint]);
  
    //entry
    useEffect(()=>{
          const loadEntry = async () => {
              //inicia la carga
              setLoadingEntry(true); 
              const dataResults = await fetchData(entryEnpoint);
  
              //imagen oficial
              const imageResult = dataResults.sprites.other;
              const officialImg = imageResult["official-artwork"];
  
              //tipos
              const typesObject = dataResults.types
              const typeNumberArray = Object.keys(typesObject);
              const types = typeNumberArray.map((number) => {
                let numberObject = typesObject[number];
                let {type} = numberObject;
                return type.name;
              });
  
              const pokemonData = {
                id: dataResults.order,
                name: dataResults.name,
                types: types,
                img: officialImg.front_default,
              }
              console.log(pokemonData);
              setEntry(pokemonData);
              //termina de cargar
              setLoadingEntry(false);
          };
          loadEntry();
    }, [entryEnpoint]);

    return {items, setItems, inicio, setInicio, endpoint, setEndpoint, 
        entryEnpoint, setEntryEndPoint, entry, setEntry, loadingEntry};
}

