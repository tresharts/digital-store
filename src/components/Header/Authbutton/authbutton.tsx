import { Link } from "react-router-dom";
export const Authbutton = () => {
  return (
    <>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-4 rounded-lg 
       ">
        <Link
          to="/cadastro"
          className="text-dark-gray-3 underline text-sm md:text-base hover:text-primary transition-colors text-center"
        >
          Cadastre-se
        </Link>
        
        {/* O w-full garante que o botão ocupe toda a largura no celular,
            e o md:w-auto faz ele voltar ao tamanho normal no PC */}
        <div className="w-full flex justify-center items-center md:w-auto ">
          <Link to="/login" >
            <button className=" bg-primary text-white px-9 py-2 rounded-md font-semibold hover:bg-primary-dark transition-colors text-sm md:text-base shadow-sm shadow-primary/30 text-center">
              Entrar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}