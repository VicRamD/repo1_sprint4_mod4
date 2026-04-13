import { useFavoriteListContext } from "../contexts/FavoriteListContext";
import { usePokedexContext } from "../contexts/PokedexContext";

const PokedexEntryCard = () => {

    const { entry } = usePokedexContext();
    const { addToFavoriteList } = useFavoriteListContext();

  return (
    <div className='md:w-2/6 p-4 flex flex-col items-center justify-center border-solid border-4 bg-sky-300
    elegance:bg-elegance-300 dark:bg-neutral-500 dark:text-white radiation:bg-radiation-300 radiation:text-radiation-600'>
        <img src={entry.img} alt={entry.name} className="size-64 border-8 border-double border-red-700"/> 

        <div className="flex flex-row justify-around">
            <p className="mx-2"><strong>Entry: {entry.id}</strong></p>
            <p className="mx-2"><strong>{entry.name.toUpperCase()}</strong></p>
        </div>
        
        <div className="flex flex-row flex-wrap justify-around w-4/6 p-4 md:w-full md:justify-center">
          {entry.types.map(type=> <p key={type} className="px-6 py-2 border-solid border-black border rounded-lg
          md:mx-4">{type.toUpperCase()}</p>)}
          <button className="w-full cursor-pointer p-2 mt-2 bg-emerald-600 text-white 
          hover:bg-neutral-400 hover:text-black" onClick={()=>addToFavoriteList(entry)}>Add to Favorites</button>
        </div>
    </div>
  )
}

export default PokedexEntryCard