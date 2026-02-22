import { ShoppingCart } from "lucide-react"
const Carrinho = () => {
    return (
        <>
            
        <div className="flex items-center md:flex gap-6 ">
          <button className="relative text-primary hover:text-primary-dark transition-colors md:ml-5">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-destructive text-white text-[12px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
              2
            </span>
          </button>
        </div>
        </>
    );
}
 
export default Carrinho;