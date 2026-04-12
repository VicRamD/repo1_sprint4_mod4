import { useState, useEffect } from "react";

import { fetchData } from "./useAxios";

export const usePokedex = () => {
    // registros en columna
  const [items, setItems] = useState([]);
  const [inicio, setInicio] = useState(0);
  const [endpoint, setEndpoint] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=4`);

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
              console.log(endpoint);
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
                id: dataResults.id,
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

    const updateInicioQuantity = (amount) => {
        /*Math.max(1, item.quantity + amount): Compara el número 1 con el resultado de la cuenta 
        y se queda con el más alto para evitar que baje a 0.
        La eliminación será con el botón con icono de basurero*/
        console.log("En update Inicio")
        let newQuantity = inicio + amount;
        let quantityToUpdate = Math.max(0, newQuantity)
        setInicio(quantityToUpdate);
    };

    useEffect(()=>{
      const updateInicio = () => {
        setEndpoint(`https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=4`);
        setEntryEndPoint(`https://pokeapi.co/api/v2/pokemon/${inicio+1}`);
      }
      updateInicio();
    }, [inicio]);


    return {items, setItems, inicio, setInicio, endpoint, setEndpoint, 
        entryEnpoint, setEntryEndPoint, entry, setEntry, loadingEntry, updateInicioQuantity};
}

