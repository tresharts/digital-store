import { Link } from "react-router-dom";
import Offer from '@/assets/special-offer.png';
import Elipse from '@/assets/ellipse.png'

export const SpecialOffer = () => {
  return (
    <section className="bg-white py-28">
      <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto px-5 ">
          <div className="flex-1 relative flex justify-center items-center"> 
            <img 
              src={Elipse} 
              alt="Elipse"
              className="absolute" 
            />
            
            <img 
              src={Offer} 
              alt="Oferta Especial" 
              className=""
            />
          </div>

            <div className="flex-1 flex flex-col gap-5 pr-5 mt-20 md:mt-0 ">
              <span className="text-primary font-bold text-sm tracking-wider">
                Oferta Especial
              </span>
              <h2 className="text-dark-gray-2 text-4xl md:text-5xl font-bold leading-tight">
                Air Jordan edição de <br /> colecionador
              </h2>
              <p className="text-dark-gray-2 text-base leading-relaxed max-w-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nihil aliquam, sunt impedit dicta consequuntur sequi, eveniet molestiae quos vero voluptates quaerat magni, a quasi enim unde maxime est. Iure.
              </p>
              <div className="mt-4">
                <Link to="/produtos">
                  <button className="bg-primary text-white px-20 py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors">
                    Ver Oferta
                  </button>
                </Link>
              </div>
            </div>
      </div>
    </section>
  );
};