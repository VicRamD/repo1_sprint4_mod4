import { useState, useEffect } from "react"
import { fetchData } from "../hooks/useAxios"

import { usePokedexContext } from "../contexts/PokedexContext";

import DexEntry from "./DexEntry";
import NameForm from "./NameForm";

const Pokedex = () => {

    const {items, entry, loadingEntry, updateInicioQuantity} = usePokedexContext();

    // Early return mientras carga o si no hay datos
  if (loadingEntry || !entry) return <div>Cargando...</div>;

  return (
    <div className='flex w-full flex-col md:flex-row md:flex-wrap md:justify-center border border-black border-solid bg-emerald-100 lg:w-9/12'>

      <NameForm/>
      <div className='md:w-2/6 p-4 flex flex-col items-center'>
        <img src={entry.img} alt={entry.name} className="size-64 border-8 border-double border-red-700"/> 

        <div className="flex flex-row justify-around">
          <p><strong>{entry.id}</strong></p>
          <p><strong>{entry.name.toUpperCase()}</strong></p>
        </div>
        
        <div className="flex flex-row justify-around w-4/6 p-4 md:w-full md:justify-center">
          {entry.types.map(type=> <p key={type} className="px-6 py-2 border-solid border-black border rounded-lg
          md:mx-4">{type.toUpperCase()}</p>)}
        </div>
      </div>
      <div className='p-4'>
        <div className="flex justify-center w-full gap-4 mb-2">
            <button className="text-3xl rounded-2xl p-2 bg-red-700 text-white hover:bg-white hover:text-red-700"
            onClick={()=>updateInicioQuantity(-1)}><i className="bi bi-caret-up"></i></button>
        </div>
        
        <div className="flex flex-col w-full gap-4">
          {items.map((item, index) => <DexEntry key={item.id} entry={item} index={index}/>)}
        </div>
        <div className="flex justify-center w-full gap-4 mt-2">
            <button className="text-3xl rounded-2xl p-2 bg-red-700 text-white hover:bg-white hover:text-red-700"
            onClick={()=>updateInicioQuantity(1)}><i className="bi bi-caret-down"></i></button>
        </div>
        
      </div>
    </div>
  )
}

export default Pokedex