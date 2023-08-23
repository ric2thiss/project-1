import React from 'react'
import '../App.css'

function Services() {
  return (
    <div className="px-5 py-10 md:px-14 md:py-20 font-poppins space-y-16 " id='about'>
        <div className="flex flex-col space-y-8">
            <h2 className='label text-secondary sm:text-lg md:text-xl lg:text-2xl font-semibold uppercase tracking-widest'>Services</h2>
            <h1 className='title text-2xl sm:text-4xl lg:text-5xl uppercase font-bold text-white'>lorem ipsum <span className='text-secondary'>lorem</span> ipsum.</h1>
            <div className='divider'></div>
            <p className='description text-white text-xs sm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mi vitae lacus venenatis aliquet. Nunc semper felis in elit commodo cursus. Nulla facilisi. Cras pulvinar faucibus libero, ac facilisis lectus. Suspendisse quis nunc auctor, interdum mi sed, tempus mi. Sed suscipit leo nec odio feugiat, eget bibendum nisl dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mi vitae lacus venenatis aliquet. Nunc semper felis in elit commodo cursus. Nulla facilisi. Cras pulvinar faucibus libero, ac facilisis lectus. Suspendisse quis nunc auctor, interdum mi sed, tempus mi. Sed suscipit leo nec odio feugiat, eget bibendum nisl dapibus.</p>
        </div>
        <button className='flex gap-4 items-center text-white uppercase font-semibold text-xs sm:text-sm'>
            
        </button>
    </div>
  )
}

export default Services