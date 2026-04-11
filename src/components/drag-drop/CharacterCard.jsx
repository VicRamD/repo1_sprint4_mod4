import {useSortable} from '@dnd-kit/react/sortable';
//import { useEffect } from 'react';

const CharacterCard = ({character, index, column}) => {

    const { ref, handleRef, isDragging } =  useSortable({ 
    id: character.id, 
    index, 
    group: column,
    type: 'item',
    accept: ['item'], 
  });

  /*useEffect(()=> {
    console.log("En CharacterCard");
    console.log(character)
  }, [character]); */

  return (
    <div ref={ref} className="item bg-white dark:bg-gray-700 elegance:bg-elegance-400 radiation:bg-radiation-700" data-shadow={isDragging || undefined}>
    {/*<div ref={ref} className="cursor-grab rounded-lg bg-white dark:bg-neutral-700 radiation:bg-radiation-700 p-4 shadow-sm hover:shadow-md">*/}
        <div className='truncate'>
            <h3 className="font-medium text-black dark:text-neutral-100 elegance:text-white radiation:text-radiation-50">{character.name}</h3>
           {/* <img src={`https://cdn.thesimpsonsapi.com/200${character.portrait_path}`} alt={`${character.name} portrait`} className="border-2 border-black"/> */}
            
            <p className="mt-2 text-sm text-black dark:text-neutral-400 elegance:text-white radiation:text-radiation-100">{character.url}</p>
        </div>
        <button ref={handleRef} className="handle" />
    </div>
  )
}

export default CharacterCard;