import React from 'react'
import Search from '../assets/features/search.svg'
import {Link} from 'react-router-dom'

function LogModal({visible, onClose,}) {
    const handleClose = (e) => {
        if(e.target.id === 'outerContainer') onClose()
    }
    if(!visible) return null;
  return (
    <div id='outerContainer' onClick={handleClose} className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center font-poppins'>
        <div className='flex justify-center items-center gap-60 bg-black' 
        style={{
            width: '500px',
            height: '400px',
            padding: '46px 82px',
            borderRadius: '0px 20px 20px 20px'
        }}
        >
            <div className='mx-auto flex flex-col'
            style={{
                width: '336px',
                height: '308px',
                flexShrink: '0',
            }}
            >
                <p className='text-xl font-bold text-white'>User Login</p>
                <form className='flex flex-col mt-6'>
                    <label htmlFor="username" className='my-2'>Username</label>
                    <input type="text" id="username" className='h-10 bg-transparent px-3'
                    style={{
                        strokeWidth: '1.292px',
                        stroke: '#5F5F5F',
                        border: '1px solid #5F5F5F',
                        outline: 'none',
                        borderRadius: '8px'
                    }}
                    />
                    <label htmlFor="password" className='my-2'>Password</label>
                    <input type="text" id="password" className='h-10 bg-transparent px-3'
                    style={{
                        strokeWidth: '1.292px',
                        stroke: '#5F5F5F',
                        border: '1px solid #5F5F5F',
                        outline: 'none',
                        borderRadius: '8px'
                    }}
                    />
                    <div className='flex justify-between mt-1'>
                        <div>
                            <input type="checkbox" id='remember'/>
                            <label htmlFor='remember'> Remember me</label>
                        </div>
                        <Link to="/" className='text-[#0F9FF7]'>Forgot Password?</Link>
                    </div>
                    <input type="submit" className='mt-10'
                    style={{
                        borderRadius: '20px',
                        background: '#313131',
                        padding: '10px 20px'
                    }}      
                    value='Sign In'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LogModal