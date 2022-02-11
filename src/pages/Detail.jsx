import React from 'react'
import Gadogado from '../assets/menu/gadogado.png';

export default function Detail() {

    const [count, setCount] = React.useState(0);

    return (
        <section className='mt-8 space-y-8 md:px-0 px-4'>
            <div className='flex md:flex-row flex-col md:justify-between md:items-center items-start md:space-x-0 space-y-6'>
                <div className='flex md:flex-row flex-col md:items-center md:space-x-4 md:space-y-0 space-y-4'>
                    <div className='md:w-auto md:mx-0'>
                        <img src={Gadogado} className="md:w-64 w-40" alt="makanan" />
                    </div>
                    <div className='text-left md:space-y-4 space-y-2'>
                        <h1 className='text-black md:text-3xl text-xl font-bold'>Gado - gado</h1>
                        <p className='text-gray-500 md:text-base text-sm font-semibold'>Rp30.000</p>
                        <div className='flex items-center space-x-2'>
                            <div className='text-yellow-300'>
                                <i class=" fa-solid fa-star" ></i>
                            </div>
                            <p className='font-medium md:text-base text-sm text-gray-500 '>5</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-auto w-full mx-auto'>
                    <div>
                        <div>
                            <p className='mb-2 text-sm font-medium'>Jumlah</p>
                            <div className='flex items-center justify-between mb-4'>
                                <button className='border rounded-full px-4 py-0' onClick={() => {
                                    setCount(count - 1)
                                }}>-</button>
                                <p className='text-sm text-gray-500'>{count}</p>
                                <button className='border rounded-full px-4 py-0' onClick={() => {
                                    setCount(count + 1)
                                }}>+</button>
                            </div>
                        </div>
                        <a href="/" class="md:w-40 w-full inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i class="fa-solid fa-cart-arrow-down"></i></a>
                    </div>
                </div>
            </div>
            <div className='text-left space-y-2'>
                <h1 className='text-black md:text-2xl text-xl font-bold text-left'>Description</h1>
                <p className='text-gray-500 md:text-sm text-xs tracking-wider text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in vel vero doloribus exercitationem pariatur officiis libero quia voluptatibus reiciendis, enim fuga, delectus cupiditate assumenda maiores deleniti quod dolorem facere, dignissimos iure? Aspernatur, explicabo tempore laborum vero sed expedita dolorem.</p>

            </div>
            <hr className='mt-6' />
            <div>
                <h1 className='text-black md:text-2xl text-xl font-bold text-left'>Mungkin kamu juga suka</h1>
            </div>
        </section>
    )
}
