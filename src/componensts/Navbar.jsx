import React, { useState } from 'react'
import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [show, setShow] = useState(true)
    const [isVisble, setIsVisible] = useState(false);

    const handleClick = () => {
        setShow(!show)
        setIsVisible(!isVisble)
    }
    return (
        <>

            <div className='relative z-20 pt-5'>

                {/* Desktop */}
                <div className='hidden sm:flex flex-row justify-around text-xl items-center w-full px-10'>
                    <div className='w-1/2'><img className='h-15 w-45' src="/logo(1).png" alt="" /> </div>
                    <div>
                        <ul className='flex justify-around gap-15 w-1/2'>

                            <li className='hover:text-yellow-300'><NavLink to="/">Home</NavLink></li>
                            <li className='hover:text-yellow-300'><NavLink to="/about">About</NavLink></li>
                            <li className='hover:text-yellow-300'><NavLink to="/contact">Contact</NavLink></li>
                            <li className='hover:text-yellow-300'><NavLink to="/blogs">Blogs</NavLink></li>
                            <li className='hover:text-yellow-300'><NavLink to="/projects">Projects</NavLink></li>

                        </ul>
                    </div>
                </div>

                {/* Mobile */}
                <div className='flex flex-row justify-between items-center p-4 sm:hidden text-black'>
                    <div className='items-center'><img className='h-15 w-45' src="/logo(1).png" alt="Brand logo" /></div>
                    <div className='text-xl'> {show ? <span onClick={handleClick}><CiMenuBurger /></span> : <span onClick={handleClick}><RxCross1 /></span>}</div>
                </div>


                {/* Mobile menu slider when click hamberger icon */}
                <ul className={`flex flex-col text-black bg-white p-10 top-25 gap-10 absolute h-screen transition-all duration-700 ${isVisble ? "z-20 translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
                    <li className='hover:text-yellow-300' onClick={handleClick}><NavLink className={({ isActive }) =>
                        isActive
                            ? "#0B2C3D text-[#641bda]  px-3 py-1 rounded "
                            : "px-3 py-1"
                    } to="/">Home</NavLink></li>
                    <li className='hover:text-yellow-300' onClick={handleClick}><NavLink className={({ isActive }) =>
                        isActive
                            ? "#0B2C3D text-[#641bda]  px-3 py-1 rounded"
                            : "px-3 py-1"
                    } to="/about">About</NavLink></li>
                    <li className='hover:text-yellow-300' onClick={handleClick}><NavLink className={({ isActive }) =>
                        isActive
                            ? "#0B2C3D text-[#641bda]  px-3 py-1 rounded"
                            : "px-3 py-1"
                    } to="/contact">Contact</NavLink></li>
                    <li className='hover:text-yellow-300' onClick={handleClick}><NavLink className={({ isActive }) =>
                        isActive
                            ? "#0B2C3D text-[#641bda]  px-3 py-1 rounded"
                            : "px-3 py-1"
                    } to="/blogs">Blogs</NavLink></li>
                    <li className='hover:text-yellow-300' onClick={handleClick}><NavLink className={({ isActive }) =>
                        isActive
                            ? "#0B2C3D text-[#641bda]  px-3 py-1 rounded"
                            : "px-3 py-1"
                    } to="/projects">Projects</NavLink></li>
                </ul>


            </div>


        </>
    )
}

export default Navbar
