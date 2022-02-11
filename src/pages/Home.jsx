import React from 'react'
import Home1 from '../assets/home.jpg';
import Home2 from '../assets/home2.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import HomeMenu from '../components/HomeMenu';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <section>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    slidesPerView={1}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        "delay": 1600,
                        "disableOnInteraction": false
                    }}
                    sli
                >
                    <SwiperSlide>
                        <div className='md:h-80 h-48 flex items-center justify-center md:px-20 px-10' style={{
                            backgroundImage: `url(${Home1})`, backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
                        }}>
                            <p className='text-white font-semibold md:text-6xl text-2xl'>Males keluar rumah? <br /> pesan di Wartegku!</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='md:h-80 h-48 flex items-center justify-center md:px-20 px-10' style={{
                            backgroundImage: `url(${Home2})`, backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
                        }}>
                            <p className='text-white font-semibold md:text-6xl text-2xl'>Beli di Wartegku selalu ada diskon!</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <HomeMenu />
            <Footer />
        </>
    )
}
