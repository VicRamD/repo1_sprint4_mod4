import { KanbanBoardProvider } from '../../contexts/KanbanBoardContext'; 

import SortableSection from '../drag-drop/SortableSection';

const Main = () => {
  return (
    <main className="flex lg:flex-row justify-center">
      <KanbanBoardProvider>
        <SortableSection/>
      </KanbanBoardProvider>
    </main>
  )
}

export default Main
