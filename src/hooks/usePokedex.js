import { useState, useEffect } from "react";

import { fetchData } from "./useAxios";

export const usePokedex = () => {
    // registros en columna
  const [items, setItems] = useState([]);
  const [inicio, setInicio] = useState(0);
  //const [endpoint, setEndpoint] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=4`);

  //  datos individuales
  //const [entryEndpoint, setEntryEndPoint] = useState(`https://pokeapi.co/api/v2/pokemon/${inicio+1}`);
  const [entry, setEntry] = useState(null);
  const [loadingEntry, setLoadingEntry] = useState(true);

  //Para busqueda:
  const [query, setQuery] = useState(null); 

  const endpoint = `https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=4`;
  const entryEndpoint = `https://pokeapi.co/api/v2/pokemon/${query ?? inicio + 1}`;

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
              //console.log(endpoint);
          };
          loadItems();
      }, [endpoint]);
  
    //entry
    useEffect(()=>{
          const loadEntry = async () => {
              //inicia la carga
              setLoadingEntry(true); 
              const dataResults = await fetchData(entryEndpoint);
  
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
              //console.log(pokemonData);
              setEntry(pokemonData);
              //termina de cargar
              setLoadingEntry(false);
          };
          loadEntry();
    }, [entryEndpoint]);

    const updateInicioQuantity = (amount) => {
        /*Math.max(1, item.quantity + amount): Compara el número 1 con el resultado de la cuenta 
        y se queda con el más alto para evitar que baje a 0.
        La eliminación será con el botón con icono de basurero*/
        /*console.log("En update Inicio")
        let newQuantity = inicio + amount;
        let quantityToUpdate = Math.max(0, newQuantity)
        setInicio(quantityToUpdate); */
        setInicio(prev => Math.max(0, prev + amount));
    };

    /*
    useEffect(()=>{
      const updateInicio = () => {
        setEndpoint(`https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=4`);
        setEntryEndPoint(`https://pokeapi.co/api/v2/pokemon/${inicio+1}`);
      }
      updateInicio();
    }, [inicio]); */

    const searchPokemon = (query) => {  
        const isNumber = esEntero(query);
        if(isNumber){
          let number = Number(query);
          if(number <= 0) {
            console.log("debe ser número positivo mayor a 0");
          } else {
            setQuery(number);
          }
        } else {
          setQuery(query);
        }
    };


    return {items, setItems, inicio, setInicio, endpoint, 
        entryEndpoint, entry, setEntry, loadingEntry, updateInicioQuantity, searchPokemon};
}

function esEntero(str) {
  // Convierte el string a número y verifica si es entero
  return Number.isInteger(Number(str)) && str.trim() !== '';
}