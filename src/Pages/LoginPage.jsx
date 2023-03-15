import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase'

export const LoginPage = () => {
    const navigate = useNavigate()
    const [logInData, setLogInData] = useState('login')
    const [logIn, setLogIn] = useState(false)

    async function handleAuth() {
        try {
            const auth = getAuth()
            // provider is a googleprovider who give fumctionality to signup with google
            const provider = new GoogleAuthProvider()
            // int result we gave signupWuthPopup whis is firebase method used to sign in with pop page take two parameter auth and provider
            // and its give us a rsult which we store and its a await 
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            // console.log(user.displayName)
            const userDetails = {
                name: user.displayName,
                email: user.email
            }
            // here we use setdoc menas to set the data in a collectio
            // intitaly we dont have any collection in firestore 
            // setDoc take 2 one is doc and second is data
            // doc take 3 parameters db,collection name,user unique id
            // if there is no collection in database of of that name then it
            // will create new one
            await setDoc(doc(db, 'users', user.uid), userDetails)
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                setLogInData(user.displayName)
                setLogIn(true)
            }
            else {
                alert('no user')
            }
            navigate('/Home')
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div>
            <h1>This is Login Page</h1>
            <div className=" flex justify-center mt-[10%]">
            <button onClick={handleAuth} className=' border-2 px-4 py-4 tracking-[5px] uppercase font-bold hover:text-[#040714] hover:bg-white rounded-lg transition duration-200 ease-in-out shadow-md shadow-slate-50 hover:shadow-xl hover:shadow-slate-50' > Sign Up with google</button>
            </div>
        </div>
    )
}
