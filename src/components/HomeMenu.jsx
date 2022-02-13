import React from 'react'
import { Link } from 'react-router-dom';
import gadogado from '../assets/menu/gadogado.png';
import kentanggoreng from '../assets/menu/kentanggoreng.png';

export default function HomeMenu() {
    return (
        <section className='my-4 md:px-0 px-4'>
            <div>
                <h2 className='text-black font-bold md:text-2xl text-xl md:text-left text-center mb-4'>Mau makan apa?</h2>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
                <div className="text-left bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className='h-40'>
                        <Link to="/detail">
                            <img className="p-8 w-40 rounded-t-lg mx-auto" src={gadogado} alt="pho" />
                        </Link>
                    </div>
                    <div className="px-5 pb-5">
                        <Link to="/detail">
                            <h3 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">Gado - gado</h3>
                        </Link>
                        <div className="flex items-center mt-2.5 mb-5">
                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-1">5.0</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-gray-900 dark:text-white">$599</span>
                            <a href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i className="fa-solid fa-cart-arrow-down"></i></a>
                        </div>
                    </div>
                </div>
                <div className="text-left bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className='h-40'>
                        <Link to="/detail2">
                            <img className="p-8 w-40 rounded-t-lg mx-auto" src={kentanggoreng} alt="pho" />
                        </Link>
                    </div>
                    <div className="px-5 pb-5">
                        <Link to="/detail2">
                            <h3 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">Kentang Goreng</h3>
                        </Link>
                        <div className="flex items-center mt-2.5 mb-5">
                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-1">5.0</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-gray-900 dark:text-white">$599</span>
                            <a href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i className="fa-solid fa-cart-arrow-down"></i></a>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}
