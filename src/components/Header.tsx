import { Search, ShoppingCart } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import Logo from '../assets/logo.png'

export const Header = () => {
  return (
    <header className="bg-white w-full">
      <div className="container mx-auto px-5 flex items-center justify-between gap-8 mt-10">
        <Link to="/" className="text-3xl text-primary flex items-center gap-2">
          <img src={Logo} alt="Logo" />
          <span className="text-primary font-semibold text-4xl tracking-tight hidden sm:block ml-1">
            Digital Store
          </span>
        </Link>

        <div className="flex-grow relative hidden md:block max-w-4xl">
          <input 
            type="text"
            placeholder="Pesquisar produto..."
            className="w-full bg-light-gray rounded-lg py-5 px-6 pr-12 text-dark-gray-3 outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-light-gray-3" 
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors">
            <Search size={22}/>
          </button>
        </div>

        <div className="flex items-center gap-6 ml-6">
          <Link to="/cadastro" className="text-dark-gray-3 underline text-md sm:block hover:text-primary transition-colors">
            Cadastre-se
          </Link>

          <Link to="/login">
            <button className="bg-primary text-white px-9 py-2 rounded-md font-semibold hover:bg-primary-dark transition-colors text-md shadow-sm shadow-primary/30">
              Entrar
            </button>
          </Link>

          <button className="relative text-primary hover:text-primary-dark transition-colors ml-10">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-destructive text-white text-[12px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
              2
            </span>
          </button>
        </div>
      </div>

      <nav className="container mx-auto px-5 pb-8 pt-10">
        <ul className="flex gap-8 text-base">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => 
                isActive ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-dark-gray-3 hover:text-primary transition-colors"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/produtos"
              className={({ isActive }) => 
                isActive ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-dark-gray-3 hover:text-primary transition-colors"
              }
            >
              Produtos
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/categorias"
              className={({ isActive }) => 
                isActive ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-dark-gray-3 hover:text-primary transition-colors"
              }
            >
              Categorias
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/meus-pedidos"
              className={({ isActive }) => 
                isActive ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-dark-gray-3 hover:text-primary transition-colors"
              }
            >
              Meus Pedidos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}