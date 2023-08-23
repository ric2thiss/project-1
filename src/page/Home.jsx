import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
// import Home from './Home'
import Services from './Services'
import Benefits from './Benefits'
import About from './About'
import Blog from './Blog'
import Faq from './Faq'
import Testimonials from './Testimonial'

function Home() {
  return ( 
    <div>
      <div className='bg-hero-pattern bg-cover bg-bottom bg-no-repeat'>
        <div className="container mx-auto lg:px-20">
          <Hero />
        </div>
      </div>
      <div className='bg-service-pattern bg-cover bg-bottom bg-no-repeat'>
        <div className="container mx-auto lg:px-20" id='about'>
          <Services />
        </div>
      </div>
      <div className='bg-benefits-pattern bg-cover bg-bottom bg-no-repeat'>
        <div className="container mx-auto lg:px-20" id='about'>
          <Services />
        </div>
      </div>
      <div className='bg-about-pattern bg-cover bg-bottom bg-no-repeat'>
        <div className="container mx-auto lg:px-20" id='about'>
          <Services />
        </div>
      </div>
      <div className='bg-blog-pattern bg-cover bg-bottom bg-no-repeat'>
        <div className="container mx-auto lg:px-20" id='about'>
          <Services />
        </div>
      </div>
      <div className='bg-faq-pattern bg-cover bg-bottom bg-no-repeat'>
        <div className="container mx-auto lg:px-20" id='about'>
          <Services />
        </div>
      </div>
      <div className='bg-testimonial-pattern bg-cover bg-bottom bg-no-repeat'>
        <div className="container mx-auto lg:px-20" id='about'>
          <Services />
        </div>
      </div>
    </div>
  )
}

export default Home