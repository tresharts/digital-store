import { Link } from "react-router-dom"
export const Produtos = () => {
    return(
        <>
            <div className=" m-auto flex flex-col items-center py-10">
                    <h1 className="text-center m-auto">Produtos</h1>
                    <Link to='/' className="mt-5 py-5">
                        <button className="py-2 px-5 bg-primary-dark text-white rounded hover:bg-primary">Voltar</button>
                    </Link>
            </div>
        </>
    )
}