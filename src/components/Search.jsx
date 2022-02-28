import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { menu } from '../data/menu';

export default function Search() {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState([]);
    const [keyword, setKeyword] = useState('');

    function handleIsOpen(e) {
        setKeyword(e.target.value);
        if (e.target.value.length > 0) {
            setIsOpen(true);
        } else if (e.target.value.length < 2) {
            setIsOpen(false);
            setSearch([]);
        }
        setSearch(menu.filter(menu => menu.name.toLowerCase().includes(e.target.value)));
    }

    return (
        <section className='relative'>
            <div className="relative md:mt-0 mt-4 md:block">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="email-adress-icon" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleIsOpen} value={keyword} placeholder="Cari sesuatu..." />
                {isOpen && (
                    <div className="flex absolute inset-y-0 right-0 items-center pl-3 cursor-pointer" onClick={() => {
                        setKeyword('')
                        setIsOpen(false)
                        setSearch([])
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                )}
            </div>

            {isOpen && (

                <div className='absolute w-full text-left z-10 mt-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'>

                    <ul className="py-1" aria-labelledby="dropdownInformationButton">
                        {search.map((item, index) => (
                            <li key={index}>
                                <Link to='/detail' state={{ menu: search[index] }} onClick={(() => setIsOpen(false))} className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white flex items-center space-x-4">
                                    <img src={item.image} className="w-10" alt="food-logo" />
                                    <p className='text-sm'>{item.name}</p>
                                </Link>
                            </li>
                        ))}
                        {search.length === 0 && (
                            <li>
                                <div className='p-4 text-sm text-gray-400 text-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1 mx-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Coba dengan keyword lain
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </section>
    )
}
