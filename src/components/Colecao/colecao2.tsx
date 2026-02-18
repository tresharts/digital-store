import { Link } from 'react-router-dom';
import { ShoeIcon } from '@/SVGs/shoe';
import { CapIcon } from '@/SVGs/Cap';
import { Headphone } from '@/SVGs/Headphone';
import { Pants } from '@/SVGs/Pants';
import { Tshirt } from '@/SVGs/tshirt';

const Colexao2 = () => {
    return (
        <section className="p-10 md:px-10 md:py-10 overflow-hidden" >
            <div className="grid grid-cols-1 mt-5 ">
                    <h1 className="text-start md:text-center  text-dark-gray-2 font-bold font-sans ">Coleção em destaque</h1>
                    <div className='
                                    flex 
                                    justify-start 
                                    md:justify-center 
                                    items-center 
                                    gap-5
                                    
                                    w-full
                                    max-w-full
                                    overflow-x-auto
                                    md:overflow-x-visible
                                    
                                    snap-x 
                                    snap-mandatory
                                    no-scrollbar 
                                    scroll-smooth

                                    py-10
                                    px-4
                                    md:px-0
                                    '
                    >
                        <div className='flex flex-col justify-center items-center shrink-0 snap-center '>
                            <Link to='/produtos'>
                                <Tshirt className='w-10 fill-rose-600 '/>
                            </Link>
                            <p className='mt-3 text-sm font-sans font-bold text-dark-gray-2'>Camisetas</p>

                            </div>
                        <div className='flex flex-col justify-center items-center shrink-0 snap-center'>
                            <Link to='/produtos'>
                                <Pants className='w-10 hover:fill-rose-500'/>
                            </Link>
                            <span className='mt-3 text-sm font-bold text-dark-gray-2'>Camisetas</span>
                        </div>
                        <div className='flex flex-col justify-center items-center shrink-0 snap-center'>
                            <Link to='/produtos'>
                                <CapIcon className='w-10 hover:fill-rose-500'/>
                            </Link>
                            <span className='mt-3 font-bold font-sans text-sm text-dark-gray-2'>Camisetas</span>
                        </div>
                        <div className='flex flex-col justify-center items-center shrink-0 snap-center'>
                            <Link to='/produtos'>
                                <Headphone className='w-10 hover:fill-rose-500'/>
                            </Link>
                            <span className='mt-3 font-bold text-sm text-dark-gray-2'>Camisetas</span>
                        </div>

                          <div className='flex flex-col justify-center items-center shrink-0 snap-center'>
                            <Link to='/produtos'>
                                <ShoeIcon className='w-10 hover:fill-rose-500'  />
                            </Link>
                            <span className='mt-3 font-bold text-sm text-dark-gray-2'>Camisetas</span>
                        </div>
                    </div>
            </div>
        </section>
    );
}
 
export default Colexao2;