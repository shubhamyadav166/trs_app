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
                <h1 className='text-[#121627] text-2xl md:text-3xl font-bold'>Popular Residencies</h1>
            </div>
            <div className='m-5 p-5'>
                <Swiper modules={[Navigation, Pagination, Autoplay]}


                    // Basic configuration
                    spaceBetween={16}
                    slidesPerView={1}


                    // Responsive breakpoints
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}

                    // Navigation arrows (prev/next)
                    navigation

                    // Pagination (dots)
                    pagination={{ clickable: true }}

                    allowTouchMove={false}
                    // Looping
                    loop={true}>

                    {

                        popularProperty.map((card, i) => (

                            <SwiperSlide key={i} className='py-5 px-10 hover:bg-slate-50 rounded-3xl relative cursor-pointer' >
                                <Link to={`/property/${card.id}`} key={card.id}>
                                    <div className="slide-content items-center"><img src={card.image} className='rounded-3xl ' alt="" />
                                        <p className='mt-4'>{card.price}</p>
                                        <h1>{card.name}</h1>
                                        <p>{card.id}</p>
                                        <p className='absolute top-15 left-15 bg-black/40 text-white rounded-2xl p-1 px-2'>resale</p>
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
