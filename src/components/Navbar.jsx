import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/features/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState , useEffect } from 'react'
import Search from '../assets/features/search.svg'
import '../index.css'


import Modal from '../components/Modal'
import LogModal from '../components/LogModal'
import RegModal from './RegModal'

function Navbar() {
  const [click, setClick] = useState(true) //toggle menu
  const [show, setShow] = useState(false) //modal
  const handleClose = () => setShow(false) //modal
  const handleClick = () => setClick(!click) //modal

  const [log, setLog] = useState(false)
  const loghandleClose = () => {
    setLog(false)
    setReg(false)
  };
  const [reg,setReg] = useState(false);
  // const [closeLog, setCloseLog] = useState(false)

  // let check;
  // const handleLogModal = (e) => {
  //   if (e === 'login') {
  //     check = e
  //     setLog(true);
  //   }
  // }

  // Check Screen Size 

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowWidth(window.innerWidth);
  //   }
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  return (
    <div className="container relative mx-auto text-white lg:px-20 font-poppins text-xs text-semibold flex">
      <div className="logo flex items-center md:px-5">

        <img src={Logo} style={{height: '80px'}} alt="Viking Universe Logo" className='logo'/>

        <button className='p-5 text-center absolute right-14 md:right-20 lg:right-64 'onClick={() => setShow(true)}>
          <img src={Search} alt="Search" className='search-icon' />
        </button>
        <FontAwesomeIcon icon={!click ? faBars:faX}className='toggle text-2xl absolute right-5 md:right-10 cursor-pointer hover:text-blue-300  lg:hidden'
        onClick={() => {
          setClick(!click)
        }}
        />
        <nav className='uppercase text-center '>
          <ul className='flex flex-col absolute top-20 bg-blue-500 w-full left-0 gap-2 lg:sticky lg:ml-5 lg:bg-transparent'>
            {
              click ? (
              <div className='lg:flex lg:items-center lg:gap-2 xl:gap-10'>
                <Link to="/" onClick={handleClick}><li>Home</li></Link>
                <Link to="/services" onClick={handleClick}>
                  <li className='service'>Services
                    <ul className='sub-1 z-50'>
                      <li>Design Art</li>
                      <li>Content Creation</li>
                      <li>Creative Writing</li>
                      <li>Business & Operational Assistance</li>
                      <li>Marketing</li>
                      <li>Accouting & Finance</li>
                      <li>Technology Development</li>
                    </ul>
                  </li>
                </Link>
                <Link to="about" spy={true} smooth={true} offset={50} duration={500}><li>About us</li></Link>
                <Link to="/faq" onClick={handleClick}><li>Faq</li></Link>
                <Link to="/contact" onClick={handleClick}><li>Contact</li></Link>
                <Link to="/blog" onClick={handleClick}><li>Blog</li></Link>
              </div>
              ) : (null)
            }
          </ul>
        </nav>
        <div className='sign-in-sign-up-btn items-center justify-evenly p-5 w-40 sm:hidden md:hidden lg:flex '>
              <p className='text-white hover:text-blue-300 cursor-pointer'
              onClick={()=>setLog(true)}
              >Sign In</p>
              <span className='border h-6'></span>
              <p className='text-white hover:text-blue-300 cursor-pointer'
              onClick={()=>setReg(true)}
              >Sign Up</p>
        </div>
      </div>
      <Modal onClose={handleClose} visible={show} />
      <LogModal onClose={loghandleClose} visible={log}/>
      <RegModal onClose={loghandleClose} regVisible={reg}/>
    </div>
  )
}

export default Navbar