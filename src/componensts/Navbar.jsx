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
            {/* Desktop */}
            <div className='hidden sm:flex flex-row justify-around mt-7 text-xl items-center w-full px-10'>
                <div className='w-1/2'><img className='h-15 w-20' src="/trs_logo.jpg" alt="" /> </div>
                <div>
                    <ul className='flex justify-around gap-10 w-1/2'>

                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>

                    </ul>
                </div>
            </div>

            <div className='flex flex-row justify-between items-center p-7 sm:hidden bg-slate-400'>
                <div className='items-center'><img className='h-10 w-15' src="/trs_logo.jpg" alt="Brand logo" /></div>
                <div className='text-xl'> {show ? <span onClick={handleClick}><CiMenuBurger /></span> : <span onClick={handleClick}><RxCross1 /></span>}</div>
            </div>
            {/* Mobile */}


            <ul className={`flex flex-col bg-slate-400 p-10 gap-10 absolute h-screen transition-all duration-700 ${isVisble ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
                <li onClick={handleClick}><NavLink className={({ isActive }) =>
                    isActive
                        ? "#0B2C3D text-white px-3 py-1 rounded"
                        : "px-3 py-1"
                } to="/">Home</NavLink></li>
                <li onClick={handleClick}><NavLink className={({ isActive }) =>
                    isActive
                        ? "#0B2C3D text-white px-3 py-1 rounded"
                        : "px-3 py-1"
                } to="/about">About</NavLink></li>
                <li onClick={handleClick}><NavLink className={({ isActive }) =>
                    isActive
                        ? "#0B2C3D text-white px-3 py-1 rounded"
                        : "px-3 py-1"
                } to="/contact">Contact</NavLink></li>
                <li onClick={handleClick}><NavLink className={({ isActive }) =>
                    isActive
                        ? "#0B2C3D text-white px-3 py-1 rounded"
                        : "px-3 py-1"
                } to="/blogs">Blogs</NavLink></li>
                <li onClick={handleClick}><NavLink className={({ isActive }) =>
                    isActive
                        ? "#0B2C3D text-white px-3 py-1 rounded"
                        : "px-3 py-1"
                } to="/projects">Projects</NavLink></li>
            </ul>




        </>
    )
}

export default Navbar
