import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../images/logo.svg'
import { AiFillHome } from 'react-icons/ai'
const Header = () => {
    const location = useLocation()
    console.log(location)

    const navigate = useNavigate()

    function pathMatchRoute(route) {
        if (route === location.pathname) {
            return true;
        }
    }

    return (
        <nav className='flex flex-col justify-center sticky top-0 left-0 right-0 h-[70px] z-30'>
            <ul className='flex justify-between items-center'>
                <li className='flex'>
                    <img onClick={() => navigate('/')} className='h-[50px] mr-6 ml-5 my-2 cursor-pointer' src={logo} alt="" />
                    <ul className='flex items-center gap-9 invisible sm:visible'>

                        <li
                            className={`flex items-center gap-2 cursor-pointer py-3 text-sm font-semibold text-white hover:border-b-[3px]  ${pathMatchRoute("/Home") && "border-b-[3px] "
                                }`}
                            onClick={() => navigate("/Home")}
                        >
                           <AiFillHome/> Home
                        </li>

                    </ul>
                </li>
                <li className='mr-4'>
                    <button>Log in</button>
                </li>
            </ul>
        </nav>

    )
}

export default Header
