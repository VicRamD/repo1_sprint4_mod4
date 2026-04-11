import pokeball from "../assets/pokeball.png";

const DexEntry = ({entry, index}) => {
  return (
    <div className={`flex justify-between p-4 bg-amber-200 hover:bg-red-500 hover:text-white dark:bg-gray-500 
      rounded-l-full md:w-75 dark:text-white elegance:bg-elegance-600 elegance:text-white 
    ${index === 0 ? 'border-4 border-red-700': ''}`}>
      <div className="flex flex-row justify-between gap-4">
        <img src={pokeball} alt="pokeball" className="size-9 outline-2 outline-black rounded-full"/> 
        <p className="text-xl">{entry.id} </p>
      </div>
        <p className="text-xl">{entry.name}</p>
      </div>
  )
}

export default DexEntry