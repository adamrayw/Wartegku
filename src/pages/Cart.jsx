import React, { useEffect } from 'react'
import gopay from '../assets/payments/gopay.png';
import ovo from '../assets/payments/ovo.png';
import dana from '../assets/payments/dana.png';
import bca from '../assets/payments/bca.png';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addAmount, decreaseAmount, getTotal } from '../redux/features/amountCart/cart';

export default function Cart() {
    const value = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotal());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <section className='mt-8 space-y-4 md:px-0 px-4'>
            <div>
                <h1 className='text-black md:text-2xl text-xl font-bold text-left'>Pesanan Saya</h1>
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
                            {(value.length === 0 && (<p className='my-4 text-gray-400'>Anda belum pesan apapun</p>))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-left'>
                {(value.length > 0 && (
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
                            {(value.length > 0 && (
                                <>
                                    <button className='md:w-40 w-56 my-6 mb-10 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all'>Bayar</button>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
