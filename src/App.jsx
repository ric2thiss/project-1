import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './page/Home'
import Services from './page/Services'
import Benefits from './page/Benefits'
import About from './page/About'
import Blog from './page/Blog'
import Faq from './page/Faq'
import Testimonials from './page/Testimonial'
import Modal from './components/Modal';
import { useState } from 'react';
import { MyProvider } from './Contexts/MyContext';

function App() {
  return (
    <div className='bg-no-repeat'>
    <MyProvider>
      <BrowserRouter>
          <div className="w-full primary">
            <Navbar />
          </div>
          <Routes>
              <Route path='/' element={<Home /> } />
              <Route path='/services' element={<Services /> } />
              <Route path='/benefits' element={<Benefits /> } />
              <Route path='/about' element={<About /> } />
              <Route path='/blog' element={<Blog /> } />
              <Route path='/faq' element={<Faq /> } />
              <Route path='/testimonials' element={<Testimonials /> } />
          </Routes>
        </BrowserRouter>
    </MyProvider>
    </div>
  )
}

export default App