import {useSortable} from '@dnd-kit/react/sortable';
//import { useEffect } from 'react';

import { useFavoriteListContext } from '../../contexts/FavoriteListContext';

const CharacterCard = ({character, index, column}) => {

  const {removeFromFavoriteList} = useFavoriteListContext();

    const {ref, isDragging} = useSortable({ 
    id: character.id, 
    index, 
    group: column,
    type: 'item',
    accept: ['item'], 
  });

    /*const { ref, handleRef, isDragging } =  useSortable({ 
    id: character.id, 
    index, 
    group: column,
    type: 'item',
    accept: ['item'], 
  }); */

  /*useEffect(()=> {
    console.log("En CharacterCard");
    console.log(character)
  }, [character]); */

  return (
    <div ref={ref} className="bg-white border-2 border-solid border-black dark:bg-gray-700 elegance:bg-elegance-400
     radiation:bg-radiation-700 size-40 flex" data-shadow={isDragging || undefined}>
    {/*<div ref={ref} className="cursor-grab rounded-lg bg-white dark:bg-neutral-700 radiation:bg-radiation-700 p-4 shadow-sm hover:shadow-md">*/}
        <div className='flex flex-row items-center my-auto p-4'>
          <div className='flex-col'>
              <img src={character.img} alt={`imagen de ${character.name}`} className='size-16' />
          <h3 className="font-medium text-black dark:text-neutral-100 elegance:text-white radiation:text-radiation-50">{character.name.toUpperCase()}</h3>
          </div>
          
           <button onClick={() => removeFromFavoriteList(character.id)}
              className="bg-state-error border-2 bg-red-600 text-white hover:bg-white hover:text-red-600 border-red-600 active:bg-red-700 
                      py-2 px-3 max-h-12 rounded-full font-bold transition-colors duration-300 cursor-pointer">
              <i className="bi bi-x text-xl"></i>
            </button>
        </div>
        {/*<button ref={handleRef} className="handle" />*/}
    </div>
  )
}

export default CharacterCard;