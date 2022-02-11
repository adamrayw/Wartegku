import React from 'react'
import gadogado from '../assets/menu/gadogado.png';
import gopay from '../assets/payments/gopay.png';
import ovo from '../assets/payments/ovo.png';
import dana from '../assets/payments/dana.png';
import bca from '../assets/payments/bca.png';

export default function Cart() {
    const [count, setCount] = React.useState(0);
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
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-left">
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <img src={gadogado} alt="item" width="60" />
                                        </td>
                                        <td className="py-4 px-6 text-sm text-black font-semibold whitespace-nowrap dark:text-gray-400">
                                            Gado -gado
                                        </td>
                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            <div className='flex items-center space-x-2'>
                                                <button className='border rounded-full text-sm px-4 py-0 active:bg-gray-100 transition-all' onClick={() => {
                                                    setCount(count - 1)
                                                }}>-</button>
                                                <p className='text-sm text-gray-500 '>{count}</p>
                                                <button className='border rounded-full px-4 py-0 active:bg-gray-100 transition-all' onClick={() => {
                                                    setCount(count + 1)
                                                }}>+</button>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-sm text-black font-semibold whitespace-nowrap dark:text-gray-400">
                                            Rp60.000
                                        </td>
                                    </tr>
                                    <tr className="text-left">
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <img src={gadogado} alt="item" width="60" />
                                        </td>
                                        <td className="py-4 px-6 text-sm text-black font-semibold whitespace-nowrap dark:text-gray-400">
                                            Gado -gado
                                        </td>
                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            <div className='flex items-center space-x-2'>
                                                <button className='border rounded-full text-sm px-4 py-0 active:bg-gray-100 transition-all' onClick={() => {
                                                    setCount(count - 1)
                                                }}>-</button>
                                                <p className='text-sm text-gray-500 '>{count}</p>
                                                <button className='border rounded-full px-4 py-0 active:bg-gray-100 transition-all' onClick={() => {
                                                    setCount(count + 1)
                                                }}>+</button>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-sm text-black font-semibold whitespace-nowrap dark:text-gray-400">
                                            Rp60.000
                                        </td>
                                    </tr>
                                    <tr className="text-left">
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <img src={gadogado} alt="item" width="60" />
                                        </td>
                                        <td className="py-4 px-6 text-sm text-black font-semibold whitespace-nowrap dark:text-gray-400">
                                            Gado -gado
                                        </td>
                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            <div className='flex items-center space-x-2'>
                                                <button className='border rounded-full text-sm px-4 py-0 active:bg-gray-100 transition-all' onClick={() => {
                                                    setCount(count - 1)
                                                }}>-</button>
                                                <p className='text-sm text-gray-500 '>{count}</p>
                                                <button className='border rounded-full px-4 py-0 active:bg-gray-100 transition-all' onClick={() => {
                                                    setCount(count + 1)
                                                }}>+</button>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-sm text-black font-semibold whitespace-nowrap dark:text-gray-400">
                                            Rp60.000
                                        </td>
                                    </tr>
                                    <tr className="text-left">
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <img src={gadogado} alt="item" width="60" />
                                        </td>
                                        <td className="py-4 px-6 text-sm text-black font-semibold whitespace-nowrap dark:text-gray-400">
                                            Gado -gado
                                        </td>
                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            <div className='flex items-center space-x-2'>
                                                <button className='border rounded-full text-sm px-4 py-0 active:bg-gray-100 transition-all' onClick={() => {
                                                    setCount(count - 1)
                                                }}>-</button>
                                                <p className='text-sm text-gray-500 '>{count}</p>
                                                <button className='border rounded-full px-4 py-0 active:bg-gray-100 transition-all' onClick={() => {
                                                    setCount(count + 1)
                                                }}>+</button>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-sm text-black font-semibold whitespace-nowrap dark:text-gray-400">
                                            Rp60.000
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-left'>
                <div>
                    <label htmlFor="Catatan" className='text-sm text-black font-semibold'>Catatan (Optional)</label>
                </div>
                <div>
                    <textarea name="catatan" className='md:w-auto w-full rounded-lg text-sm border border-gray-400 text-gray-600' id="" cols="40" rows="2"></textarea>
                </div>
            </div>
            <div>
                <hr />
            </div>
            <div className='flex items-center text-left'>
                <div className='space-y-6'>
                    <h1 className='text-black md:text-2xl text-xl font-bold text-left'>TOTAL :</h1>
                    <div className='space-y-4'>
                        <p className='text-xs text-gray-400'>Kami menerima pembayaran via :</p>
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
                </div>

            </div>
        </section>
    )
}
