import React from 'react'
import { NavLink } from 'react-router-dom';
import { HiLocationMarker } from 'react-icons/hi'


const Home = () => {
    return (
        <>
            <div className="relative top-0 z-5">
                {/* Background Video */}
                <div className='h-100 sm:h-screen relative'>
                    <video
                        className="h-80 sm:w-full sm:h-[90vh] w-full object-cover"
                        src="/home.video.mp4"
                        autoPlay
                        loop
                        muted
                    ></video>

                    <div className='absolute top-20 left-0 sm:w-3/4 sm:left-20 w-full content-center md:left-30 sm:top-50 md:top-60 md:w-4/5  text-white bg-black/40  '>
                        <div> <h1 className='text-3xl flex flex-row justify-center relative'> Discover <br /> Most
                            Suitable  <br />Property  </h1>

                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <span>Search and find your ideal property without any hassle.</span><br />
                            <span>Forget all the difficulties in finding a residence for you.</span>
                        </div>
                        <div>

                        </div>
                    </div>


                </div>
                {/* Home Content */}

                <div className=''>
                    <h1>Home Page</h1>
                    <h1 className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nesciunt!</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quod officia. Molestiae, ea id? Sed, qui neque! Iste, velit iure ut fugit quibusdam, voluptate id similique consequuntur a itaque voluptates inventore esse magni repudiandae quos reprehenderit consectetur nam corrupti veniam unde, quod animi voluptatum? Iusto?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a maxime dignissimos in dolorem vitae labore repudiandae nisi officia. Iure provident voluptatem dignissimos inventore vel mollitia earum modi suscipit ab.</p>

                </div>
            </div >
        </>
    )
}

export default Home
