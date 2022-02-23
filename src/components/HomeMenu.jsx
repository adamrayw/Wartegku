import React from 'react'
import { Link } from 'react-router-dom';
import gadogado from '../assets/menu/gadogado.png';
import kentanggoreng from '../assets/menu/kentanggoreng.png';
import tahuikan from '../assets/menu/tahuikan.png';
import kopiespresso from '../assets/menu/kopiespresso.png';
import Greeting from './Greeting';

export default function HomeMenu() {

    const menu = [
        {
            id: 1,
            name: 'Gado Gado',
            image: gadogado,
            price: '10000',
            ori_price: '15000',
            description: 'Gado - gado adalah makanan khas Jakarta berisi sayur-sayuran yang direbus, irisan telur dan tahu, serta ditaburi bawang goreng dan kerupuk. Sayur-sayuran ditambahkan dengan bumbu kacang atau saus dari kacang tanah yang telah dihaluskan yang kemudian diaduk merata.',
            qty: 0,
        },
        {
            id: 2,
            name: 'Kentang Goreng',
            image: kentanggoreng,
            price: '20000',
            ori_price: '25000',
            description: 'Kentang goreng adalah hidangan yang dibuat dari potongan-potongan kentang yang digoreng dalam minyak goreng panas. Di dalam menu rumah-rumah makan, kentang goreng yang dipotong panjang-panjang dan digoreng dalam keadaan terendam di dalam minyak goreng panas disebut French fries.',
            qty: 0
        },
        {
            id: 3,
            name: 'Tahu Ikan',
            image: tahuikan,
            price: '8000',
            ori_price: '10000',
            description: 'Tahu ikan adalah makanan khas Indonesia yang terbuat dari tahu dan ikan. Tahu ikan biasanya dibuat dengan menggunakan tahu yang sudah dihaluskan dan ditambahkan dengan ikan yang sudah dihaluskan. Tahu ikan biasanya dibuat dengan menggunakan tahu yang sudah dihaluskan dan ditambahkan dengan ikan yang sudah dihaluskan.',
            qty: 0
        },
        {
            id: 4,
            name: 'Kopi Espresso',
            image: kopiespresso,
            price: '45000',
            ori_price: '50000',
            description: 'Kopi espresso adalah kopi yang dibuat dengan menggunakan espresso machine. Kopi espresso biasanya dibuat dengan menggunakan kopi yang sudah dihaluskan dan ditambahkan dengan santan kental.',
            qty: 0
        }
    ];

    return (
        <section className='my-4 md:px-0 px-4'>
            <div>
                <Greeting />
            </div>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
                {menu.map((item, index) => {
                    return (
                        <Link to="/detail" state={{ menu: menu[index] }} key={index}>
                            <div className="text-left bg-white rounded-lg shadow hover:bg-gray-100 transition-all dark:bg-gray-800 dark:border-gray-700">
                                <div className='h-40'>
                                    <img className="p-8 w-40 rounded-t-lg mx-auto" src={item.image} alt="pho" />
                                </div>
                                <div className="px-5 pb-5">
                                    <h3 className="text-base font-bold tracking-tight text-gray-900 dark:text-white truncate">{item.name}</h3>
                                    <div className="flex items-center mt-2.5 mb-5">
                                        <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-1">5.0</span>
                                    </div>
                                    <div className="flex md:flex-row flex-col md:space-x-2 md:items-center items-start">
                                        <span className="text-lg font-bold text-gray-900 dark:text-white">Rp{new Intl.NumberFormat(['ban', 'id']).format(item.price)}</span>
                                        <span className="text-sm font-bold text-gray-400 dark:text-white line-through">Rp{new Intl.NumberFormat(['ban', 'id']).format(item.ori_price)}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
                {/* <Link to="/detail" state={{ menu: menu[0] }}>
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
                <Link to="/detail2">
                    <div className="text-left bg-white rounded-lg shadow hover:bg-gray-100 transition-all dark:bg-gray-800 dark:border-gray-700">
                        <div className='h-40'>
                            <img className="p-8 w-40 rounded-t-lg mx-auto" src={tahuikan} alt="pho" />
                        </div>
                        <div className="px-5 pb-5">
                            <h3 className="text-base font-bold tracking-tight text-gray-900 dark:text-white truncate">Tahu Ikan</h3>
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
                <Link to="/detail2">
                    <div className="text-left bg-white rounded-lg shadow hover:bg-gray-100 transition-all dark:bg-gray-800 dark:border-gray-700">
                        <div className='h-40'>
                            <img className="p-8 w-40 rounded-t-lg mx-auto" src={kopiespresso} alt="pho" />
                        </div>
                        <div className="px-5 pb-5">
                            <h3 className="text-base font-bold tracking-tight text-gray-900 dark:text-white truncate">Kopi Espresso Cappucino</h3>
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
                </Link> */}

            </div>

        </section >
    )
}
