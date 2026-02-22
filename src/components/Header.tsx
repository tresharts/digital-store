import { LogoDigital } from "./Header/Logo/Logo"
import { NavItem } from "./Header/NavItem/NavItem"
import { useState } from "react"
import { Menu } from 'lucide-react';
import { Authbutton } from "./Header/Authbutton/authbutton"
import Pesquisa from "./Header/Shearch/Shearch";
import Carrinho from "./Header/CardIcons/Card";
export const Header = () => {
  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);


  const handleMenu = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <header className="bg-white  border-b shadow-lg py-5 px-5">
      <div className="container order-1 ">  
        <div className="flex justify-between items-center relative w-full min-h-[60px] gap-2">

          <div className=" flex justify-start items-center bg-red-500">
            <button onClick={handleMenu} className="md:hidden">
              <Menu size={24} className="text-dark-gray-2" />
            </button>
          </div>

          <LogoDigital /> 
  
          <Pesquisa /> 
  
           <div className="hidden md:flex justify-center items-center gap-6 ml-6">
             <Authbutton />
           </div>

           <Carrinho /> 
        </div>
      </div>

      <nav className={`container mx-auto px-5 pb-8 pt-10 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row gap-8 text-base">
          <li>
            <NavItem to="/" >Home</NavItem>
          </li>

          <li>
            <NavItem to="/produtos">Produtos</NavItem>
          </li>

          <li>
            <NavItem to="/categorias">Categorias</NavItem>
          </li>

          <li>
            <NavItem to="/meus-pedidos">Meus Pedidos</NavItem>
          </li>

        <li className="md:hidden mt-4 flex flex-col gap-4">
            <Authbutton />
        </li>
        </ul>
      </nav>
    </header>
  )
}