import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import Spinner from './Spinner';
import { HiPlay } from 'react-icons/hi'
import { useParams } from 'react-router-dom';

function MoviDetails() {


  const imgStyle = `
    w-full
    h-[100vh]

 `;

  const backgroundDiv = `
   fixed
   w-full
   
 `;

  const titleImg = `
   max-w-[600px]
   min-w-[200px]
   w-[35vw]
 `

  const titleDiv = `
   absolute
   top-0
   left-3
   h-[30vh]
   min-h-[170px]
   w-[70vw]
 `;

  const contentDiv = `
   absolute
   top-[30vh]
   max-w-[874px]
 `;

  const controlDiv = `
 text-center
 flex
 items-center
 flex-nowrap
 m-h-[56px]
 pl-6
 h-[45px]
 md:h-full
 sm:py-[12px]
 p-0
 md:text-xl
 text-[12px]
 gap-3
`;



  const [Movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)
  const { id } = useParams() // Destructure id from the object returned by useParams

  useEffect(() => {
    async function fetchMovie(movieId) { // Rename the parameter to avoid confusion with the id variable
      try {
        const docRef = doc(db, 'movies', movieId) // Use doc instead of collection to retrieve a single document
        const docSnap = await getDoc(docRef) // Use getDoc instead of getDocs to retrieve a single document

        if (docSnap.exists()) {
          setMovies({ ...docSnap.data(), id: docSnap.id })
          setLoading(false)
        } else {
          console.log('No such document!')
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchMovie(id)
  }, [id])


  return (
    <div className='fixed'>
      {loading ? (<Spinner />) :
        (
          <div className=' opacity-80 top-0 right-0  relative -z-10'>

            <div className={backgroundDiv}>
              <img className={imgStyle} src={Movies.backgroundImg} alt={Movies.title} />
            </div>

            <div className={titleDiv}>
              <img className={titleImg} src={Movies.titleImg} alt="" />
            </div>

            <div className={contentDiv}>
              <div className={controlDiv}>
                <div className=" flex items-center gap-3 bg-white p-3 rounded-md cursor-pointer hover:bg-slate-100 ">
                  <HiPlay className='text-5xl bg-black' />
                  <p className='text-black font-semibold uppercase tracking-[10px] '> Play</p>
                  <div>
                  </div>
                </div>

                <div className=" flex items-center gap-3 bg-[rgb(0,0,0,0.3)] p-3 rounded-md cursor-pointer  border-white border-[1px]  ">
                  <HiPlay className='text-5xl ' />
                  <p className='text- font-semibold uppercase tracking-[10px] '> trailer</p>
                  <div>
                  </div>
                </div>

              </div>
              <div className='mt-[10%] text-[rgb(249,249,249)] text-[12px] sm:text-[18px] px-[16px]'>
                {Movies.subTitle}
              </div>,
              <div className=' text-[16px] px-[14px] text-[rgb(249,249,249)] sm:text-[20px] mt-[1%] mb-5'>
                {Movies.description}
              </div>
            </div>

          </div>
        )
      }
    </div>



  )
}

export default MoviDetails


