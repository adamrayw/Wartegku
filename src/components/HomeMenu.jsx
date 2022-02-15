import React from 'react'
import { Link } from 'react-router-dom';
import gadogado from '../assets/menu/gadogado.png';
import kentanggoreng from '../assets/menu/kentanggoreng.png';
import Greeting from './Greeting';

export default function HomeMenu() {
    return (
        <section className='my-4 md:px-0 px-4'>
            <div>
                <Greeting />
            </div>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
                <Link to="/detail">
                    <div className="text-left bg-white rounded-lg shadow hover:bg-gray-100 transition-all dark:bg-gray-800 dark:border-gray-700">
                        <div className='h-40'>
                            <img className="p-8 w-40 rounded-t-lg mx-auto" src={gadogado} alt="pho" />
                        </div>
                        <div className="px-5 pb-5">
                            <h3 className="text-base font-bold tracking-tight text-gray-900 dark:text-white truncate">Gado - gado</h3>
                            <div className="flex items-center mt-2.5 mb-5">
                                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-1">5.0</span>
                            </div>
                            <div className="flex md:flex-row flex-col md:space-x-2 md:items-center items-start">
                                <span className="text-lg font-bold text-gray-900 dark:text-white">Rp30.000</span>
                                <span className="text-sm font-bold text-gray-400 dark:text-white line-through">Rp48.000</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/detail2">
                    <div className="text-left bg-white rounded-lg shadow hover:bg-gray-100 transition-all dark:bg-gray-800 dark:border-gray-700">
                        <div className='h-40'>
                            <img className="p-8 w-40 rounded-t-lg mx-auto" src={kentanggoreng} alt="pho" />
                        </div>
                        <div className="px-5 pb-5">
                            <h3 className="text-base font-bold tracking-tight text-gray-900 dark:text-white truncate">Kentang Goreng</h3>
                            <div className="flex items-center mt-2.5 mb-5">
                                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-1">5.0</span>
                            </div>
                            <div className="flex md:flex-row flex-col md:space-x-2 md:items-center items-start">
                                <span className="text-lg font-bold text-gray-900 dark:text-white">Rp20.000</span>
                                <span className="text-sm font-bold text-gray-400 dark:text-white line-through">Rp34.000</span>
                            </div>
                        </div>
                    </div>
                </Link>

            </div>

        </section >
    )
}
