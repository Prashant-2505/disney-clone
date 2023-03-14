import React from 'react'
import styled from 'styled-components'
import backgroundImg from '../images/login-background.jpg'
import ctaLogoOne from '../images/cta-logo-one.svg'
import ctaLogoTwo from '../images/cta-logo-two.png'
const Login = () => {

   return (
      <div className='overflow-hidden flex flex-col text-center h-full'>
         <div className='flex mb-[10vw] w-full relative min-h-[100vh] justify-center items-center flex-col px-[8px] py-[40px] h-full -z-5' style={{
            backgroundImage: `url(${backgroundImg})`, height: '100%', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',opacity:'0.7'
         }}>
            <div className='h-full w-full flex items-center justify-center mb-[2vw] max-w-[659px] flex-col mx-auto '>
               <img className='mb-[12px] max-w-[600px] min-h-[1px] animate-pulse cursor-pointer hover:' src={ctaLogoOne} alt="" />
               <button className='bg-blue-600  font-bold uppercase text-white mb-[12px] w-full tracking-[1.5px] text-[18px] px-[16.5px] py-[10px] hover:bg-blue-400 transition duration-200 ease-in-out rounded-md '>get all there</button>

               <p className='text-[hsla(0,0%,95.3%,1)] text-sm m-auto leading-6 tracking-widest mb-5'>Get Premier Access to Raya and the Last Dragon for an additional fee with aDisney+ subscription. As of 10/03/2023, the price of Disney+ and the Disney Bundle will increase by $5</p>

               <img className='max-w-[600px] mb-5 w-full' src={ctaLogoTwo} alt="logo" />
            </div>

         </div>
      </div>

   )
}

export default Login
