import React from 'react'
import CountUp from 'react-countup';
const Counter = () => {
    return (
        <div>
            <div>
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
    )
}

export default Counter
