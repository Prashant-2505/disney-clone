import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../images/logo.svg'
import { AiFillHome, AiFillStar, AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai'
import { FaTape } from 'react-icons/fa'
import { MdMonitor } from 'react-icons/md'
import { auth, provider } from '../firebase'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()

    function pathMatchRoute(route) {
        if (route === location.pathname) {
            return true;
        }
    }


    async function handleAuth() {
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            console.log(user.displayName)
            navigate('/Home')
        } catch (error) {
            alert(error)
        }
    }


    return (
        <nav className='flex flex-col justify-center sticky top-0 left-0 right-0 h-[70px] z-30'>
            <ul className='flex justify-between items-center flex-wrap'>
                <li className='flex'>
                    <img onClick={() => navigate('/')} className='h-[50px] mr-6 ml-5 my-2 cursor-pointer' src={logo} alt="" />
                    <ul className='  items-center gap-9 hidden lg:flex'>

                        <li
                            className={` uppercase tracking-[0.2px] flex items-center gap-2 cursor-pointer py-3 text-sm font-semibold text-white hover:border-b-[3px]  ${pathMatchRoute("/Home") && "border-b-[3px] "
                                }`}
                            onClick={() => navigate("/Home")}
                        >
                            <AiFillHome /> Home
                        </li>

                        <li
                            className={` uppercase tracking-[0.2px] flex items-center gap-2 cursor-pointer py-3 text-sm font-semibold text-white hover:border-b-[3px]  ${pathMatchRoute("/Home") && "border-b-[3px] "
                                }`}
                            onClick={() => navigate("/Home")}
                        >
                            <AiOutlineSearch />  Search
                        </li>


                        <li
                            className={` uppercase tracking-[0.2px] flex items-center gap-2 cursor-pointer py-3 text-sm font-semibold text-white hover:border-b-[3px]  ${pathMatchRoute("/Home") && "border-b-[3px] "
                                }`}
                            onClick={() => navigate("/Home")}
                        >
                            <AiOutlinePlus /> WatchList
                        </li>


                        <li
                            className={` uppercase tracking-[0.2px] flex items-center gap-2 cursor-pointer py-3 text-sm font-semibold text-white hover:border-b-[3px]  ${pathMatchRoute("/Home") && "border-b-[3px] "
                                }`}
                            onClick={() => navigate("/Home")}
                        >
                            <AiFillStar /> originals
                        </li>


                        <li
                            className={` uppercase tracking-[0.2px] flex items-center gap-2 cursor-pointer py-3 text-sm font-semibold text-white hover:border-b-[3px]  ${pathMatchRoute("/Home") && "border-b-[3px] "
                                }`}
                            onClick={() => navigate("/Home")}
                        >
                            <FaTape /> Movies
                        </li>


                        <li
                            className={` uppercase tracking-[0.2px] flex items-center gap-2 cursor-pointer py-3 text-sm font-semibold text-white hover:border-b-[3px]  ${pathMatchRoute("/Home") && "border-b-[3px] "
                                }`}
                            onClick={() => navigate("/Home")}
                        >
                            <MdMonitor /> Series
                        </li>

                    </ul>
                </li>
                <li className='mr-4'>
                    <button onClick={handleAuth} className='mr-3 border-[1px] border-white px-3 py-2 rounded-md font-semibold uppercase hover:text-[#040714] hover:bg-white transition duration-200 ease-in-out tracking-[2px] '>Login</button>
                </li>
            </ul>
        </nav>

    )
}

export default Header
