import React from 'react'
import Search from '../assets/features/search.svg'

function Modal({visible, onClose}) {
    const handleClose = (e) => {
        if(e.target.id === 'outerContainer') onClose()
    }
    if(!visible) return null;


  return (
    <div id='outerContainer' onClick={handleClose} className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center font-poppins'>
        <div className='flex justify-center items-center gap-60' style={{
            borderRadius: '0px 20px 20px 20px',
            border: '1px solid #595959',
            padding: '20px 30px',
            }}>
            <input type="text" className=' text-xs text-white' placeholder='Search...'
            style={{
                background: 'none',
                height: '100%',
                border: 'none',
                outline: 'none',
                letterSpacing: '5px'
            }}
            />
            <button>
                <img src={Search} alt="" />
            </button>
        </div>
    </div>
  )
}

export default Modal