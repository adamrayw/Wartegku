import React, { useEffect, useState } from 'react'

export default function Greeting() {
    const [waktu, setWaktu] = useState('');

    useEffect(() => {
        const time = new Date().toLocaleTimeString(['ban', 'id']);
        if (time < '12:00:00') {
            setWaktu('Selamat Pagi');
        } else if (time < '18:00:00') {
            setWaktu('Selamat Siang');
        } else {
            setWaktu('Selamat Malam');
        }
    }, [])

    return (
        <h2 className='text-black font-bold md:text-2xl text-xl text-left mb-4'>{waktu}!</h2>

    )
}
