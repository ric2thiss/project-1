import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/features/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState , useEffect } from 'react'
import Search from '../assets/features/search.svg'
import '../index.css'

// Test 

import Modal from '../components/Modal'


function Navbar() {
  const [click, setClick] = useState(false) //toggle menu
  const [show, setShow] = useState(false) //modal
  const handleClose = () => setShow(false) //modal
  const handleClick = () => setClick(!click) //modal

  // Check Screen Size 

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(()=>{
    if (windowWidth > 768){
      setClick(false)
    }
  },[])
  
  return (
    <div className="container relative mx-auto text-white lg:px-20 font-poppins text-xs flex">
      <div className="logo flex items-center md:px-5">
        <img src={Logo} style={{height: '80px'}} alt="Viking Universe Logo"/>
        <button className='p-5 text-center absolute right-14 md:right-48 lg:right-64 'onClick={() => setShow(true)}>
          <img src={Search} alt="Search" />
        </button>
        <FontAwesomeIcon icon={!click ? faBars:faX}className='text-2xl absolute right-5 cursor-pointer hover:text-blue-300   md:hidden'
        onClick={() => {
          setClick(!click)
        }}
        />
        <nav className='uppercase'>
          <ul className='flex flex-col absolute top-20 secondary w-full left-0 gap-2 lg:flex'>
            {
              click ? (
              <>
                <Link to="/" onClick={handleClick}><li>Home</li></Link>
                <Link to="/services" onClick={handleClick}><li>Services</li></Link>
                <Link to="/about" onClick={handleClick}><li>About us</li></Link>
                <Link to="/faq" onClick={handleClick}><li>Faq</li></Link>
                <Link to="/contact" onClick={handleClick}><li>Contact</li></Link>
                <Link to="/blog" onClick={handleClick}><li>Blog</li></Link>
              </>) : (null)
            }
          </ul>
        </nav>
        <div className='sign-in-sign-up-btn items-center justify-evenly p-5 w-40'>
              <p className='text-white hover:text-blue-300 cursor-pointer'>Sign In</p>
              <span className='border h-6'></span>
              <p className='text-white hover:text-blue-300 cursor-pointer'>Sign Up</p>
        </div>
      </div>
      <Modal onClose={handleClose} visible={show} />
    </div>
  )
}

export default Navbar