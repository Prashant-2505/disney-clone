import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {useAuthStatus} from '../Hooks/useAuthStatus'
import Spinner from "./Spinner";

export default function PrivateRoute() {
    const{loggedIn, checkStatus} = useAuthStatus()
    if(checkStatus===true)
    {
        return <Spinner/>
    }
    return loggedIn? <Outlet/> : <Navigate to='/LoginPage'/>

}
