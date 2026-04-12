import { KanbanBoardProvider } from '../../contexts/KanbanBoardContext'; 

import SortableSection from '../drag-drop/SortableSection';
import Pokedex from '../Pokedex';
import { PokedexProvider } from '../../contexts/PokedexContext'

const Main = () => {
  return (
    <main className="flex lg:flex-row justify-center">
      <PokedexProvider>
        <Pokedex/>
      </PokedexProvider>      
      {/*<KanbanBoardProvider>
        <SortableSection/>
      </KanbanBoardProvider> */}
    </main>
  )
}

export default Main
