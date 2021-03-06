import React from 'react'

export default function Footer() {
    return (
        <footer className="my-10 bg-white rounded-lg flex md:flex-row flex-col-reverse items-center md:justify-between md:p-0 p-6 dark:bg-gray-800">
            <span className="text-xs text-gray-500 sm:text-center mt-4 md:mt-0 dark:text-gray-400">© 2022 <a href="https://adamrw.me" className="hover:underline" rel="noreferrer" target="_blank">Wartegku™</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
                <li>
                    <a href="/" className="mr-4 text-xs text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
                </li>
                <li>
                    <a href="/" className="mr-4 text-xs text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy Policy</a>
                </li>
                <li>
                    <a href="/" className="mr-4 text-xs text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
                </li>
                <li>
                    <a href="/" className="text-xs text-gray-500 hover:underline dark:text-gray-400">Contact</a>
                </li>
            </ul>
        </footer>

    )
}
