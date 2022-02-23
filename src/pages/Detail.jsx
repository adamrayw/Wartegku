import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getTotal } from '../redux/features/amountCart/cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Detail2() {
    const [itemAmount, setItemAmount] = useState(1)
    const location = useLocation();
    const data = { ...location.state.menu, qty: itemAmount ?? 1 };

    const value = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotal());
    }, [value, dispatch]);

    return (
        <section className='mt-8 space-y-8 md:px-0 px-4'>
            <div className='flex md:flex-row flex-col md:justify-between md:items-center items-start md:space-x-0 space-y-6'>
                <div className='flex md:flex-row flex-col md:items-center md:space-x-4 md:space-y-0 space-y-4'>
                    <div className='md:w-auto md:mx-0'>
                        <img src={data.image} className="md:w-64 w-40" alt="makanan" />
                    </div>
                    <div className='text-left md:space-y-4 space-y-2'>
                        <h1 className='text-black md:text-3xl text-xl font-bold'>{data.name}</h1>
                        <div>
                            <p className='text-gray-500 md:text-lg text-md font-bold'>Rp{new Intl.NumberFormat(['ban', 'id']).format(data.price)}</p>
                            <p className="text-sm font-semibold text-gray-400 dark:text-white line-through">Rp{new Intl.NumberFormat(['ban', 'id']).format(data.ori_price)}</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <div className='text-yellow-300'>
                                <i className=" fa-solid fa-star" ></i>
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
                                dispatch(addToCart(data))
                                setItemAmount(1)
                                toast.success('Anda menambahkan ' + itemAmount + ' ' + data.name + ' ke keranjang!', {
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
                <p className='text-gray-500 md:text-sm text-xs tracking-wider text-justify'>{data.description}</p>

            </div>
            <hr className='mt-6' />
            {/* <div>
                <h1 className='text-black md:text-2xl text-xl font-bold text-left'>Mungkin kamu juga suka</h1>
            </div> */}
        </section >
    )
}
