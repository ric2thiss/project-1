import React from 'react'
import Hero from '../components/Hero'

function Home() {
  return ( 
    <div className='bg-hero-pattern'>
        <div className="container relative mx-auto lg:px-20">
          <Hero />
        </div>
    </div>
  )
}

export default Home