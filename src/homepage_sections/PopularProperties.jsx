import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { data } from '../../utils/properties.js'

const PopularProperties = () => {
    let prev = document.querySelector("swiper-navigation-icon")
    console.log(prev);

    return (
        <div>
            <div className=' m-5 pl-15'>
                <span className='text-orange-400 md:text-2xl'>Best Choice</span>
                <h1 className='text-[#121627] md:text-3xl font-bold'>Popular Residencies</h1>
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

                        data.map((card, i) => (

                            <SwiperSlide key={i} className='py-10 px-10 hover:bg-blue-100 rounded-3xl relative' >
                                <div className="slide-content items-center"><img src={card.image} className='rounded-3xl hover:scale-[1.1]' alt="" />
                                    <p className='mt-4'>{card.price}</p>
                                    <h1>{card.name}</h1>
                                    <p className='absolute top-15 left-15 bg-black/40 text-white rounded-2xl p-1 px-2'>resale</p>
                                </div>
                            </SwiperSlide>

                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default PopularProperties
