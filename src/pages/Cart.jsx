import React, { useEffect, useState } from 'react'
import gopay from '../assets/payments/gopay.png';
import ovo from '../assets/payments/ovo.png';
import dana from '../assets/payments/dana.png';
import bca from '../assets/payments/bca.png';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addAmount, decreaseAmount, getTotal, emptyCart } from '../redux/features/amountCart/cart';
import successTick from '../assets/success.svg';
import notLogin from '../assets/notlogin.png';
import { Link } from 'react-router-dom';
import { addToOrder } from '../redux/features/myOrder/order';


export default function Cart() {
    const [showModal, setShowModal] = useState(false);
    const value = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotal());
    }, [value, dispatch]);

    const isAuth = localStorage.getItem('isAuth')

    return (
        <section className='mt-8 space-y-4 md:px-0 px-4'>


            <div>
                <h1 className='text-black md:text-2xl text-xl font-bold text-left'>Keranjang Saya</h1>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden sm:rounded-lg">
                            <table className="min-w-full">
                                <thead className="bg-blue-500">

                                    <tr>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase">
                                            ITEM
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase">
                                            NAMA
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase">
                                            JUMLAH
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase">
                                            TOTAL
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase">

                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {value.value.map((item, index) => {
                                        return (
                                            <tr className="text-left" key={index}>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <img src={item.img} alt="item" width="60" />
                                                </td>
                                                <td className="py-4 px-6 text-sm text-black font-semibold whitespace-nowrap dark:text-gray-400">
                                                    {item.nama}
                                                </td>
                                                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    <div className='flex items-center space-x-2'>
                                                        <button className='border rounded-full text-sm px-4 py-0 active:bg-gray-100 transition-all' onClick={() => {
                                                            dispatch(decreaseAmount(item))
                                                        }}>-</button>
                                                        <p className='text-sm text-gray-500 '>{item.qty}</p>
                                                        <button className='border rounded-full px-4 py-0 active:bg-gray-100 transition-all' onClick={() => {
                                                            dispatch(addAmount(item))
                                                        }}>+</button>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 text-sm text-black font-semibold whitespace-nowrap dark:text-gray-400">Rp
                                                    {new Intl.NumberFormat(['ban', 'id']).format(item.harga * item.qty)}
                                                </td>
                                                <td className='text-red-500'>
                                                    <button onClick={() => dispatch(removeFromCart(item))}>
                                                        <i className="fa-solid fa-xmark "></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            {(value.value.length === 0 && (<p className='my-4 text-gray-400'>Anda belum pesan apapun</p>))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-left'>
                {(value.value.length > 0 && (
                    <>
                        <div>
                            <label htmlFor="Catatan" className='md:text-sm text-xs text-black font-semibold'>Catatan (Optional)</label>
                        </div>
                        <div>
                            <textarea name="catatan" className='md:w-auto w-full rounded-lg md:text-sm text-xs border border-gray-200 text-gray-600' id="" cols="40" rows="2"></textarea>
                        </div>
                    </>
                ))}
            </div>
            <div>
                <hr />
            </div>
            <div className='text-left'>
                <div className='space-y-6'>
                    <div className='flex justify-between md:items-center items-start'>
                        <div>
                            <h1 className='text-black md:text-2xl text-lg font-bold text-left'>TOTAL :</h1>
                        </div>
                        {(value.value.length > 0 && (
                            <>
                                <div className='space-y-2'>
                                    <h1 className='text-black md:text-2xl text-lg font-bold text-left'>Rp{new Intl.NumberFormat(['ban', 'id']).format(value.cartTotalPrice)}</h1>
                                    <p className='text-xs text-gray-400'>* Belum termasuk ongkir</p>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className='flex md:flex-row flex-col-reverse justify-between items-center pb-4'>
                        <div className='space-y-4'>
                            <p className='text-xs text-gray-400 md:text-left text-center'>Kami menerima pembayaran via :</p>
                            <div className='flex items-center space-x-2'>
                                <div className='w-16 h-14 border rounded-xl flex justify-center items-center'>
                                    <img src={ovo} alt="bca" width="22" />
                                </div>
                                <div className='w-16 h-14 border rounded-xl flex justify-center items-center'>
                                    <img src={gopay} alt="bni" width="40" />
                                </div>
                                <div className='w-16 h-14 border rounded-xl flex justify-center items-center'>
                                    <img src={dana} alt="bni" width="40" />
                                </div>
                                <div className='w-16 h-14 border rounded-xl flex justify-center items-center'>
                                    <img src={bca} alt="bni" width="40" />
                                </div>
                            </div>
                        </div>
                        <div>
                            {(value.value.length > 0 && (
                                <>

                                    <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="default-modal" onClick={(() => {
                                        setShowModal(true)
                                        dispatch(addToOrder(value))
                                    })}>
                                        Pesan Sekarang
                                    </button>

                                    {showModal ? (
                                        <>
                                            {isAuth ? (
                                                <>
                                                    <div
                                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                        onClick={(() => {
                                                            setShowModal(false)
                                                            dispatch(emptyCart());
                                                        })}
                                                    >
                                                        <div className="relative my-6 mx-auto w-80">
                                                            {/*content*/}
                                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                                {/*header*/}
                                                                <div className="flex flex-col items-center justify-center px-5 pt-8 space-y-4">
                                                                    <img className='w-24' src={successTick} alt="success" />
                                                                    <h2 className='font-semibold text-lg '>Pesanan Diproses</h2>
                                                                </div>
                                                                {/*body*/}
                                                                <div className="relative px-6 flex-auto">
                                                                    <p className="my-4 text-sm text-gray-600 text-justify leading-relaxed">
                                                                        Terima kasih telah memesan di <span className='font-bold'>Wartegku</span>,
                                                                        Silahkan lakukan pembayaran di menu <span className='font-bold'>Pesanan Saya.</span>
                                                                    </p>
                                                                </div>
                                                                {/*footer*/}
                                                                <div className="flex items-center justify-center py-6">
                                                                    <Link
                                                                        to='/my-order'
                                                                        className="text-white rounded bg-blue-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                        onClick={(() => {
                                                                            dispatch(emptyCart());
                                                                        })}
                                                                    >
                                                                        Pesanan Saya
                                                                    </Link>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                                </>

                                            ) : (
                                                <>
                                                    <div
                                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                        onClick={(() => {
                                                            setShowModal(false)
                                                        })}
                                                    >
                                                        <div className="relative my-6 mx-auto w-80">
                                                            {/*content*/}
                                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                                {/*header*/}
                                                                <div className="flex flex-col items-center justify-center px-5 pt-8 space-y-4">
                                                                    <img className='w-24' src={notLogin} alt="success" />
                                                                    <h2 className='font-semibold text-lg '>Ooppss!</h2>
                                                                </div>
                                                                {/*body*/}
                                                                <div className="relative px-6 flex-auto">
                                                                    <p className="my-4 text-sm text-gray-600 text-center leading-relaxed">
                                                                        Untuk melakukan pemesanan, Anda harus login terlebih dahulu.
                                                                    </p>
                                                                </div>
                                                                {/*footer*/}
                                                                <div className="flex items-center justify-center py-6">
                                                                    <Link
                                                                        to='/login'
                                                                        className="text-white rounded bg-blue-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                        type="button"
                                                                    >
                                                                        Login
                                                                    </Link>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                                </>
                                            )}

                                        </>
                                    ) : null}
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
