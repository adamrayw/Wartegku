import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getTotal } from '../redux/features/amountCart/cart';


export default function MyOrder() {
    const value = useSelector((state) => state.order)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotal());
    }, [value, dispatch]);
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
                                            ORDER ID
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase">
                                            ITEM
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase">
                                            JUMLAH
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase">
                                            TOTAL
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase">
                                            STATUS
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase">

                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {value.map((item, index) => {
                                        return (
                                            <tr className="text-left" key={index}>
                                                <td className="py-4 px-6 text-sm text-black font-semibold whitespace-nowrap dark:text-gray-400">
                                                    ID-{item.orderId}
                                                </td>
                                                <td className="py-4 px-6 text-sm text-black font-semibold whitespace-nowrap dark:text-gray-400">
                                                    {item.value.value.map((data, index) => {
                                                        return (
                                                            <p key={index}>{data.qty}x{data.name} </p>
                                                        )
                                                    })}
                                                </td>
                                                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    <p className='text-sm text-gray-500 '>{item.value.cartTotalQuantity}</p>
                                                </td>
                                                <td className="py-4 px-6 text-sm text-black font-semibold whitespace-nowrap dark:text-gray-400">
                                                    Rp{new Intl.NumberFormat(['ban', 'id']).format(item.value.cartTotalPrice)}
                                                </td>
                                                <td className="py-4 px-6 text-sm text-yellow-300 font-semibold whitespace-nowrap dark:text-gray-400">
                                                    Belum Bayar
                                                </td>
                                                {/* <td className='text-red-500'>
                                            <button onClick={() => dispatch(removeFromCart(item))}>
                                                <i className="fa-solid fa-xmark "></i>
                                            </button>
                                        </td> */}
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                            {/* {(value.value.length === 0 && (<p className='my-4 text-gray-400'>Anda belum pesan apapun</p>))} */}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr />
            </div>

        </section>
    )
}
