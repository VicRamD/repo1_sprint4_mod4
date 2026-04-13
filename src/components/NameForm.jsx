import { useState } from "react";

import { usePokedexContext } from "../contexts/PokedexContext";

const NameForm = () => {

  const [query, setQuery] = useState("");

  const {searchPokemon} = usePokedexContext();

  const handleSubmit = (e) =>{
    searchPokemon(query);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col my-2 sm:flex-row justify-center gap-1 sm:gap-4">
        <label htmlFor="pokemon" className="p-2 text-xl">Pokémon Name or Number:</label>
        <input id="pokemon" type="text" className="bg-white border-2 p-2 border-red-700 border-solid rounded-md
         text-black" 
         onChange={e => setQuery(e.target.value)}/>
        <input type="submit" value="Buscar" className="cursor-pointer bg-red-700 text-white p-2 rounded-md
        hover:bg-white hover:text-red-700 hover:border hover:border-red-700"/>
    </form>
  )
}

export default NameForm