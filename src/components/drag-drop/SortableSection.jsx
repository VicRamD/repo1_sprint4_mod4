import { DragDropProvider } from '@dnd-kit/react';
import { move } from '@dnd-kit/helpers';

import { useKanbanBoardContext } from '../../contexts/KanbanBoardContext';
import CharacterCard from './CharacterCard';

export default function SortableSection() {

  const {characters, setCharacters} = useKanbanBoardContext();


  /*const [items, setItems] = useState({
    A: ['A0', 'A1', 'A2'],
    B: ['B0', 'B1'],
    C: [],
  }); formato necesario para la función move */


  return (
    <DragDropProvider
      onDragEnd={(event) => {
        setCharacters((items) => move(items, event));
      }}
    >

      {<div className={`bg-amber-100 dark:bg-gray-200 py-10 flex justify-center`}>
        <div className={`max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
          
            {/* Card Component ¨*/}
            {characters.map((character, index) => <CharacterCard key={character.id} character={character} index={index}/>)}
        </div>
      </div>} 
      {/*<div className='inline-flex flex-row gap-5'>
          {Object.entries(columnsAndTasks).map(([columnId, tasksInCol]) => 
          {
            return <Column key={columnId} column={columns.find(col=> col.id === columnId)} 
            tasks={tasksInCol.map(id => tasks.find(task => task.id === id))}></Column>
          })}

 
      </div> */}
    </DragDropProvider>
  );
}

/**
 * Yes, you can use the move function with a structure like COLUMNS_AND_TASKS, but you need to transform your data into a
 *  grouped record format (e.g., { [columnId]: tasks[] }) before using move. After moving, map the result back to your original 
 * structure.

Reference: /react/guides/multiple-sortable-lists
 */