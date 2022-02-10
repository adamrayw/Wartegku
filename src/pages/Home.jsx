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
                >
                    <SwiperSlide>
                        <div className='md:h-80 h-48' style={{
                            backgroundImage: `url(${Home1})`, backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
                        }}>
                            hello
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='md:h-80 h-48' style={{
                            backgroundImage: `url(${Home2})`, backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            hello
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <HomeMenu />
            <Footer />
        </>
    )
}
