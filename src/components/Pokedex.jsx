import { useState, useEffect } from "react"
import { fetchData } from "../hooks/useAxios"

import DexEntry from "./DexEntry";

const Pokedex = () => {

  // registros en columna
  const [items, setItems] = useState([]);
  const [inicio, setInicio] = useState(0);
  const [enpoint, setEndPoint] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=6`);

  //  datos individuales
  const [entryEnpoint, setEntryEndPoint] = useState(`https://pokeapi.co/api/v2/pokemon/${inicio+1}`);
  const [entry, setEntry] = useState(null);
  const [loadingEntry, setLoadingEntry] = useState(true);

  //items
  useEffect(()=>{
        const loadItems = async () => {
            const dataResults = await fetchData(enpoint);
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
    }, [enpoint]);

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

    // Early return mientras carga o si no hay datos
  if (loadingEntry || !entry) return <div>Cargando...</div>;

  return (
    <div className='flex w-full flex-col md:flex-row md:justify-center border border-black border-solid bg-emerald-100 lg:w-9/12'>
      <div className='md:w-2/6 p-4 flex flex-col items-center'>
        <img src={entry.img} alt={entry.name} className="size-64 border-8 border-double border-red-700"/> 

        <div className="flex flex-row justify-around">
          <p><strong>{entry.id}</strong></p>
          <p><strong>{entry.name.toUpperCase()}</strong></p>
        </div>
        
        <div className="flex flex-row justify-around w-4/6 p-4 md:w-full md:justify-center">
          {entry.types.map(type=> <p className="px-6 py-2 border-solid border-black border rounded-lg
          md:mx-4">{type.toUpperCase()}</p>)}
        </div>
      </div>
      <div className='p-4'>
        <div className="flex justify-center w-full gap-4 mb-2">
            <button className="text-3xl rounded-2xl p-2 bg-red-700 text-white hover:bg-white hover:text-red-700"><i className="bi bi-caret-up"></i></button>
        </div>
        
        <div className="flex flex-col w-full gap-4">
          {items.map((item, index) => <DexEntry key={item.id} entry={item} index={index}/>)}
        </div>
        <div className="flex justify-center w-full gap-4 mt-2">
            <button className="text-3xl rounded-2xl p-2 bg-red-700 text-white hover:bg-white hover:text-red-700"><i className="bi bi-caret-down"></i></button>
        </div>
        
      </div>
    </div>
  )
}

export default Pokedex