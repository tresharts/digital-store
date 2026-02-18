import tenis from '../../assets/tenis.png';
export const Apresentacao = () => {
    return (
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 px-16 bg-light-gray    '>
            <div className=' flex flex-col justify-center items-start mt-10 md:mt-0 md:px-20 order-2 md:order-1  '>
                <div className='text-primary-dark md:text-yellow-500 font-bold text-center '>
                    Melhores ofertas personalizadas
                </div>
                <div className='my-5 '>
                    <h1 className='text-4xl text-center md:text-start md:text-6xl font-sans font-bold md:break-words  '>
                        Queima de stoque Nike
                        </h1>
                <div className='text-dark-gray-2 my-2 py-2 text-center md:text-start'>
                    Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur
                </div>
                </div>
                <div className='w-full mb-6 md:mb-0'>
                    <button className=' bg-primary-dark p-2 w-full md:w-1/2 rounded text-white'>Ver Ofertas</button>
                </div>
            </div>
            <div className='overflow-hidden md:block order-1 md:order-2'>
                <img src={tenis} alt="" className='-rotate-[20deg]' />
            </div>
          </div>
        </>
    );
}
 
export default Apresentacao;