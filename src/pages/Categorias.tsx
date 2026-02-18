import { Link } from "react-router-dom";
const Categoria = () => {
    return (
        <>
            <div className="grid grid-cols-2">
                <div className="flex justify-center items-center m-auto mt-10 shadow-sm">
                    <h1 className="font-sans font-bold text-2xl">Categorias</h1>
                </div>
                <div className="m-auto mt-10">
                    <h2 className="font-sans font-bold text-2xl">Categorias</h2>
                </div>
            </div>
                <div className="flex justify-center items-center mt-10">
                    <Link to='/' className="mt-5 py-5" >
                    <button className="bg-primary-dark hover:bg-primary px-10 py-3 text-white rounded">Voltar</button>
                    </Link>
                </div>
        </>
    );
}
 
export default Categoria;