import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase';
import backgroundImg from '../images/home-background.png';
import img1 from '../images/viewers-disney.png'
import img2 from '../images/viewers-marvel.png'
import img3 from '../images/viewers-national.png'
import img4 from '../images/viewers-pixar.png'
import img5 from '../images/viewers-starwars.png'
import Spinner from './Spinner';

function Original() {
    const main = ` mt-[7%]
    h-full
    bg-cover
    bg-no-repeat
    `

    const parentDiv = `
    pt-4
    grid
    lg:grid-cols-4
    md:grid-cols-2
    sm:grid-cols-2
    `

    const childDiv = `
     mt-[15.25%]
     border-4
     border-[rgba(249,249,249,0.1)]
     m-5
     rounded-md
     hover:scale-110
     transition
     duration-[200ms]
     ease-in-out
    relative
   
    `
    const imgStyle = `
    w-full 
    block
    cover
    transition
    duration-2
    hover:shadow-lg
    hover:shadow-[#07060A]
    hover:border-2 
    hover:border-white
    rounded-md
    opacity-60
    `
    
    const movieTitle=
    `  text-center
    absolute
    bottom-0
    left-2
      `

    const [original, setoriginal] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchMovie() {
            try {
                const colref = collection(db, 'movies')
                const snapshot = await getDocs(colref)
                let movies = []
                snapshot.forEach((doc) => {
                    if (doc.data().type === 'original') {
                        movies.push({
                            ...doc.data(), id: doc.id
                        })
                    }
                })
                setoriginal(movies)
                setLoading(false)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchMovie()
    },[])

    return (
        <main className={main}>
    <h1>Originals Shows</h1>

    <div className={parentDiv}>
        {loading ? (
            <Spinner/>
        ) : (
            original.map((movie) => (
                <div className={childDiv}>
                    <Link to={'/detail/' + movie.id}>
                        <img className={imgStyle} src={movie.cardImg} alt="" />
                    </Link>
                    <p className={movieTitle}>{movie.title}</p>
                </div>
            ))
        )}
    </div>
</main>
      
    )
}

export default Original
