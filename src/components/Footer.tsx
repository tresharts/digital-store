import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react"
import Logo from '../assets/logo2.png'

export const Footer = () => {
  return (
      <footer className="bg-dark-gray text-white pt-16 pb-8 font-sans">
        <div className="container mx-auto px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-16">

            <div className="flex flex-col gap-8 mt-6">
              <div className="flex items-center gap-2 ml-1">
                <img src={Logo} alt="Logo" />
                <h2 className="text-4xl font-semibold tracking-tight">Digital Store</h2>
              </div>

              <p className="text-white text-base leading-relaxed max-w-sm mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor optio sint vitae est asperiores ipsa laborum molestiae.
              </p>

              <div className="flex gap-8 mt-3">
                <a href="#" className="hover:text-primary transition-colors"><FacebookIcon /></a>
                <a href="#" className="hover:text-primary transition-colors"><InstagramIcon /></a>
                <a href="#" className="hover:text-primary transition-colors"><TwitterIcon /></a>
              </div>
            </div>

            <div className="mt-3">
              <h3 className="text-lg font-semibold mb-8 text-white">Informação</h3>
                <ul className="flex flex-col gap-3 text-white font-normal text-base">
                  <li><a href="#" className="hover:text-primary hover:underline transition-colors">Sobre Drip Store</a></li>
                  <li><a href="#" className="hover:text-primary hover:underline transition-colors">Segurança</a></li>
                  <li><a href="#" className="hover:text-primary hover:underline transition-colors">Wishlist</a></li>
                  <li><a href="#" className="hover:text-primary hover:underline transition-colors">Bolg</a></li>
                  <li><a href="#" className="hover:text-primary hover:underline transition-colors">Trabalhe Conosco</a></li>
                  <li><a href="#" className="hover:text-primary hover:underline transition-colors">Meus Pedidos</a></li>
                </ul>
            </div> 

            <div className="mt-3">
              <h3 className="text-lg font-semibold mb-8 text-white">Categorias</h3>
                <ul className="flex flex-col gap-3 text-white font-normal text-base">
                  <li><a href="#" className="hover:text-primary hover:underline transition-colors">Camisetas</a></li>
                  <li><a href="#" className="hover:text-primary hover:underline transition-colors">Calças</a></li>
                  <li><a href="#" className="hover:text-primary hover:underline transition-colors">Bonés</a></li>
                  <li><a href="#" className="hover:text-primary hover:underline transition-colors">Headphones</a></li>
                  <li><a href="#" className="hover:text-primary hover:underline transition-colors">Tênis</a></li>
                </ul>
            </div>

            <div className="mt-3">
              <h3 className="text-lg font-semibold mb-8 text-white">Contato</h3>
              <div className="flex flex-col gap-3 text-white font-normal text-base">
                <p className="leading-relaxed">
                  Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
                </p>
                <p>
                  (85) 3051-3411
                </p>
              </div>
            </div>  
          </div>

          <hr className="border-white/30 mb-8" />

          <div className="text-center text-sm text-white font-normal">
            @ 2022 Digital College
          </div>
        </div>
      </footer>
  )
}