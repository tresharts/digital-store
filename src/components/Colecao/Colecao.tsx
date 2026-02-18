import imageshirt from '../../assets/imageshirt.png'
import imageshoe from '../../assets/imageshoe.png'
import imageheadphone from '../../assets/imageheadphone.png'
const Colecao = () => {
    const itens = [
        {img: imageshirt, desc: 'Novo drop Suprime', off: '30% OFF'},
        {img: imageshoe, desc: 'Coleção Adidas', off: '30% OFF'},
        {img: imageheadphone, desc: 'Novo Beats Bass', off: '30% OFF'}
    ]
    return (
    <>
      <section className="px-10 py-10 shadow-md">
        <h1 className='font-bold text-dark-gray-2 font-sans'>Coleção em destaque</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {itens.map((item, index)=>(
                <div key={index} className='relative group overflow-hidden rounded-lg h-[250px] bg-blue-100 '>
                    <img 
                        src={item.img} 
                        alt='' 
                        className='absolute md:top-0 left-10 md:left-24 inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110'
                        />
                    <div className="relative z-10 p-6 mt-8 h-full flex flex-col items-start justify-start">
                            <span className="bg-[#E7FF8D] text-dark-gray-2 font-bold px-3 py-1 rounded-full text-sm mb-3">
                                {item.off}
                            </span>
                            <h3 className="text-2xl font-extrabold text-dark-gray-2 max-w-[150px] leading-tight">
                                {item.desc}
                            </h3>
                            <button className="mt-4 bg-light-gray text-primary font-bold py-2 px-6 rounded-lg hover:bg-primary hover:text-white transition-all">
                                Comprar
                            </button>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </>
    );
}
 
export default Colecao;