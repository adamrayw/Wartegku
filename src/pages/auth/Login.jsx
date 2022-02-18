import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Validation from '../../components/Validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const [loginInput, setLoginInput] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState([])
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }
        setLoading(true)

        console.log(loginInput);
        // axios.get('/sanctum/csrf-cookie').then((response) => {
        //     axios.post('/api/login', data).then((res) => {
        //         if (res.data.status === 200) {
        //             console.log(res.data.message);
        //             console.log(res);
        //             toast.success('Login berhasil!', {
        //                 position: "top-right",
        //                 autoClose: 1800,
        //                 hideProgressBar: true,
        //                 closeOnClick: true,
        //                 pauseOnHover: false,
        //                 draggable: false,
        //             });
        //         } else if (res.data.status === 401) {
        //             setError(res.data.message)
        //             toast.error('Login gagal!', {
        //                 position: "top-right",
        //                 autoClose: 1800,
        //                 hideProgressBar: true,
        //                 closeOnClick: true,
        //                 pauseOnHover: false,
        //                 draggable: false,
        //             });
        //         }

        //         // localStorage.setItem('token', res.data.token);
        //         console.log(res);
        //     })
        // });

        try {
            axios.get('/sanctum/csrf-cookie')
            const response = await axios.post('/api/login', data);
            console.log(response);
            if (response.data.status === 401) {
                toast.error('Pastikan email dan password sudah benar!', {
                    position: "top-right",
                    autoClose: 1800,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                });
            }
        } catch (error) {
            console.log(error.response);
            setError(error.response.data.message)
        }
        setLoading(false)
    }

    return (
        <section className='my-8'>
            <ToastContainer className='text-left' />
            <div className="flex flex-col items-center px-12 max-w-md mx-auto">
                <div className="text-center">
                    <h1 className="text-2xl font-extrabold text-blue-500">Login</h1>
                </div>
                <div className="self-center w-full mt-6">
                    <div className="bg-white border rounded-lg shadow-xl">
                        <form className="py-3 px-6" onSubmit={handleLogin}>
                            <input type="email" name='email' value={loginInput.email} onChange={((e) => {
                                setLoginInput({ ...loginInput, email: e.target.value });
                                setError({ ...error, email: '' })
                            })} className={`block w-full h-12 mt-2 text-sm  ${error.email ? 'border-2 border-red-500' : 'border border-gray-200'} rounded-md ring-gray-300 ring-opacity-50 focus:outline-none focus:bg-white focus:border-blue-500`} placeholder="Email or phone number" />
                            <Validation error={error.email} />
                            <input type="password" name='password' value={loginInput.password} onChange={((e) => {
                                setLoginInput({ ...loginInput, password: e.target.value });
                                setError({ ...error, password: '' })
                            })} className={`block w-full h-12 mt-3 text-sm  ${error.password ? 'border-2 border-red-500' : 'border border-gray-200'}  rounded-md ring-gray-300 ring-opacity-50 focus:outline-none focus:bg-white focus:border-blue-500`} placeholder="Password" autoComplete="current-password" />
                            <Validation error={error.password} />
                            <button className="w-full h-12 px-20 py-2 mt-3 text-base font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">{loading ? 'Loggin in...' : 'Log In'}</button>

                            <div className="mt-5"><hr /></div>
                            <div className="my-4 text-center">
                                <p className='text-sm text-gray-400'>Belum punya akun? <Link to="/register" className="w-5/6 mx-auto mt-10 text-base font-bold text-green-500 hover:text-green-600">Register</Link></p>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
