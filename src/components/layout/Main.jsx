import { KanbanBoardProvider } from '../../contexts/KanbanBoardContext'; 

import SortableSection from '../drag-drop/SortableSection';
import Pokedex from '../Pokedex';

const Main = () => {
  return (
    <main className="flex lg:flex-row justify-center">
      <Pokedex/>
      {/*<KanbanBoardProvider>
        <SortableSection/>
      </KanbanBoardProvider> */}
    </main>
  )
}

export default Main
