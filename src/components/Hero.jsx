import React from 'react'
import '../index.css'
import PlayBtn from'../assets/features/play-btn.svg'

function Hero() {
  return (
    <div className="px-14 py-20 font-poppins space-y-16 ">
        <div className="flex flex-col space-y-8">
            <h2 className='text-secondary text-xl font-semibold uppercase'>Wecome to Viking Universe</h2>
            <h1 className='text-5xl uppercase font-bold text-white'>Your gateway to <br /><span className='text-secondary'>endless</span> possibilites.</h1>
            <div className='divider'></div>
            <p className='text-white text-sm'>Step into our universe and unlock a treasure trove of art designs, innovative IT solutions, and expert business management services. Whether you seek inspiration, technical expertise, or strategic guidance, our website is your ultimate destination. Prepare to embark on an extraordinary journey where your needs are met, ambitions are realized, and your universe expands. Join us and discover the infinite potential that awaits within the realms of Viking Universe.</p>
        </div>
        <button className='flex gap-4 items-center text-white uppercase font-semibold text-sm'>
            <img src={PlayBtn} alt="Play Video" title='Play Video About Us'/>
            <p>About us</p>
        </button>
    </div>
  )
}

export default Hero