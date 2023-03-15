import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();

const LogInDetails = () => {

  const navigate = useNavigate();


  function onLogout() {
    auth.signOut();
    navigate('/')
  }

  return (


    <div className='text-center'>
      <div className='mt-[5rem] flex flex-col space-y-4 w'>
        <div>
          <h className='tracking-[5px] font-semibold text-3xl shadow-lg shadow-slate-50 uppercase bg-[#040714]'>{auth.currentUser.displayName}</h>
        </div>
       
      </div>

      <button onClick={onLogout} className='uppercase px-3 py-4 mt-[5rem] border-2 font-bold tracking-[5px] mx-auto text-[20px] hover:bg-white hover:text-[#040714] rounded-md shadow-md shadow-slate-100 hover:shadow-lg hover:shadow-slate-50'>Sign out</button>
    </div>


  )
}

export default LogInDetails
