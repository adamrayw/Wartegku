import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Kentanggoreng from '../assets/menu/kentanggoreng.png';
import { useDispatch, useSelector } from 'react-redux';
// import { add, remove } from '../redux/features/amountitem/amountItem';
import { addToCart, getTotal } from '../redux/features/amountCart/cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Detail2() {
    const [itemAmount, setItemAmount] = useState(1)


    const value = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTotal());
    }, [value, dispatch]);

    // console.log(value);

    const data2 = {
        id: 2,
        img: Kentanggoreng,
        nama: 'Kentang Goreng',
        harga: 20000,
        rating: 5,
        qty: itemAmount ?? 1,
    }

    return (
        <section className='mt-8 space-y-8 md:px-0 px-4'>
            <div className='flex md:flex-row flex-col md:justify-between md:items-center items-start md:space-x-0 space-y-6'>
                <div className='flex md:flex-row flex-col md:items-center md:space-x-4 md:space-y-0 space-y-4'>
                    <div className='md:w-auto md:mx-0'>
                        <img src={data2.img} className="md:w-64 w-40" alt="makanan" />
                    </div>
                    <div className='text-left md:space-y-4 space-y-2'>
                        <h1 className='text-black md:text-3xl text-xl font-bold'>{data2.nama}</h1>
                        <p className='text-gray-500 md:text-base text-sm font-semibold'>Rp{data2.harga}</p>
                        <div className='flex items-center space-x-2'>
                            <div className='text-yellow-300'>
                                <i className=" fa-solid fa-star" ></i>
                            </div>
                            <p className='font-medium md:text-base text-sm text-gray-500 '>{data2.rating}</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-auto w-full mx-auto'>
                    <div>
                        <div>
                            <p className='mb-2 text-sm font-medium'>Jumlah</p>
                            <div className='flex items-center justify-between mb-4'>
                                <button className='border rounded-full px-4 py-0 active:bg-gray-100 transition-all' onClick={() => {

                                    if (itemAmount === 1) {
                                        setItemAmount(1)
                                    } else {
                                        setItemAmount(itemAmount - 1)
                                    }

                                }}>-</button>
                                <p className='text-sm text-gray-500 '>{itemAmount}</p>
                                <button className='border rounded-full px-4 py-0 active:bg-gray-100 transition-all' onClick={(() => {
                                    setItemAmount(itemAmount + 1)
                                })}>+</button>
                            </div>
                        </div>

                        <ToastContainer className="text-left " />
                        <button className="md:w-40 w-full inline-block text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => {
                                dispatch(addToCart(data2))
                                setItemAmount(1)
                                toast.success('Anda menambahkan ' + itemAmount + ' ' + data2.nama + ' ke keranjang!', {
                                    position: "bottom-right",
                                    autoClose: 1800,
                                    hideProgressBar: true,
                                    closeOnClick: true,
                                    pauseOnHover: false,
                                    draggable: false,
                                });
                            }}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className='text-left space-y-2'>
                <h1 className='text-black md:text-2xl text-xl font-bold text-left'>Tentang makanan ini</h1>
                <p className='text-gray-500 md:text-sm text-xs tracking-wider text-justify'>Gado-gado adalah makanan khas Jakarta berisi sayur-sayuran yang direbus, irisan telur dan tahu, serta ditaburi bawang goreng dan kerupuk. Sayur-sayuran ditambahkan dengan bumbu kacang atau saus dari kacang tanah yang telah dihaluskan yang kemudian diaduk merata. - Wikipedia</p>

            </div>
            <hr className='mt-6' />
            <div>
                <h1 className='text-black md:text-2xl text-xl font-bold text-left'>Mungkin kamu juga suka</h1>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
                <div className="text-left bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Link to="/detail">
                        <img className="p-8 w-48 rounded-t-lg mx-auto" src={Kentanggoreng} alt="pho" />
                    </Link>
                    <div className="px-5 pb-5">
                        <Link to="/detail">
                            <h3 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">Gado - gado</h3>
                        </Link>
                        <div className="flex items-center mt-2.5 mb-5">
                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="md:text-xl text-lg font-bold text-gray-900 dark:text-white">$599</span>
                            <a href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i className="fa-solid fa-cart-arrow-down"></i></a>
                        </div>
                    </div>
                </div>
                <div className="text-left bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Link to="/detail">
                        <img className="p-8 w-48 rounded-t-lg mx-auto" src={Kentanggoreng} alt="pho" />
                    </Link>
                    <div className="px-5 pb-5">
                        <Link to="/detail">
                            <h3 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">Gado - gado</h3>
                        </Link>
                        <div className="flex items-center mt-2.5 mb-5">
                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="md:text-xl text-lg font-bold text-gray-900 dark:text-white">$599</span>
                            <a href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i className="fa-solid fa-cart-arrow-down"></i></a>
                        </div>
                    </div>
                </div>
                <div className="text-left bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Link to="/detail">
                        <img className="p-8 w-48 rounded-t-lg mx-auto" src={Kentanggoreng} alt="pho" />
                    </Link>
                    <div className="px-5 pb-5">
                        <Link to="/detail">
                            <h3 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">Gado - gado</h3>
                        </Link>
                        <div className="flex items-center mt-2.5 mb-5">
                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="md:text-xl text-lg font-bold text-gray-900 dark:text-white">$599</span>
                            <a href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i className="fa-solid fa-cart-arrow-down"></i></a>
                        </div>
                    </div>
                </div>
                <div className="text-left bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Link to="/detail">
                        <img className="p-8 w-48 rounded-t-lg mx-auto" src={Kentanggoreng} alt="pho" />
                    </Link>
                    <div className="px-5 pb-5">
                        <Link to="/detail">
                            <h3 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">Gado - gado</h3>
                        </Link>
                        <div className="flex items-center mt-2.5 mb-5">
                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="md:text-xl text-lg font-bold text-gray-900 dark:text-white">$599</span>
                            <a href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i className="fa-solid fa-cart-arrow-down"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
