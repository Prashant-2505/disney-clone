import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../images/logo.svg'
import { AiFillHome, AiFillStar, AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai'
import { FaTape } from 'react-icons/fa'
import { MdMonitor } from 'react-icons/md'
import { auth, db, provider } from '../firebase'
import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDoc, serverTimestamp, setDoc, doc } from 'firebase/firestore'

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [pagestate,setPageState] = useState('/LoginPage')
    const auth = getAuth()

    useEffect(()=>
    {
      onAuthStateChanged(auth,(user)=>
      {
        if(user)
        {
       setPageState('Profile')
        }
        else
        {
          setPageState('Login')
        }
      })
    },[auth])


    function pathMatchRoute(route) {
        if (route === location.pathname) {
            return true;
        }
    }


    async function onClick() {
      navigate('/LogInDetails')
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
                            className={` uppercase tracking-[0.2px] flex items-center gap-2 cursor-pointer py-3 text-sm font-semibold text-white hover:border-b-[3px]   && "border-b-[3px] "
                                }`}
                            onClick={() => navigate("")}
                        >
                            <AiOutlineSearch />  Search
                        </li>


                        <li
                            className={` uppercase tracking-[0.2px] flex items-center gap-2 cursor-pointer py-3 text-sm font-semibold text-white hover:border-b-[3px]  ${pathMatchRoute("/Watchlist") && "border-b-[3px] "
                                }`}
                            onClick={() => navigate("/WatchList")}
                        >
                            <AiOutlinePlus /> WatchList
                        </li>


                        <li
                            className={` uppercase tracking-[0.2px] flex items-center gap-2 cursor-pointer py-3 text-sm font-semibold text-white hover:border-b-[3px]  ${pathMatchRoute("/Originals") && "border-b-[3px] "
                                }`}
                            onClick={() => navigate("/Originals")}
                        >
                            <AiFillStar /> originals
                        </li>


                        <li
                            className={` uppercase tracking-[0.2px] flex items-center gap-2 cursor-pointer py-3 text-sm font-semibold text-white hover:border-b-[3px]  ${pathMatchRoute("/Movies") && "border-b-[3px] "
                                }`}
                            onClick={() => navigate("/Movies")}
                        >
                            <FaTape /> Movies
                        </li>


                        <li
                            className={` uppercase tracking-[0.2px] flex items-center gap-2 cursor-pointer py-3 text-sm font-semibold text-white hover:border-b-[3px]  ${pathMatchRoute("/Series") && "border-b-[3px] "
                                }`}
                            onClick={() => navigate("/Series")}
                        >
                            <MdMonitor /> Series
                        </li>

                    </ul>
                </li>
                <li className='mr-4'>
                    <button onClick={onClick} className={`mr-3 border-[1px] border-white px-3 py-2 rounded-md font-semibold uppercase hover:text-[#040714] hover:bg-white transition duration-200 ease-in-out tracking-[2px] ${(pathMatchRoute('/Profile') || pathMatchRoute('/LoginPage'))}`}>{pagestate}</button>
                </li>
            </ul>
        </nav>

    )
}

export default Header
