import { usePokedexContext } from "../contexts/PokedexContext";

import NameForm from "./NameForm";
import PokedexEntryCard from "./PokedexEntryCard";
import DexEntriesList from "./DexEntriesList";

const Pokedex = () => {

    const { entry, loadingEntry } = usePokedexContext();

    // Early return mientras carga o si no hay datos
  if (loadingEntry || !entry) return <div>Cargando...</div>; 

  return (
    <div className='flex w-full flex-col md:flex-row md:flex-wrap md:justify-center xl:w-9/12 xl:my-2
    border-black border-solid border-4 rounded-lg bg-linear-to-b from-yellow-300 via-black to-red-500
    elegance:from-elegance-400 elegance:to-elegance-600 elegance:text-white elegance:border-white
    dark:from-gray-400 dark:to-gray-700 dark:text-white
    radiation:from-radiation-500 radiation:to-radiation-700 radiation:text-radiation-50'>

      <NameForm/>
      <PokedexEntryCard/>
      <DexEntriesList/>
    
    </div>
  )
}

export default Pokedex