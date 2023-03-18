import React from 'react'
import { Link } from 'react-router-dom'

function Recomend() {
    const main = ` mt-8`

    const parentDiv = `
    pt-4
    grid
    lg:grid-cols-4
    md:grid-cols-2
    sm:grid-cols-2
    `

  return (
    <main className={main}>
      Recommendation for you
      <div className={parentDiv}>
        <div>
            <Link to ='/'>
                <img src="" alt="" />
            </Link>
        </div>

        <div>
            <Link to ='/'>
                <img src="" alt="" />
            </Link>
        </div>

        <div>
            <Link to ='/'>
                <img src="" alt="" />
            </Link>
        </div>

        <div>
            <Link to ='/'>
                <img src="" alt="" />
            </Link>
        </div>
        
      </div>
    </main>
  )
}

export default Recomend
