import { useThemeContext } from "../../contexts/ThemeContext"
import { useOpener } from "../../hooks/useOpener";
import { useFavoriteListModal } from "../../hooks/useFavoriteList";

const Header = () => {
  const {changeTheme, themes} = useThemeContext();
  const {toggle: switcher, close, isOpen} = useOpener();

  const {toggle} = useFavoriteListModal();

  function closeTabAndChangeTheme(themeName){
      changeTheme(themeName);
      close();
  } 

  return (
    <header className="mb-4">
        <nav className='flex items-center justify-between w-full h-[5em] bg-blue-600 dark:bg-gray-600 elegance:bg-elegance-600
        radiation:bg-radiation-600 mx-auto z-30 py-5 px-6 lg:px-20 2xl:px-0'>

          <div className='flex gap-4'>
              <div className="flex gap-4">
                {/**menu desplegable */}
                <div className="relative h-fit w-fit">
                    <button className="relative cursor-pointer p-2 rounded-md text-white hover:bg-white hover:text-black
                    radiation:text-radiation-50" onClick={switcher}><i className="bi bi-circle-half"></i> Theme</button>
                    <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300
                    transition-transform duration-300 ease-out"></span>

                    <div className={`absolute left-1/2 top-12 bg-white text-black -translate-x-1/2 ${isOpen ? '' : 'hidden'}`}>
                      <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent"></div>
                      <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"></div>
                      <div className="size-28 bg-white p-2 shadow-xl  overflow-y-scroll">
                        <ul className="w-full">
                          {Object.keys(themes).map((themeName)=>{
                            return  <li key={themeName} className="cursor-pointer mt-2 px-2 text-white bg-red-400 dark:bg-gray-900
                            elegance:bg-elegance-400 radiation:bg-radiation-500 rounded-md" onClick={() => closeTabAndChangeTheme(themeName)}>{themes[themeName]}</li>
                          })}
                        </ul>
                          
                      </div>
                    </div>
                </div>
                
            </div>
          </div>
          
      </nav>
    </header>
  )
}

export default Header