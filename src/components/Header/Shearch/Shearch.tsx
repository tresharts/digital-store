import { Search } from "lucide-react";
const Pesquisa = () => {
    return (
        // 1. Tiramos o "hidden" daqui. Adicionamos "flex justify-end" para a lupa ficar à direita no celular.
        <div className="flex-grow max-w-4xl flex justify-end items-center md:relative">
            
            {/* 2. Colocamos o "hidden md:block" DIRETAMENTE no input. Agora só ele some no celular! */}
            <input
                type="text"
                placeholder="Pesquisar produto..."
                className="hidden md:block w-full bg-light-gray rounded-lg py-5 px-6 pr-12 text-dark-gray-3 outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-light-gray-3"
            />
            
            {/* 3. A mágica do botão: Estático no celular, Absoluto no PC (usando md:absolute e md:right-4) */}
            <div className="text-gray-400 hover:text-primary transition-colors md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2">
                {/* Adicionei um p-2 no celular para o dedo ter área de clique maior! */}
                <button className="p-2 md:p-0 text-dark-gray-3">
                    <Search size={24} className="md:w-[22px] md:h-[22px]"/>
                </button>
            </div>
        </div>
    );
}

export default Pesquisa;