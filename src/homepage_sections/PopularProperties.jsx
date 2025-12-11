import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { popularProperty } from '../../utils/properties.js'

const PopularProperties = () => {
    let prev = document.querySelector("swiper-navigation-icon")
    console.log(prev);

    return (
        <div className='mt-15'>
            <div className='w-full text-center'>
                <span className='text-orange-400 md:text-2xl'>Best Choice</span>
                <h1 className='text-[#121627] text-2xl md:text-3xl font-bold'>Featured Property</h1>
            </div>
            <div className='mt-10 px-15 lg:px-30'>
                <div className="custom-next swiper-button-next "></div>
                <div className="custom-prev swiper-button-prev "></div>
                <Swiper modules={[Navigation, Pagination, Autoplay]}

                    // Basic configuration
                    spaceBetween={16}
                    slidesPerView={1}


                    // Responsive breakpoints
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 3 },
                    }}

                    // Navigation arrows (prev/next)

                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    // Pagination (dots)
                    pagination={{ clickable: true }}

                    allowTouchMove={false}
                    // Looping
                    loop={true}>


                    {

                        popularProperty.map((card, i) => (

                            <SwiperSlide key={i} className=' bg-slate-50 border border-slate-400 rounded-2xl relative cursor-pointer' >
                                <Link to={`/property/${card.id}`} key={card.id}>
                                    <div className="slide-content items-center"><img src={card.image} className="rounded-4xl w-full p-5 h-60 object-cover " />
                                        <p className='pl-6'>{card.price}</p>
                                        <h1 className='pl-6'>{card.name}</h1>
                                        <p className='pl-6'>{card.id}</p>
                                        <p className='absolute top-10 left-6 bg-black/40 text-white rounded-2xl p-1 px-2'>resale</p>
                                        <h className=" absolute top-45 left-6  text-white rounded-2xl text-2xl font-bold"> 5.6 Cr Onwards</h>
                                    </div>
                                </Link>
                            </SwiperSlide>

                        ))
                    }
                </Swiper>
            </div >
        </div >
    )
}

export default PopularProperties
