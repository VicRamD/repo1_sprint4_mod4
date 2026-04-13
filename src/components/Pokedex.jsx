import { usePokedexContext } from "../contexts/PokedexContext";

import NameForm from "./NameForm";
import PokedexEntryCard from "./PokedexEntryCard";
import DexEntriesList from "./DexEntriesList";

const Pokedex = () => {

    const { entry, loadingEntry } = usePokedexContext();

    // Early return mientras carga o si no hay datos
  if (loadingEntry || !entry) return <div>Cargando...</div>; 

  return (
    <div className='flex w-full flex-col md:flex-row md:flex-wrap md:justify-center border border-black border-solid bg-emerald-100 xl:w-9/12'>

      <NameForm/>
      <PokedexEntryCard/>
      <DexEntriesList/>
    
    </div>
  )
}

export default Pokedex