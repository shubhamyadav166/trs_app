import React from 'react'
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className=" w-full overflow-hidden ">
                {/* Background Video */}
                <div className='-h-screen sm:h-screen'>
                    <video
                        className="absolute top-0 w-full h-[100vh] hidden sm:block m-auto object-cover"
                        src="/home.video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    ></video>
                </div>
                {/* Home Content */}

                <div className=''>
                    <h1 className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nesciunt!</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quod officia. Molestiae, ea id? Sed, qui neque! Iste, velit iure ut fugit quibusdam, voluptate id similique consequuntur a itaque voluptates inventore esse magni repudiandae quos reprehenderit consectetur nam corrupti veniam unde, quod animi voluptatum? Iusto?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a maxime dignissimos in dolorem vitae labore repudiandae nisi officia. Iure provident voluptatem dignissimos inventore vel mollitia earum modi suscipit ab.</p>

                </div>
            </div>
        </>
    )
}

export default Home
