import { usePokedexContext } from "../contexts/PokedexContext";

import DexEntry from "./DexEntry";
import NameForm from "./NameForm";
import PokedexEntryCard from "./PokedexEntryCard";

const Pokedex = () => {

    const {items, entry, loadingEntry, updateInicioQuantity} = usePokedexContext();

    // Early return mientras carga o si no hay datos
  if (loadingEntry || !entry) return <div>Cargando...</div>;

  return (
    <div className='flex w-full flex-col md:flex-row md:flex-wrap md:justify-center border border-black border-solid bg-emerald-100 lg:w-9/12'>

      <NameForm/>
      <PokedexEntryCard/>
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