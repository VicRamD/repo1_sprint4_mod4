import { usePokedexContext } from "../contexts/PokedexContext";
import DexEntry from "./DexEntry";

const DexEntriesList = () => {

  const {items, updateInicioQuantity} = usePokedexContext();

  return (
    <div className='p-4 m-2 bg-sky-300 elegance:bg-elegance-300 dark:bg-neutral-500 dark:text-white 
    radiation:bg-radiation-300 radiation:text-radiation-600 border-solid border-4'>
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
  )
}

export default DexEntriesList