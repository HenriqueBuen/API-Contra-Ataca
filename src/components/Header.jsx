import { useContext } from "react"
import { Context } from "../Context"
export function Header() {

  const { setActualScreen } = useContext(Context)
  const handleAction = () => setActualScreen(0)
  
    return(
         
        <header className="text-gray-700 body-font p-5 bg-white shadow-md">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
              
              <span onClick={handleAction} className=" p-4 ml-3 text-xl body-font cursor-pointer hover:scale-110 transition-all hover:text-blue-500 ">Henry Ecommerce</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-blue-500  hover:border-b border-blue-500 transition-transform transform hover:scale-110 cursor-pointer">Conta</a>
    
              <a className="mr-5 hover:text-blue-500  hover:border-b border-blue-500 transition-transform transform hover:scale-110 cursor-pointer">Carrinho</a>
            </nav>
            
          </div>
        </header>
    )
}
