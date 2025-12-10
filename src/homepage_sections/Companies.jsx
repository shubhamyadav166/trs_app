import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Companies = () => {
    return (
        <div className="mt-1  pb-10">
            <h2 className="text-center text-[#121627] md:text-4xl font-bold mb-10">
                Our Partners
            </h2>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={3} // how many logos to show at once
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
                <div className="mx-15">
                    <SwiperSlide>
                        <img src="./aipl.jpg" alt="AIPL" className="mx-auto" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./central_park.jpg" alt="Central Park" className="mx-auto" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./dlf.jpg" alt="DLF" className="mx-auto" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./elan.jpg" alt="Elan" className="mx-auto" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./godrej.jpg" alt="Godrej" className="mx-auto" />
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
};

export default Companies;