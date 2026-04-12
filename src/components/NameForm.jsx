const NameForm = () => {
  return (
    <form action="" className="w-full flex justify-center gap-4">
        <label htmlFor="pokemon" className="p-2 text-xl">Name or Number:</label>
        <input id="pokemon" type="text" className="bg-white border-2 p-2 border-red-700 border-solid rounded-md
         text-black"/>
        <input type="submit" value="Buscar" className="cursor-pointer bg-red-700 text-white p-2 rounded-md
        hover:bg-white hover:text-red-700 hover:border hover:border-red-700"/>
    </form>
  )
}

export default NameForm