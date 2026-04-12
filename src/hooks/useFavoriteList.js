import { useEffect, useState } from "react";

export const useFavoriteListModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const open = () => setIsModalOpen(true);
    const close = () => setIsModalOpen(false);
    const toggle = () => setIsModalOpen((prev) => !prev);

    return {isModalOpen, open, close, toggle}
}

export const useFavoriteList = (listName) => {
    //listName es el nombre con el que está guardado en localStorage

     //estado de la lista
    //recuperar lista del local storage (si existe)
    const [favoriteList, setFavoriteList] = useState(() => {
        const saved = localStorage.getItem(listName);
        return saved ? JSON.parse(saved) : [];
    });


      //añadir a la lista de favoritos
  const addToFavoriteList = (pokemon) => {
    //console.log(song)
    //Revisa si la canción ya está en la playlist para no agregarla
    const pokemonAlreadyInList = favoriteList.find( poke => poke.id === pokemon.id);
    if(!pokemonAlreadyInList){
      setFavoriteList([...favoriteList, pokemon]);
    } 
  
  };

  const removeFromFavoriteList = (id) => setFavoriteList(prev => prev.filter(pokemon => pokemon.id !== id));

  //Guardar en Local Storage cuando cambie
  useEffect(() => {
    localStorage.setItem(listName, JSON.stringify(favoriteList));
  }, [favoriteList, listName]);

  return {favoriteList, addToFavoriteList, removeFromFavoriteList}
}
