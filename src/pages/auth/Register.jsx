import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <section className='my-8'>
            <div className="flex flex-col items-center px-12 max-w-md mx-auto">
                <div className="text-center">
                    <h1 className="text-2xl font-extrabold text-blue-500">Register</h1>
                </div>
                <div className="self-center w-full mt-6">
                    <div className="bg-white border rounded-lg shadow-xl">
                        <form className="py-3 px-6">
                            <input type="email" id="email" className="block w-full h-12 mt-2 text-sm border border-gray-200 rounded-md ring-gray-300 ring-opacity-50 focus:outline-none focus:bg-white focus:border-blue-500" placeholder="Email or phone number" />
                            <input type="password" id="password-1" className="block w-full h-12 mt-3 text-sm border border-gray-200 rounded-md ring-gray-300 ring-opacity-50 focus:outline-none focus:bg-white focus:border-blue-500" placeholder="Password" autoComplete="current-password" />
                            <button className="w-full h-12 px-4 py-2 mt-3 text-base font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">Log In</button>
                            <div className="mt-5"><hr /></div>

                            <div className="my-4 text-center">
                                <p className='text-sm text-gray-400'>Sudah punya akun? <Link to="/login" className="w-5/6 mx-auto mt-10 text-base font-bold text-green-500 hover:text-green-600">Login</Link></p>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
