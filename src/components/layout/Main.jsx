import { KanbanBoardProvider } from '../../contexts/KanbanBoardContext'; 

//import SortableSection from '../drag-drop/SortableSection';
import FavoriteListModal from '../drag-drop/FavoriteListModal';
import Pokedex from '../Pokedex';
import { PokedexProvider } from '../../contexts/PokedexContext'

const Main = () => {

  return (
    <main className="flex flex-col lg:flex-row lg:flex-wrap justify-center">
      <KanbanBoardProvider>
        <FavoriteListModal/>
      </KanbanBoardProvider> 

      <PokedexProvider>
        <Pokedex/>
      </PokedexProvider>      
      
    </main>
  )
}

export default Main
