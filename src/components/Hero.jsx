import React from 'react'
import '../index.css'
import PlayBtn from'../assets/features/play-btn.svg'

function Hero() {
  return (
    <div className="px-5 py-10 md:px-14 md:py-24 font-poppins space-y-16 ">
        <div className="flex flex-col space-y-8">
            <h2 className='label text-secondary sm:text-lg md:text-xl lg:text-2xl font-semibold uppercase tracking-widest'>Wecome to Viking Universe</h2>
            <h1 className='title text-2xl sm:text-4xl lg:text-5xl uppercase font-bold text-white'>Your gateway to <br /><span className='text-secondary'>endless</span> possibilites.</h1>
            <div className='divider'></div>
            <p className='description text-white text-xs sm:text-sm md:text-base'>Step into our universe and unlock a treasure trove of art designs, innovative IT solutions, and expert business management services. Whether you seek inspiration, technical expertise, or strategic guidance, our website is your ultimate destination. Prepare to embark on an extraordinary journey where your needs are met, ambitions are realized, and your universe expands. Join us and discover the infinite potential that awaits within the realms of Viking Universe.</p>
        </div>
        <button className='flex gap-4 items-center text-white uppercase font-semibold text-xs sm:text-sm'>
            <img src={PlayBtn} alt="Play Video" title='Play Video About Us'/>
            <p>About us</p>
        </button>
    </div>
  )
}

export default Hero