import { useState, useEffect } from "react";

import { fetchList, fetchPokemon } from "./useAxios";

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
  const [entryError, setEntryError] = useState(null);

  const endpoint = `https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=4`;
  //const entryEndpoint = `https://pokeapi.co/api/v2/pokemon/${query ?? inicio + 1}`;
  const entryEndpoint = query ?? inicio + 1; // ← solo el id/nombre, no la URL completa

  //items - lista 
    useEffect(()=>{
          const loadItems = async () => {
              const dataResults = await fetchList(endpoint);
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
  
    //entry - individual
    useEffect(()=>{
          const loadEntry = async () => {
              //inicia la carga
              setLoadingEntry(true);
              //limpia error 
              setEntryError(null);

              const dataResults = await fetchPokemon(entryEndpoint);

              // Fetch falló (error de red, etc)
              if (!dataResults) {
                setEntryError("Error al conectar con la API.");
                setLoadingEntry(false);
                return;
              }

              // 404 - no se encontró nada con la query
              if (dataResults.notFound) {
                setEntryError(`No se encontró "${entryEndpoint}".`);
                setLoadingEntry(false);
                return;
              }
  
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
              setInicio(pokemonData.id - 1);
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
        setQuery(null);
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
      if(query.length === 0){
        setQuery(null);
      } else {
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
      }
    };

    const clearSearch = () => setQuery(null);

    return {items, setItems, inicio, setInicio, endpoint, 
        entryEndpoint, entry, setEntry, loadingEntry, updateInicioQuantity, searchPokemon};
}

function esEntero(str) {
  // Convierte el string a número y verifica si es entero
  return Number.isInteger(Number(str)) && str.trim() !== '';
}