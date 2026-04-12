import { useKanbanBoardContext } from "../../contexts/KanbanBoardContext";
import SortableSection from "./SortableSection";

const FavoriteListModal = () => {
  
  const {favoriteList, isModalOpen, toggle, close} = useKanbanBoardContext();

  return (
    <div className="w-full bg-sky-500 my-4 p-2">
        <div className="mx-8">
          <button className='border-4 py-2 px-3 border-white text-white bg-amber-500 cursor-pointer rounded-3xl
          hover:text-amber-500 hover:bg-white' onClick={() => toggle()}><span className='hidden lg:inline'>Ver</span> Favoritos</button>
        </div>
      {isModalOpen && <div id="playlistModal" className="fixed inset-0 bg-gray-400/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 border-4 border-amber-500 shadow-md relative w-full max-w-3xl max-h-[80vh] overflow-hidden">
            {/* Button close */}
            <button id="closeModal" className="absolute top-2 right-4 text-text-secondary hover:text-red-500 text-2xl cursor-pointer"
            onClick={() => close()}>
              &times;
            </button>

            {/* Content modal */}
            <h2 className="text-lg font-bold text-center mb-4">Your Favorites</h2>

            {/* Playlist Cards Section */}
            <div className="playlistCardSection bg-white py-10 overflow-y-auto max-h-[65vh] px-4">

              {/* Card Component */}
              {favoriteList.length === 0 ? <p className="text-center">
                You don't have any pokémon in your playlist yet.
              </p> :  <SortableSection/> }

              
            </div>
          </div>
      </div>} 
    </div>

  )
}

export default FavoriteListModal;