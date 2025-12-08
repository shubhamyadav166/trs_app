import React from 'react'
import { NavLink } from 'react-router-dom';
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup';
import Companies from '../homepage_sections/Companies';
import PopularProperties from '../homepage_sections/PopularProperties';


const Home = () => {
    return (
        <>
            <div className="relative top-0 z-5">
                {/* Background Video */}
                <div className='h-80 sm:h-[95vh] relative'>
                    <video
                        className="h-90 sm:w-full sm:h-[90vh] w-full object-cover"
                        src="./trs_home_video.mp4"
                        autoPlay
                        loop
                        muted
                    ></video>

                    <div className='absolute top-20 left-0 sm:w-3/4 sm:left-20 w-full flex justify-center items-center md:left-30 sm:top-50 md:top-60 md:w-4/5  text-white bg-black/40'>
                        <div className='flex flex-col justify-around px-5 py-5 gap-2'>
                            <div className='flex justify-center'>
                                <div className='text-2xl sm:gap-3 sm:text-5xl font-bold flex flex-col lg:flex-row justify-center relative'>
                                    <h1>Discover</h1>
                                    <h1>Most Suitable</h1>
                                    <h1> Property  </h1>
                                </div>
                            </div>
                            <div className='hidden lg:flex justify-center md:text-2xl'>

                                <span>Forget all the difficulties in finding a residence for you.</span>
                            </div>
                            <div className='flex justify-center'>
                                <div className='bg-amber-50 lg:w-3/4 p-1 sm:p-2 rounded-2xl flex-row flex items-center sm:justify-between sm:gap-2 md:gap-5 gap-1'>
                                    <label htmlFor="location"> <HiLocationMarker className='text-blue-600 sm:text-2xl' id="Location" /></label>

                                    <input type="text" id="location" placeholder='Location' className='sm:text-2xl outline-none  text-black p-1' />

                                    <button className='bg-blue-600 rounded-2xl p-1 px-2 sm:text-2xl '>search</button>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className='flex flex-row justify-start md:justify-center items-center gap-2 sm:gap-5 md:gap-10'>
                                    <div className='lg:text-2xl'>
                                        <p className='w-full sm:text-center '><CountUp start={500} end={5000} duration={3} /> <span className='text-orange-400 lg:text-4xl'>+</span></p>
                                        <p>Primium Property</p>
                                    </div>
                                    <div className='lg:text-2xl'>
                                        <p className='w-full md:text-center '><CountUp start={1000} end={2000} duration={3} /> <span className='text-orange-400 lg:text-4xl'>+</span></p>
                                        <p>Happy Customers</p>
                                    </div>
                                    <div className='lg:text-2xl'>
                                        <p className='w-full md:text-center '><CountUp start={0} end={30} duration={3} /> <span className='text-orange-400 lg:text-4xl'>+</span></p>
                                        <p>Award Winning </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Home Content */}
                <div className=' p-5 pt-10'>  <Companies /></div>
                <div>  <PopularProperties /></div>


            </div >
        </>
    )
}

export default Home
