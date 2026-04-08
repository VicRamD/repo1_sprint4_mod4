const Footer = () => {

    const nombreAutor = "Víctor Francisco Ramirez Diaz";

  return (
    <footer className="p-5 mt-auto bg-blue-600 dark:bg-gray-600 elegance:bg-elegance-600 radiation:bg-radiation-600"> 
      <p className="text-center text-white">Hecho con React por {nombreAutor}</p>
    </footer>  
  )
}

export default Footer;