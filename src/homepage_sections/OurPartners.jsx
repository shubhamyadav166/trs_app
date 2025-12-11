import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const OurPartners = () => {
    return (
        <div className="m-10 lg:m-20">
            <h2 className="text-center text-2xl  md:text-4xl text-slate-600 font-ptserif">
                Our Partners
            </h2>
            <p className="text-center text-slate-500 mb-15 font-ptserif">Exclusively partnering with the best companies across the globe.</p>

            <Swiper

                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={2} // how many logos to show at once
                loop={true} // infinite loop
                autoplay={{
                    delay: 2000, // 2 seconds per slide
                    disableOnInteraction: false, // keeps sliding even after hover/interaction
                }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                <div className="lg:mx-15">
                    <SwiperSlide>
                        <img src="./aipl.jpg" alt="AIPL" className="mx-auto lg:w-1/2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./central_park.jpg" alt="Central Park" className="mx-auto  lg:w-1/2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./dlf.jpg" alt="DLF" className="mx-auto lg:w-1/2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./elan.jpg" alt="Elan" className="mx-auto  lg:w-1/2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./godrej.jpg" alt="Godrej" className="mx-auto  lg:w-1/2" />
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
};

export default OurPartners;