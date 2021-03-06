
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Search from './Search';

export default function Navbar() {


    const user_name = localStorage.getItem('user_name');

    const token = localStorage.getItem('token')

    const { cartTotalQuantity } = useSelector((state) => state.cart)

    const handleLogOut = (e) => {
        e.preventDefault();

        try {
            localStorage.removeItem('token')
            localStorage.removeItem('user_name')
            localStorage.removeItem('isAuth')
            window.location.href = '/'

        } catch (error) {
            console.log(error.response);
        }
    }

    return (
        <nav className="bg-white border-gray-200 md:shadow-transparent shadow-sm md:border-b md:px-0 px-4 py-4 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex ">
                    <span className="self-center md:text-2xl text-xl font-bold whitespace-nowrap text-blue-500">Wartegku</span>
                </Link>
                <div className="flex items-center md:order-2 md:hidden">
                    <Link to="/cart" className='relative'>
                        <div className='absolute z-10 h-4 w-4 rounded-full bg-blue-700 text-white text-xs right-0 top-0 translate-x-2/4 -translate-y-1/2 mb-10'>{cartTotalQuantity}</div>
                        <div className='text-blue-500'>
                            <i className="fa-solid fa-cart-shopping fa-lg"></i>
                        </div>
                    </Link>
                    <button data-collapse-toggle="mobile-menu-3" type="button" className="inline-flex items-center p-2 ml-6 text-sm text-blue-500 rounded-lg md:hidden hover:bg-gray-100 active:bg-gray-200 active:outline-none active:ring-2 active:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-3" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full md:p-0 py-4 md:flex md:w-auto md:order-1" id="mobile-menu-3">
                    <Search />
                    <div className='flex md:justify-center justify-end items-center space-x-8 md:pl-8 md:mt-0 mt-6'>
                        <Link to="/cart" className='relative md:block hidden'>
                            <div className='absolute z-10 h-5 w-5 flex justify-center items-center rounded-full border bg-blue-700 text-white text-xs right-0 top-0 translate-x-2/4 -translate-y-1/2 mb-10'>{cartTotalQuantity}</div>
                            <div className='text-blue-500'>
                                <i className="fa-solid fa-cart-shopping fa-xl"></i>
                            </div>
                        </Link>
                        {/* IF NOT LOGGED IN */}

                        {token ? (
                            <>
                                <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="text-blue-500 inline-flex items-center" type="button">
                                    <i className="fa-solid fa-circle-user fa-xl"></i>
                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>

                                <div id="dropdownDivider" className='hidden text-left z-10 w-44 text-base list-none bg-white rounded divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'>
                                    <div className="py-3 px-4 text-gray-900 dark:text-white border-b">
                                        <span className="block text-sm">Hi, {user_name}</span>
                                    </div>
                                    <ul className="py-1" aria-labelledby="dropdownInformationButton">
                                        <li>

                                            <Link to='/my-order' href="/" className="flex items-center py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" data-collapse-toggle="mobile-menu-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                </svg>
                                                Pesanan Saya
                                            </Link>
                                        </li>

                                    </ul>
                                    <div className="py-1">
                                        <button onClick={handleLogOut} className="block w-full text-left py-2 px-4 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</button>
                                    </div>
                                </div>


                            </>
                        ) : (
                            <div>
                                <Link to="/login" data-collapse-toggle="mobile-menu-3">Login</Link>
                            </div>

                        )}
                        {/* IF LOGGED IN 
                        <div>
                            <button id="dropdownButton" data-dropdown-toggle="dropdown" className=" inline-flex items-center text-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"> <i className="fa-solid fa-circle-user fa-lg"></i><svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

                            <div id="dropdown" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                <ul className="py-1 text-left" aria-labelledby="dropdownButton">
                                    <li>
                                        <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        */}
                    </div>
                </div>
            </div>
        </nav >

    )
}
