import React from 'react'

import './menu.scss'

const Menu = ({ children }) => {

  return (
    <>
      <div className='menu'>
        <>
          {children}
        </>
      </div>
    </>
  )
}

export default Menu