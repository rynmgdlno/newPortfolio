import React from 'react'

import './spinner.scss'

const Spinner = ({ className }) => {
  return (
    <div className='spinner-container'>
      <svg className={`spinner`} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.32 113.34">
        <circle cx="50.65" cy="12.65" r="12.65" fill="rgba(0, 0, 0, .6)" />
        <circle cx="12.65" cy="34.45" r="12.65" fill="rgba(0, 0, 0, .6)" />
        <circle cx="12.65" cy="78.89" r="12.65" fill="rgba(0, 0, 0, .6)" />
        <circle cx="50.66" cy="100.69" r="12.65" fill="rgba(0, 0, 0, .6)" />
        <circle cx="88.67" cy="78.89" r="12.65" fill="rgba(0, 0, 0, .6)" />
        <circle cx="88.67" cy="34.45" r="12.65" fill="rgba(0, 0, 0, .6)" />
      </svg>
    </div>
  )
}

export default Spinner