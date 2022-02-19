import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import Validation from '../../components/Validation';

export default function Register() {

    const [registerInput, setRegisterInput] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [errorMsg, setErrorMsg] = useState([])

    const handleRegister = async (e) => {
        e.preventDefault()

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }

        try {
            axios.get('/sanctum/csrf-cookie')
            const response = await axios.post('/api/register', data)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user_name', response.data.username)
            toast.success('Register berhasil!', {
                position: "top-right",
                autoClose: 1800,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
            });
            if (response.status === 200) {
                window.location.href = '/'
            }
        } catch (error) {
            setErrorMsg(error.response.data.message)
        }

        console.log(data)
    }

    return (
        <section className='my-8'>
            <ToastContainer className='text-left' />
            <div className="flex flex-col items-center px-12 max-w-md mx-auto">
                <div className="text-center">
                    <h1 className="text-2xl font-extrabold text-blue-500">Register</h1>
                </div>
                <div className="self-center w-full mt-6">
                    <div className="bg-white border rounded-lg shadow-xl">
                        <form className="py-3 px-6" onSubmit={handleRegister}>
                            <input type="text" value={registerInput.name} className={`block w-full h-12 mt-2 text-sm  ${errorMsg.name ? 'border-2 border-red-500' : 'border border-gray-200'} rounded-md ring-gray-300 ring-opacity-50 focus:outline-none focus:bg-white focus:border-blue-500`} placeholder="Nama Lengkap"
                                onChange={((e) => {
                                    setRegisterInput({ ...registerInput, name: e.target.value });
                                    setErrorMsg({ ...errorMsg, name: '' })
                                })}
                            />
                            <Validation error={errorMsg.name} />
                            <input type="email" value={registerInput.email} className={`block w-full h-12 mt-2 text-sm  ${errorMsg.email ? 'border-2 border-red-500' : 'border border-gray-200'} rounded-md ring-gray-300 ring-opacity-50 focus:outline-none focus:bg-white focus:border-blue-500`} placeholder="Email"
                                onChange={((e) => {
                                    setRegisterInput({ ...registerInput, email: e.target.value });
                                    setErrorMsg({ ...errorMsg, email: '' })
                                })}
                            />
                            <Validation error={errorMsg.email} />
                            <input type="password" value={registerInput.password} className={`block w-full h-12 mt-3 text-sm ${errorMsg.password ? 'border-2 border-red-500' : 'border border-gray-200'} rounded-md ring-gray-300 ring-opacity-50 focus:outline-none focus:bg-white focus:border-blue-500" placeholder="Password" autoComplete="current-password`}
                                placeholder="Password"
                                onChange={((e) => {
                                    setRegisterInput({ ...registerInput, password: e.target.value });
                                    setErrorMsg({ ...errorMsg, password: '' })
                                })}
                            />
                            <Validation error={errorMsg.password} />
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
